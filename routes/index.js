var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // template is index.jade
  res.render('index', { title: 'Express', subtitle: 'Welcome user'});
});

// added a new route and changed the data without having to change the HTML page
router.get('/tutorials', function(req, res, next) {
  var courseName = req.query.course;
  let courseTitle = 'Tutorials - ' + courseName;
  // template is index.jade
  res.render('index', { title: courseTitle, subtitle: 'Welcome ' + courseName + ' Dev'});
});

module.exports = router;
