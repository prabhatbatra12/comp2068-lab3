'use strict';
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('father', { name : 'DAD' , comment: 'My dad is a SSP in Punjab police' });
});

module.exports = router;
