var express = require('express');
var router = express.Router();

let gifs = require('../data/gifs.js')

/* GET ALL GIFS. */
router.get('/', function(req, res, next) {
   res.send(gifs)
});


module.exports = router;
