const express = require('express');
const controller = require('../controllers/transactionController');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.list);

module.exports = router;