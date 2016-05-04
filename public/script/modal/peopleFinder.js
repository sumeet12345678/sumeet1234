$(function() {
	
	//var peopleFinderSearchButton =  $('#PEOPLE_FINDER_SRCH_BUTTON');
	var peopleFinderIcon =  $('#PEOPLE_FINDER_ICON');
	var peopleFinder =  $('#PEOPLE_FINDER'); 	 //popUp
	
	//peopleFinderSearchButton.css('bottom',FOOTER_BAR_HEIGHT );
	peopleFinderIcon.on('click', findPeople);
	
	
	
	
	
	function findPeople() {  
		 peopleFinder.toggle();
		//alert("peopleFinder")
	}
	
	
});