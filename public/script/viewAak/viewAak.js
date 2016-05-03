$(function(){
		$('.commonScreenSetting').css('margin-top', getTopMenuBarHeight());
		
		//$('.aak-view').css('padding-bottom', getFooterBarHeight());
		$('.aak-view').css('height', CENTER_REGION_HEIGHT);
		
		
		//$('#ORG_ESTATE_SLIDING_MENU_BAR_CONTAINER').css('bottom', getFooterBarHeight())	;
		
		
		$('#ORG_ESTATE_SLIDING_MENU_ICON').on('click', showHideOrgEstaateSlidingMenu);
		
		
		
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