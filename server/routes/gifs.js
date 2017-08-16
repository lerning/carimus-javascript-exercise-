var express = require('express');
var router = express.Router();

let gifs = require('../data/gifs.js')

/* GET home page. */
router.get('/', function(req, res, next) {
   console.log('in the backend!!!');
   res.send(gifs)
});


router.get('/:id', function(req, res, next) {
   console.log('iID the backend!!!');
   res.send(true)
});

module.exports = router;
