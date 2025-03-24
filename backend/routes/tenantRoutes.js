const express = require("express");
const { createTenant } = require("../controllers/tenantController");
const Tenant = require('../models/Tenant');  
const router = express.Router();

router.post("/", createTenant); // ✅ Route for adding a tenant
router.get("/", async (req, res) => {
    const tenants = await Tenant.find(); // ✅ Fetch all tenants
    res.json(tenants);
});

module.exports = router;
