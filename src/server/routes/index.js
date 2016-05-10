var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var file;
  file = ( process.env.NODE_ENV === 'production' ) ? 'production.html' : 'index.html';
  res.sendFile(path.join(__dirname, '../../client', file));
});

module.exports = router;
