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

router.get('/aakBox', function(req, res, next) {
	  res.render('aakBox/aakBox.ejs'); 
	}); 
/*
router.get('/profile/view/mahika/experience', function(req, res, next) {
	  res.render('profiles/summary/experience_mihika.ejs'); 
	});
*/

//Trial below
router.get('/trial', function(req, res, next) {
	  res.render('profiles/trial.ejs');   
	});



module.exports = router   