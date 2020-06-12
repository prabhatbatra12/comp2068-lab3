'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('sister', { name: 'Sister' , comment: 'She is takes care of me the most.' });
});

module.exports = router;
