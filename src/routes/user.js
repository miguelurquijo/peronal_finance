const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// AUTHENTICATION
router.get('/signup', userController.signup);
router.post('/signup', userController.signup_post);

module.exports = router;
