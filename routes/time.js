var express = require('express'),
  router = express.Router();

router.get('/', function(req, res, next) {
  var time = new Date();

  // res.send(ejs.render('../views/map'));

  res.json({ti: time}).status(200);
});

module.exports = router;