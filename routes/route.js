var express = require('express')
var router = express.Router()

//var lawyerData = require("../public/data/profileData/lawyerProfileJsonData.json");

//GET home.ejs

 
  router.get('/', function(req, res, next) {
	  res.render('profiles/common.ejs', { page: "peopleSearchResult"});	    
	});

   router.get('/people/search/result', function(req, res, next) {
		  res.render('profiles/common.ejs', { page: "peopleSearchResult"});	    
		});


router.get('/peopleApp', function(req, res, next) {
	  res.render('people/peopleHome.ejs');	    
	});

router.get('/peopleFinder', function(req, res, next) {
	  res.render('people/peopleFinder.ejs');  	     
	}); 

 
 


 

  
/* GET people_with_pic.ejs file. */
router.get('/teamsHome', function(req, res, next) {
  res.render('teams/teamsHome.ejs');     
});

/* GET people_with_pic.ejs file. */
router.get('/careerHome', function(req, res, next) {
  res.render('career/careerHome.ejs');     
});

router.get('/career_opportunities', function(req, res, next) {
	  res.render('work_opportunities/opportunities.ejs');     
	});

router.get('/career_preferences', function(req, res, next) { 
	  res.render('work_opportunities/preferences.ejs');     
	});
 
 

     
  

/* 
 * CONTAXGONOMY  
 * 
 * */
router.get('/contagxonomy', function(req, res, next) {
	// var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('profiles/contaxonomy.ejs');	    
	}); 

  
router.get('/contaxonomyGroups', function(req, res, next) {
	// var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('profiles/contaxonomyData/groups.ejs');	    
	}); 

router.get('/teams', function(req, res, next) {
	// var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('teams/teams.ejs'); 
	}); 
 

//router.get('/people/search/result', function(req, res, next) {
	//  res.render('profiles/peopleSearchResults.ejs');	    
	// });  

 

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

 


 /*
  * People Search Criteria Ends  
  */	



 
 
var profileJsonData = [{
	"profile_header" : [  { "pic" : "/media/images/profile_images/Mihika_JustDial.jpg",	                        
	                        "pic-size" : "passport", //s, passport or Visa size
	                        "profile_pic_position" : "right" ,		//left, center or right
	                        "background-color" : "#333",
	                        
	    					},
	    					
	    					{
	    						"quote" : [{"text" : "Worrying is misuse of imagination...",
	    						            "text-box-type" : "rectangular"  //square or rectangle 
	    						             
	    								 }]
	    					}
                       ],
    
    "profile_title" : "Software Developer.... :) ",
    
    "profile_summary" : "SummarySummary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary" ,
    
    "profile_sections" : [{
 	   	
 	   
    					}]
}];



module.exports = router   
