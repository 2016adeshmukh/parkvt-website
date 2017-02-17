var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next) {
	console.log(req.query.user)
});

module.exports = router;