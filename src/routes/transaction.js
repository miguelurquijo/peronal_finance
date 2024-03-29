const express = require('express');
const router = express.Router();
const passport = require('passport');
const transactionController = require('../controllers/transactionController');

router.get('/transactions', transactionController.listCatAndTrans); 
router.post('/add', transactionController.add);
router.get('/delete/:id', transactionController.delete);
router.get('/update/:id', transactionController.edit);
router.post('/update/:id', transactionController.update);
router.get('/', transactionController.home_list);
router.get('/dashboard', transactionController.dashboard_list);

module.exports = router;