const express = require('express');
const controller = require('../controllers/transactionController');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/transactions', transactionController.list);
router.post('/add', transactionController.add);
router.get('/delete/:id', transactionController.delete);
router.get('/update/:id', transactionController.edit);
router.post('/update/:id', transactionController.update);
router.get('/categories', transactionController.categories_list);
router.get('/', transactionController.home_list);
router.get('/dashboard', transactionController.dashboard_list);





module.exports = router;