var express = require('express'),
    router = express.Router(),
    // User = require('../models/User'),
    passport = require('passport');

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login')
}

router.get('/', isLoggedIn, function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;