var express = require('express')
var router = express.Router()

//var lawyerData = require("../public/data/profileData/lawyerProfileJsonData.json");

//GET home.ejs

/* router.get('/', function(req, res) {
	  res.render('home');
});

*/

router.get('/', function(req, res, next) {
	  res.render('landing.ejs');	    
	}); 

router.get('/peopleApp', function(req, res, next) {
	  res.render('people/peopleHome.ejs');	    
	});

router.get('/peopleFinder', function(req, res, next) {
	  res.render('people/peopleFinder.ejs');	    
	}); 

/* GET people_with_pic.ejs file. */
router.get('/unicomposer/post', function(req, res, next) {
  res.render('unicomposer/ajax/post.ejs');     
});

router.get('/unicomposer/post', function(req, res, next) {
	  res.render('unicomposer/ajax/post.ejs');     
});


/* GET people_with_pic.ejs file. */
router.get('/unicomposer/instantMessage', function(req, res, next) {
  res.render('unicomposer/ajax/instantMessage.ejs');       
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

/* GET people_with_pic.ejs file. */
router.get('/classifieds', function(req, res, next) {
  res.render('classifieds/vehicle/crude/classifieds.ejs');     
});



router.get('/profile/view/mahika', function(req, res, next) {  
	  res.render('profiles/profile.ejs'); 
		//res.render('profile/profile.ejs');
	});

router.get('/profile/view/lawyer', function(req, res, next) {  
	  res.render('profiles/common_with_bg.ejs', {	page: "uniprofile",
		  											profile_context: "uniprofile_lawyer"
		  											//lawyerData123 : lawyerData
		  										}
	  ); 
		//res.render('profile/profile.ejs');
	});




router.get('/profile/view/professional', function(req, res, next) {    
	  res.render('profiles/common_with_bg.ejs', { page: "uniprofile", profile_context: "uniprofile_professional"});	    
	}); 

router.get('/profile/view/socialfun', function(req, res, next) {    
	  res.render('profiles/uni_profile_social_fun.ejs', { page: "uniprofile", profile_context: "uniprofile_social_fun"});	    
	}); 





router.get('/profile/view/model', function(req, res, next) {      
	  res.render('profiles/common_with_bg.ejs', { page: "uniprofile", profile_context: "uniprofile_model"});	    
	}); 

router.get('/profile/view/abhijeet', function(req, res, next) {      
	  res.render('profiles/common_with_bg.ejs', { page: "uniprofile", profile_context: "uniprofile_abhijeet"});	    
	}); 


router.get('/profile/view/uniprofile_bg_img', function(req, res, next) {      
	  res.render('profiles/common_bg_img.ejs', { page: "uniprofile", profile_context: "uniprofile_bg_img"});	    
	}); 

 

  router.get('/people/search/result', function(req, res, next) {
	  res.render('profiles/common.ejs', { page: "peopleSearchResult"});	    
	});    
  

/*router.get('/', function(req, res, next) {
	  res.render('profiles/common.ejs', { page: "peopleSearchResult"});	    
	});  
*/

router.get('/aakBox', function(req, res, next) {
	  var categoryId = req.param('categoryId');
	  res.render('profiles/common.ejs', { page: "aakBox",  aakBoxCategory : categoryId});	    
	}); 
 
/* router.get('/aakBox', function(req, res, next) {
	  var categoryId = req.param('categoryId');
	     // console.log("Category from req ===  " + categoryId);
	  res.render('aakBox/aakBox.ejs', { aakBoxCategory : categoryId });  
	  
	}); */

router.get('/estate', function(req, res, next) {
	  var categoryId = req.param('categoryId');
	  res.render('orgEstate/orgEstate.ejs');
	  
	}); 

router.get('/view-aak', function(req, res, next) {
	  res.render('viewAak/viewAak.ejs');	    
	});  

router.get('/experience', function(req, res, next) {
	 var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('experience.ejs', {profileId: 'deb'});	    
	}); 

 
router.get('/reviews', function(req, res, next) {
	// var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('profiles/profileAspects/reviews.ejs');	    
	}); 

router.get('/skills', function(req, res, next) {
	// var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('profiles/profileAspects/skills.ejs');	    
	}); 

router.get('/education', function(req, res, next) {
	// var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('profiles/profileAspects/education.ejs');	    
	}); 

router.get('/likes', function(req, res, next) {
	// var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('profiles/profileAspects/likes.ejs');	    
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


/*
router.get('/experience', function(req, res, next) {
	 var profileId = "deb";//req.param('profileId');
	//  console.log("PRFILE IDDD  ===     " + profileId);
	  res.render('experience.ejs', {profileId: 'deb'});	    
	}); 

 */

//router.get('/people/search/result', function(req, res, next) {
	//  res.render('profiles/peopleSearchResults.ejs');	    
	// });  


/*
router.get('/profile/view/mahika/experience', function(req, res, next) {
	  res.render('profiles/summary/experience_mihika.ejs'); 
	});
*/



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

/* GET people_with_pic.ejs file. */
router.get('/uniprofile', function(req, res, next) {
  res.render('profiles/common.ejs', {user:"John Smith"});   
});


//Trial below
router.get('/trial', function(req, res, next) {
	  res.render('profiles/trial.ejs');
	});



module.exports = router   