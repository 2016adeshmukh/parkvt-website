var express = require('express'),
    router = express.Router(),
    // User = require('../models/User'),
    passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', passport.authenticate('local', 
{
    successRedirect: '/login',
    failureRedirect: '/register'
    
}), function(req, res, next) {
    
});

module.exports = router;