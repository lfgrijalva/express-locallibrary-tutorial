var express = require('express');
var router = express.Router();

/* GET cool listing. */
router.get('/', function(req, res, next) {
  res.send('You are soo cool');
});

module.exports = router;
