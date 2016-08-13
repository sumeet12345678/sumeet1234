var express = require('express');
var router = express.Router();

//var g_hostUrl = "http://ekpeople.herokuapp.com" ;
var g_hostUrl = "http://ekpeople.herokuapp.com" ;
//var g_hostUrl = "http://localhost:4000" ;
var g_profileHostUrl = "http://ekprofile.herokuapp.com" ;
 


  router.get('/', function(req, res, next) {
	  res.render('profiles/common.ejs', { page: "peopleSearchResult"});	    
	});
    
  router.get('/savedPeopleSearches', function(req, res, next) {
	  res.render('people/search/savedPeopleSearches.ejs');	    
	});
  
  

   router.get('/people/search/result', function(req, res, next) {
		  res.render('profiles/common.ejs', { page: "peopleSearchResult"});	    
		});

   
  

router.get('/peopleApp', function(req, res, next) {
	   res.render('people/peopleHome.ejs', {hostUrl : g_hostUrl});
	// res.render('people/peopleHome.ejs');
	});

router.get('/peopleSearch', function(req, res, next) {
	  res.render('people/peopleSearch_m.ejs', {imgUrl : g_profileHostUrl});  	     
	}); 

  

/*
 * People Search Criteria  
 */
router.get('/people/search/basic', function(req, res, next) {
	res.render('people/search/basic_criteria.ejs');   
});

 router.get('/people/search/education', function(req, res, next) {
	  res.render('people/search/education_inst.ejs');   
	});
 
 router.get('/people/search/professional_occupational', function(req, res, next) {
	  res.render('people/search/professional_occupational.ejs');   
	});
 router.get('/people/search/community', function(req, res, next) {
	  res.render('people/search/community.ejs');   
	});
 router.get('/people/search/lifestyle', function(req, res, next) {
	  res.render('people/search/lifestyle.ejs');     
	});

 
 
module.exports = router   
