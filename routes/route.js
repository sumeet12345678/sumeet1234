var express = require('express')
var router = express.Router()

  //GET home.ejs
  router.get('/', function(req, res) {
	  res.render('home');
})



/* GET people_with_pic.ejs file. */
router.get('/people_with_pic', function(req, res, next) {
  res.render('profiles/people_with_pic'); 
});


router.get('/profile/view/mahika', function(req, res, next) {
	  res.render('profiles/profile.ejs'); 
	});


module.exports = router