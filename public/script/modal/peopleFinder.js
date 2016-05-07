$(function() {
	
	//var peopleFinderSearchButton =  $('#PEOPLE_FINDER_SRCH_BUTTON');
	var peopleFinderIcon =  $('#PEOPLE_FINDER_ICON');
	var peopleFinder =  $('#PEOPLE_FINDER'); 	 //popUp	PEOPLE_FINDER_MIN_ICON
	var peopleFinderMinIcon=  $('#PEOPLE_FINDER_MIN_ICON');
	var peopleFinderOptionsCloseBtn = $('.peopleFinderOptionsCloseBtn');
	
	//peopleFinderSearchButton.css('bottom',FOOTER_BAR_HEIGHT );
	peopleFinderIcon.on('click', findPeople);
	
	
	peopleFinderMinIcon.on('click', function() {
		peopleFinder.toggle(); //remove duplicacy  
	});
	
	peopleFinderOptionsCloseBtn. on('click', function() {
			//$(this).parent().css({"color": "red", "border": "2px solid red"});
			$(this).parent().css('display', 'none');
	});
	
	function findPeople() {  
		 peopleFinder.toggle();
		//alert("peopleFinder")
	}
	
	
});