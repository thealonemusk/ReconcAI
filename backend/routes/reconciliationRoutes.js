const express = require("express");
const { reconcilePayments } = require("../controllers/reconciliationController");
const router = express.Router();

router.post("/reconcile", reconcilePayments);

module.exports = router;
