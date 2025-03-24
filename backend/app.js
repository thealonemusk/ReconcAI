const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/tenants", require("./routes/tenantRoutes"));
app.use("/api/reconciliation", require("./routes/reconciliationRoutes"));

module.exports = app;
