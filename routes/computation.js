var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var y1 = Math.abs(x);
  var y2 = Math.acos(x);
  var y3 = Math.sin(x);
  var y4 = Math.sinh(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.abs(${x}) is ${y1} ; Math.acos(${x}) is ${y2} ; Math.sin(${x}) is ${y3}; Math.sinh(${x}) is ${y4}\n`);
});

module.exports = router;