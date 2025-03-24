const express = require('express');
const { sendPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/send', sendPayment);

module.exports = router;
