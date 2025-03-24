const Tenant = require("../models/Tenant");
const payman = require("../services/paymanService"); // Ensure Payman AI is imported

exports.createTenant = async (req, res) => {
    try {
        const { name, email, accountNumber, routingNumber, accountType, rentAmount, dueDate } = req.body;

        // Create Payee in Payman AI
        const payee = await payman.payments.createPayee({
            type: "US_ACH",
            name: name,
            accountHolderName: name,
            accountHolderType: "individual",
            accountNumber: accountNumber,
            routingNumber: routingNumber,
            accountType: accountType,
            contactDetails: {
                email: email,
            },
        });

        // Save Tenant in Database
        const tenant = new Tenant({
            name,
            email,
            payeeId: payee.id, // Save the Payman Payee ID
            rentAmount,
            dueDate,
        });

        await tenant.save();
        res.status(201).json(tenant);
    } catch (error) {
        console.error("Error Creating Tenant:", error);
        res.status(500).json({ error: "Failed to create tenant", details: error.message });
    }
};
