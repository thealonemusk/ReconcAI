const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant" },
    amount: Number,
    date: Date,
    status: { type: String, enum: ["pending", "reconciled"], default: "pending" }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
