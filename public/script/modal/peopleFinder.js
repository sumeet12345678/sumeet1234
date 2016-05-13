/* var PEOPLE_FINDER_OPTIONS_ARRAY = [{"title": "Education, School, Institute etc.",
									 "id": "PEOPLE_FINDER_EDUCATION"
								   },
								   {"title": "Occupational, Professional ",
										 "id": "PEOPLE_FINDER_EDUCATION"
								   },
								   {"title": "Community, Ethnicity, Spiritual, Faith etc.",
										 "id": "PEOPLE_FINDER_COMMUNITY"
								   },
								   {"title": "Life Style, Interests, Activities",
											 "id": "PEOPLE_FINDER_LIFESTYLE"
								   },
								   {"title": "Health, Physical attributes " ,
										 "id": "PEOPLE_FINDER_HEALTH"
								   },
								   {"title": "Social, Family",
											 "id": "PEOPLE_FINDER_SOCIAL"
								   }
								  ];

*/
var peopleFinderOptionsId = ['PEOPLE_FINDER_EDUCATION','PEOPLE_FINDER_OCCUPATION','PEOPLE_FINDER_COMMUNITY',
                             'PEOPLE_FINDER_LIFESTYLE','PEOPLE_FINDER_HEALTH','PEOPLE_FINDER_SOCIAL', 'PEOPLE_FINDER_OUTLOOK', 'PEOPLE_FINDER_FINANCE', 'PEOPLE_FINDER_CAUSES'                                            
                            ];

var peopleFinderOptionsIcon = ['<img style="" width="28" height="28" src="/media/images/icons/school-white.png"/>&nbsp;&nbsp;','<img style="" width="28" height="28" src="/media/images/icons/resume-circle-white.png"/>&nbsp;&nbsp;','<img style="" width="28" height="28" src="/media/images/icons/community-group-white.png"/>&nbsp;&nbsp;',
                             '<img style="" width="28" height="28" src="/media/images/icons/interests-white.png"/>&nbsp;&nbsp;','<img style="" width="28" height="28" src="/media/images/icons/wellness-white.png"/>&nbsp;&nbsp;','<img style="" width="28" height="28" src="/media/images/icons/relationships_white.png"/>&nbsp;&nbsp;', '<img style="" width="28" height="28" src="/media/images/icons/thumbs-up-white.png"/>&nbsp;&nbsp;', '<img style="" width="28" height="28" src="/media/images/icons/banknotes-white.png"/>&nbsp;&nbsp;', '<img style="" width="28" height="28" src="/media/images/icons/bulb-enlightenment-white.png"/>&nbsp;&nbsp;'                                            
                            ];

var peopleFinderOptionsTitle = ["Education, School, Institute",
                                "Professional, Occupational",
                                "Community, Ethnicity, Faith",
                                "Activities, Interests",
                                "Physique, Appearance, Health,  ",
                                "Family, Lifestyle, Social ",
                                "Personality, Outlook",
                                "Financial",
                                'Projects, Initiatives, Causes'
                                ];  

var peopleFinderOptionsDeleted = []; //contains the index of deleted(removed from DOM) item from peopleFinderOptionsId array(peopleFinderOptionsId array will still contain the element

var $peopleFinderContentDiv = $('#PEOPLE_FINDER_CONTENT');

