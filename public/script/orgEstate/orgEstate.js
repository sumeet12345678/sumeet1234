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
	
	$('#ORG_ESTATE_SLIDING_MENU_BAR_CONTAINER').css('bottom', getFooterBarHeight())	;
	
	
	$('#ORG_ESTATE_SLIDING_MENU_ICON').on('click', showHideOrgEstaateSlidingMenu);  
	


	
	
	
	
	function displayOrgEstateMstrMenu() {
		var orgEstMstrMenuSingleTon = $('#ORG_EST_MSTR_MENU_SINGLETON');
		orgEstMstrMenuSingleTon.toggle();
		
		var menuHeight = getCenterScreenLayoutHeight() -  ( $('#ORG-ESTATE-BANNER').height() + $('#ORG_ESTATE_MENU').height()+4) ;
		orgEstMstrMenuSingleTon.css('height',menuHeight);
		
	}
	
	function showHideOrgEstaateSlidingMenu() {
			var element = $('#ORG_ESTATE_SLIDING_MENU_BAR'); 
			element.fadeToggle(500);    
			
			var $sliderIcon = $('#ORG_ESTATE_SLIDING_MENU_ICON');
			
			if($sliderIcon.hasClass('leftArrow')){
				//$sliderIcon.css('background', '#000');
				$sliderIcon.css('background', 'linear-gradient(#696969,#3f3f3f)');
				$sliderIcon.attr('src', "/media/images/icons/arrow-right-xxl.png");
				$sliderIcon.removeClass('leftArrow');
				$sliderIcon.addClass('rightArrow');
			}
			else {
				$sliderIcon.css('background', '');
				
				$sliderIcon.attr('src', "/media/images/icons/arrow-left-xxl.png");
				$sliderIcon.removeClass('rightArrow');
				$sliderIcon.addClass('leftArrow');
			}
	}
});





