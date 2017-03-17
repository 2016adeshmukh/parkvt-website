var express = require('express'),
  router = express.Router();

router.get('/', function(req, res, next) {
  var current = new Date();
  var time = current.getHours()%12+':'+current.getMinutes();

  // res.send(ejs.render('../views/map'));

  res.json({time: current}).status(200);
});

module.exports = router;