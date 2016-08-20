var express = require('express');
var router = express.Router();

urls = require('../public/script/urls.js');
  
//var g_hostUrl = "https://ekpeople.herokuapp.com" ;
var g_hostUrl = "http://localhost:4000" ;

//var localOrRemote = "local";
//var localOrRemote = "remote";

var g_profileHostUrl = "http://ekprofile.herokuapp.com" ;


router.get('/', function(req, res, next) {
      //res.render('profiles/common.ejs', { page: "peopleSearchResult", localOrRemoteUrl : localOrRemote, hostUrl : g_hostUrl, });        
  	  res.render('profiles/common.ejs', { page: "peopleSearchResult", urls : urls });        
    }); 
    
  router.get('/savedPeopleSearches', function(req, res, next) {
	  res.render('people/search/savedPeopleSearches.ejs', {urls: urls});	    
	});

  router.get('/peopleUpdates', function(req, res, next) {
	  res.render('people/updates/peopleUpdates.ejs', {urls: urls});	    
	});

  router.get('/peopleFeed', function(req, res, next) {
	  res.render('people/updates/peopleFeed.ejs');	    
	});

  router.get('/teamsFeed', function(req, res, next) {
	  res.render('people/updates/teamsFeed.ejs');	    
	});

  router.get('/groupFeed', function(req, res, next) {
	  res.render('people/updates/groupFeed.ejs');	    
	});

  router.get('/connectionFeed', function(req, res, next) {
	  res.render('people/updates/connectionFeed.ejs');	    
	});
  
  router.get('/peopleNotifications', function(req, res, next) {
	  res.render('people/updates/notification/peopleNotifications.ejs', {urls: urls});	    
	}); 

  router.get('/connectionRequests', function(req, res, next) {
	  res.render('people/updates/notification/connectionRequests.ejs', {urls: urls});	    
	}); 

  router.get('/people_News_Posts', function(req, res, next) {
	  res.render('people/updates/News_Posts/people_News_Posts.ejs', {urls: urls});	    
	});

  router.get('/trending_news', function(req, res, next) {
	  res.render('people/updates/News_Posts/trending_news.ejs', {urls: urls});	    
	});


  
  router.post('/p/search', function(req, res, next) {
	  console.log("CHECKED BOXES=====" + req.param('savedSearchesChkBox'));
	  res.render('profiles/common.ejs', { page: "peopleSearchResult", hostUrl : g_hostUrl});	        
	});

 
  

router.get('/peopleApp', function(req, res, next) {
	   res.render('people/peopleHome.ejs', {urls : urls});  
	// res.render('people/peopleHome.ejs');
	});

router.get('/peopleSearch', function(req, res, next) {
	  res.render('people/peopleSearch_m.ejs', {imgUrl : g_profileHostUrl, urls : urls});  	     
	}); 

 
router.get('/peopleExperience', function(req, res, next) {
	res.render('people/search/ajax/peopleExperience.ejs');   
});

router.get('/searchByEducation', function(req, res, next) {
	res.render('people/search/ajax/searchByEducation.ejs');   
});

router.get('/searchBySocial', function(req, res, next) {
	res.render('people/search/ajax/searchBySocial.ejs');   
	});

router.get('/searchBySkills', function(req, res, next) {
	res.render('people/search/ajax/searchBySkills.ejs');   
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
