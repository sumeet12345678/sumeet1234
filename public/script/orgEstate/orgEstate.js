$(function(){
	
	
	var centerScreenHeight  = getCenterScreenLayoutHeight();
	var topMenuBarHeight = getTopMenuBarHeight();
	
	$('#ORG-ESTATE-BANNER').height(.45*centerScreenHeight);
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
	
	//var SCREEN_WIDTH = screen.width;
	
	//$('#ORG-ESTATE_SEARCH_BOX').css('left', ((SCREEN_WIDTH - SCREEN_WIDTH * .30) - 300)/2);
	$('#ORG-ESTATE_SEARCH_BOX').css('left', "50%");
	$('#ORG-ESTATE_SEARCH_BOX').css('left', "-=150");
	
	$('#ORG_ESTATE_SLIDING_MENU_ICON').on('click', function(){
		//alert('dfdfdfdfdfdf');
		//$('#ORG_ESTATE_SLIDING_MENU_BAR').toggle();  
		var element = document.getElementById('ORG_ESTATE_SLIDING_MENU_BAR'); 
		//alert("dfdfd == " + element.style.display=="inline-block");	
		if(element.style.display == "none"){
			element.style.display = "inline-block";
		}
		else {
			element.style.display = none;
		}
		
	});
	
	function displayOrgEstateMstrMenu(){
		var orgEstMstrMenuSingleTon = $('#ORG_EST_MSTR_MENU_SINGLETON');
		orgEstMstrMenuSingleTon.toggle();
		
		var menuHeight = getCenterScreenLayoutHeight() -  ( $('#ORG-ESTATE-BANNER').height() + $('#ORG_ESTATE_MENU').height()+4) ;
		orgEstMstrMenuSingleTon.css('height',menuHeight);
		
	}
});