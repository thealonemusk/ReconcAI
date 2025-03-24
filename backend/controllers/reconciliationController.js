const payman = require("../services/paymanService");
const Tenant = require("../models/Tenant");

exports.reconcilePayments = async (req, res) => {
    try {
        const transactions = await payman.payments.listTransactions();
        
        for (const transaction of transactions) {
            const tenant = await Tenant.findOne({ payeeId: transaction.payeeId });
            if (tenant) {
                console.log(`✅ Matched payment of $${transaction.amount} to ${tenant.name}`);
            } else {
                console.warn(`⚠️ Unmatched payment of $${transaction.amount}`);
            }
        }

        res.json({ message: "Payments reconciled successfully!" });
    } catch (error) {
        console.error("❌ Error reconciling payments:", error);
        res.status(500).json({ error: "Failed to reconcile payments", details: error.message });
    }
};
