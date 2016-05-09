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

var peopleFinderOptionsTitle = ["Education, School, Institute etc.",
                                "Occupational, Professional ",
                                "Community, Ethnicity, Spiritual, Faith etc.",
                                "Life Style, Interests, Activities",
                                "Health, Physical attributes ",
                                "Social, Family",
                                "Outlook, Personality Type, World Views",
                                "Financial",
                                'Causes, Charity etc.'
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
		
		
//		var indexToDisplay = peopleFinderOptionsDeleted.pop();
//		
//		if(indexToDisplay != undefined) {
			//var closeBtnSpan = $('<span class="peopleFinderOptionsCloseBtn">X</span>');  
//			closeBtnSpan.on('click', function(){
//				closeOptions($(this));
//			});
//			
//			var el = $('<div id='+ peopleFinderOptionsId[indexToDisplay] + ' class= "toggleBar"><span class="expandIcon">+</span>'+
//					peopleFinderOptionsTitle[indexToDisplay] + '<div>');  
//			el.append(closeBtnSpan);
			
		//	$peopleFinderContentDiv.append(el);
			//el.insertBefore($('#PEOPLE_FINDER_ADD'));
		//}
		
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
	
//	var $peopleFinderContentDiv = $('#PEOPLE_FINDER_CONTENT');
//	
//	peopFinderOptionsArray.forEach( function(item) {
//		var el = $('<div id='+ item.id + ' class= "toggleBar"><span class="expandIcon">+</span>'+
//					item.title + '<span class="peopleFinderOptionsCloseBtn">X</span></div>');  
//		
//		$peopleFinderContentDiv.append(el);
//	
//	});
//	
//	$peopleFinderContentDiv.append('<div id= PEOPLE_FINDER_ADD style= "border-radius: 5px; width: 50px; height: 40px; float: right; margin-top: 8px; background-color: grey;">' +
//							'<img style="margin-left: 10px; margin-top: 5px;"  width="30" height="30" src="/media/images/icons/add.png" /></div>');
//	
	
//	var $peopleFinderContentDiv = $('#PEOPLE_FINDER_CONTENT');
	
	peopleFinderOptionsId.forEach( function(item, index) {    
		var el = $('<div id='+ item + ' class= "toggleBar"><span class="expandIcon">+</span>'+
				peopleFinderOptionsTitle[index] + '<span class="peopleFinderOptionsCloseBtn">X</span></div>');  
		
		$peopleFinderContentDiv.append(el);
	
	});
	
	
	$peopleFinderContentDiv.append('<div id= PEOPLE_FINDER_ADD style= "border-radius: 5px; width: 50px; height: 40px; float: right; margin-top: 8px; background-color: grey;">' +
							'<img style="margin-left: 10px; margin-top: 5px;"  width="30" height="30" src="/media/images/icons/add.png" /></div>');
	
	
	
}

