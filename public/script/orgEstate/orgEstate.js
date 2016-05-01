$(function(){
	
	
	var centerScreenHeight  = getCenterScreenLayoutHeight();
	var topMenuBarHeight = getTopMenuBarHeight();
	
	$('#ORG-ESTATE-BANNER').height(.30*centerScreenHeight);
	$('#profileDescription').css('margin-top', getTopMenuBarHeight());
	
	$('.ORG_ESTATE_MENU_ITEM').on('click', displayOrgEstateMstrMenu);
	
	
	
	function displayOrgEstateMstrMenu(){
		var orgEstMstrMenuSingleTon = $('#ORG_EST_MSTR_MENU_SINGLETON');
		orgEstMstrMenuSingleTon.toggle();
		
		var height = getCenterScreenLayoutHeight() -  
		
	}
});