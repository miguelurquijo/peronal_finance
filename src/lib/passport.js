const passport = require('passport');
const Localstrategy = require('passport-local').Strategy;
const controller = {};
const express = require('express');
const router = express.Router();
const helpers = require('../lib/helpers');

const pool = require('../database/database');

passport.use('local.signup' , new Localstrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const newUser = {
        email: username,
        password: password,
        name: req.body.fullname
    };
    newUser.password = await helpers.encryptPassword(req.body.password);
    const result = await pool.query('INSERT into users SET ?', [newUser]);    
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((usr, done) => {
    done(null, usr.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
}
);