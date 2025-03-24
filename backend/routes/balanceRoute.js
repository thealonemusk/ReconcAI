const express = require('express');
const { getBalance } = require('../controllers/balanceController');
const router = express.Router();

router.get('/:currency?', getBalance);

module.exports = router;
