const payman = require('../services/paymanService');
const Tenant = require('../models/Tenant');

exports.sendPayment = async (req, res) => {
    try {
        const { tenantId, amount, memo } = req.body;
        const tenant = await Tenant.findById(tenantId);

        if (!tenant) {
            return res.status(404).json({ error: "Tenant not found" });
        }

        const payment = await payman.payments.sendPayment({
            payeeId: tenant.payeeId,
            amountDecimal: amount,
            memo: memo,
        });

        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: "Failed to send payment" });
    }
};
