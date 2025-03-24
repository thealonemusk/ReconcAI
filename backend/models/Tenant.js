const mongoose = require("mongoose");

const TenantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    payeeId: { type: String, required: true }, // Payman AI Payee ID
    rentAmount: { type: Number, required: true },
    dueDate: { type: String, required: true },
});

module.exports = mongoose.model("Tenant", TenantSchema);
