const payman = require('../services/paymanService');

exports.getBalance = async (req, res) => {
    try {
        const currency = req.params.currency || 'USD';
        const balance = await payman.balances.getBalance(currency);
        res.status(200).json(balance);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve balance" });
    }
};
