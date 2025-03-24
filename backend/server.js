const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json()); // ✅ Parse JSON request bodies

// Import Routes
const tenantRoutes = require("./routes/tenantRoutes");

// Use Routes
app.use("/api/tenants", tenantRoutes); // ✅ Register the tenant route

const reconciliationRoutes = require("./routes/reconciliationRoutes");
app.use("/api/reconciliation", reconciliationRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
