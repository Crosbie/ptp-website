var express = require('express');
var router = express.Router();
var $ = require('jquery');
var courseList = require('../courses.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  // render courses



  res.render('index', {layout: 'index', title: 'Pratical Training Programme', courses: courseList });
});

module.exports = router;
