'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('father', { name : 'DAD' , comment: 'My dad is the one with whom i share everything' });
});

module.exports = router;
