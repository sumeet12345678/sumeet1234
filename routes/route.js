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
		//res.render('profile/profile.ejs');
	});

router.get('/profile/view/lawyer', function(req, res, next) {
	  res.render('profiles/common.ejs', {page: "uniprofile", profile_context: "uniprofile_lawyer"}); 
		//res.render('profile/profile.ejs');
	});

router.get('/profile/view/model', function(req, res, next) {      
	  res.render('profiles/common.ejs', {page: "uniprofile", profile_context: "uniprofile_model"});	    
	}); 
 
router.get('/people/search/result', function(req, res, next) {
	  res.render('profiles/common.ejs', {page: "peopleSearchResult"});	    
	});  


router.get('/aakBox', function(req, res, next) {
	  var categoryId = req.param('categoryId');
	     // console.log("Category from req ===  " + categoryId);
	  res.render('aakBox/aakBox.ejs', { aakBoxCategory : categoryId });  
	  
	}); 

router.get('/estate', function(req, res, next) {
	  var categoryId = req.param('categoryId');
	  res.render('orgEstate/orgEstate.ejs');
	  
	}); 

router.get('/view-aak', function(req, res, next) {
	  res.render('viewAak/viewAak.ejs');	    
	});  


//router.get('/people/search/result', function(req, res, next) {
	//  res.render('profiles/peopleSearchResults.ejs');	    
	//});  


/*
router.get('/profile/view/mahika/experience', function(req, res, next) {
	  res.render('profiles/summary/experience_mihika.ejs'); 
	});
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