$(function() {
	
	populatePeopleFinderOptions();
	/*Populate people finder options*/
		
	var peopleFinderIcon =  $('#PEOPLE_FINDER_ICON');  
	var peopleFinder =  $('#PEOPLE_FINDER'); 	 //popUp	PEOPLE_FINDER_MIN_ICON
	var peopleFinderMinIcon=  $('#PEOPLE_FINDER_MIN_ICON');
	var peopleFinderOptionsCloseBtn = $('.peopleFinderOptionsCloseBtn');
	
	
	//peopleFinderSearchButton.css('bottom',FOOTER_BAR_HEIGHT );
	
	/* ON CLICK OF PEOPLE FINDER ICON */
	peopleFinderIcon.on('click', findPeople);
		
	/* ON CLICK OF PEOPLE FINDER MIN ICON */
	peopleFinderMinIcon.on('click', function() {
		peopleFinder.toggle(); //remove duplicacy    
	});
	
	/* ON CLICK OF PEOPLE FINDER OPTION'S CLOSE(X) ICON */
	peopleFinderOptionsCloseBtn. on('click', function() {
		closeOptions($(this));
	});
	
	/* ON CLICK OF ADD OPTIONS ICON */
	$('#PEOPLE_FINDER_ADD').on('click', function() {
		
		var indexToDisplay = peopleFinderOptionsDeleted.pop();
		
		if(indexToDisplay != undefined) {
			$('#' + peopleFinderOptionsId[indexToDisplay]).show();
		}
		
	});
	
	function findPeople() {  
		 peopleFinder.toggle();
		//alert("peopleFinder")  
	}	
	
	function closeOptions(closeBtn){
		/* When close btn is closed, hide the parent div option and delete the contents from array. */
		var parentId = closeBtn.parent().attr('id');  
		var indexDeleted = peopleFinderOptionsId.indexOf(parentId);
		peopleFinderOptionsDeleted.push(indexDeleted);

		//closeBtn.parent().remove();
		closeBtn.parent().hide();
	}
	
});

function populatePeopleFinderOptions(peopFinderOptionsArray) {
	
	
	peopleFinderOptionsId.forEach( function(item, index) {    
		var outerDiv = $('<div></div>');
		var el = $('<div id='+ item + ' class= "toggle-bar-menu">'+ peopleFinderOptionsIcon[index] +
				  peopleFinderOptionsTitle[index] + '<div style = "display: inline-block; width: 50px; height: 100%;" class="peopleFinderOptionsCloseBtn"><img  style="float: right; margin-top: 5px;" width="15" height="15" src="/media/images/icons/x-mark-white.png"/></div></div>'); 
		outerDiv.append(el);
		$peopleFinderContentDiv.append(outerDiv);
	
	});
	
	
	$peopleFinderContentDiv.append('<div id= PEOPLE_FINDER_ADD  style= "float: right; margin-top: 3px;">' +
							'<img style="margin-left: 10px;"  width="30" height="30" src="/media/images/icons/add-black.png" /></div>');
	
	
	
}


$('#FIND_PEOPLE_BUTTON').on('click', function() {  
	$('#PEOPLE_NOTIFICATION').css('display', 'none');
	$('#FIND_PEOPLE').css('display', 'block');
	$('#PEOPLE_FIND_SUBMIT').css('display', 'inline-block');
	$('#FIND_PEOPLE_REFRESH_ICON').css('display', 'inline-block');
	//$('#FIND_PEOPLE_BUTTON').text('Find');
	 
	
	$(this).css('display', 'none');
});


$('#STATS_FROM_PEOPLE').on('click', function() {
	 
	$('#PEOPLE_NOTIFICATION').css('display', 'block');
	$('#FIND_PEOPLE').css('display', 'none');
	//('#FIND_PEOPLE_BUTTON').text('Find People');
	 
	$('#FIND_PEOPLE_BUTTON').css('display', 'inline-block');
	$('#PEOPLE_FIND_SUBMIT').css('display', 'none');
	$('#FIND_PEOPLE_REFRESH_ICON').css('display', 'none');
	
});



/*
$('#FIND_PEOPLE_BUTTON').on('click', function() {
	$('#PEOPLE_NOTIFICATION').css('display', 'none');
	$('#FIND_PEOPLE').css('display', 'block');
	$('#FIND_PEOPLE_BUTTON').text('Find');
	$('#FIND_PEOPLE_BUTTON').css('background-color', '#91B535');
});


$('#STATS_FROM_PEOPLE').on('click', function() {
	$('#PEOPLE_NOTIFICATION').css('display', 'block');
	$('#FIND_PEOPLE').css('display', 'none');
	$('#FIND_PEOPLE_BUTTON').text('Find People');
	$('#FIND_PEOPLE_BUTTON').css('background-color', '#91B535');
});
*/
$('.toggle-bar-menu'). on('click', function() { 
	$(this).siblings().toggle();
});






