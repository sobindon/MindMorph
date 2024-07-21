const passport = require('passport');
const express = require('express');
require('passport-facebook')

const router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
}));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/error'
    }));

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;