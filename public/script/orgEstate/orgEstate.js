$(function(){
	
	
	var centerScreenHeight  = getCenterScreenLayoutHeight();
	var topMenuBarHeight = getTopMenuBarHeight();
	
	$('#ORG-ESTATE-BANNER').height(.30*centerScreenHeight);
	$('#profileDescription').css('margin-top', getTopMenuBarHeight());
	
	$('.ORG_ESTATE_MENU_ITEM').on('click', displayOrgEstateMstrMenu);
	
	
	//TOGGLE menu DISPLAY
	$('#ORG_EST_MSTR_FILTER').on('click', function() {
		  $('#ORG_EST_MSTR_MENU_FILTER_MENU').toggle();
	}); 

	$('#ORG_EST_MSTR_FOLDER').on('click', function() {
		  $('#ORG_EST_MSTR_MENU_FOLDER_MENU').toggle();
	}); 

	$('#ORG_EST_MSTR_EXPIRED').on('click', function() {
		  $('#ORG_EST_MSTR_MENU_EXIT_MENU').toggle();
	}); 
	
	function displayOrgEstateMstrMenu(){
		var orgEstMstrMenuSingleTon = $('#ORG_EST_MSTR_MENU_SINGLETON');
		orgEstMstrMenuSingleTon.toggle();
		
		var menuHeight = getCenterScreenLayoutHeight() -  ( $('#ORG-ESTATE-BANNER').height() + $('#ORG_ESTATE_MENU').height()+4) ;
		orgEstMstrMenuSingleTon.css('height',menuHeight);
		
	}
});