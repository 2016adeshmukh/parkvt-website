var express = require('express'),
    router = express.Router(),
    User = require('../models/User'),
    passport = require('passport');

// routes

router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {err: err.message});
        }
        passport.authenticate('local')(req, res, function(){
           res.redirect('/login'); 
        });
    });
});

module.exports = router;