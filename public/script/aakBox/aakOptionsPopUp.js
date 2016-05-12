   
 $(function(){
		
		$('#AKK_OPTIONS_POPUP_ID').on('click', function() {
			//alert("dfdfdfdf");
			generateAakOptionsInboxPop();
		}); 
	});
 
	 $('#AAK_FILTER').on('click', function() {
			  $('#AAK_OPTIONS_FILTER_MENU').toggle();
		}); 
	 
	 $('#AAK_FOLDER').on('click', function() {
		  $('#AAK_OPTIONS_FOLDER_MENU').toggle();
	}); 
	 
	$('#AAK_EXPIRED').on('click', function() {
		  $('#AAK_OPTIONS_EXIT_MENU').toggle();
	}); 
	 
	   
 function generateAakOptionsInboxPop() {
	 	$('#AAK_OPTIONS_POPUP_WRAPPER').toggle();
    
		var $aakOptionsPopUp = $('#AAK_OPTIONS_POPUP_MENU_WRAPPER_ID');      
	  
		$aakOptionsPopUp.css('bottom', FOOTER_BAR_HEIGHT);  
		 
		$aakOptionsPopUp.css('height', .7 * CENTER_REGION_HEIGHT);      //BUG HERE 70% 0F..
		
		
		
		//$aakOptionsPopUp.height(CENTER_REGION_HEIGHT);
		
		console.log("Full Screen == " + SCREEN_HEIGHT_GLOBAL);
		console.log("Center == " + CENTER_REGION_HEIGHT);
		console.log("Top Menu == " + TOP_MENU_BAR_HEIGHT );
		console.log("Footer == " + FOOTER_BAR_HEIGHT);
		
		
		
		
		hideAllPopUpMenus($aakOptionsPopUp);
		 		 
 }
 
  

		 
