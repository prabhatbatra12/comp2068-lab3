'use strict';
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { name : 'Prabhat' , comment :'Welcome to my family, I love singing and my hobby is collecting stamps' });
});

module.exports = router;
