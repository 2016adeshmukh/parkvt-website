var express = require('express'),
  router = express.Router();

router.get('/:user/:latitude/:longitude', function(req, res, next) {
  var user = req.params.user;
  var latitude = req.params.latitude;
  var longitude = req.params.longitude;

  // res.send(ejs.render('../views/map'));

  res.json({lat: latitude, long: longitude}).status(200);
});

module.exports = router;
