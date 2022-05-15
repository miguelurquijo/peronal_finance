const controller = {};
const passport = require('passport');
const helpers = require('../lib/helpers');

// funcion para cargar signup
controller.signup = (req, res) => {
    req.getConnection((err, conn) => {
            res.render('auth/signup')
        });
};

// funcion para post signup
controller.signup_post = (req, res) => {
    passport.authenticate('local.signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    })(req, res);
};

module.exports = controller;
