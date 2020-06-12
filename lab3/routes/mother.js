'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('mother', { name : 'Mom' , comment : 'She is the best person in my live and i love her alot' });
});

module.exports = router;
