   
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
	 AAK_OPTIONS_FOLDER
  		
 function generateAakOptionsInboxPop(){
	//Clear and recreate the popup menu
		var aakOptionsPopUpMenuContainer = $('.aakOptionsPopUp #AAK_OPTIONS_POPUP_MENU_WRAPPER_ID');  
		aakOptionsPopUpMenuContainer.empty();        
		//$('.aakInboxPopUp').css('display','none');  
		

	 
	 
		var $aakOptionsPopUp = $('.aakOptionsPopUp');      
		//var $topMenubarHeight = $('.top-menubar').height();  
		var $footerBarHeight = $('#footerBarId').height();    
	  
		$aakOptionsPopUp.css('bottom', $footerBarHeight);  
		//$composerWrapper.css('top', $footerBarHeight);   
		$aakOptionsPopUp.toggleClass('visible');  
		 		 
 }
 
 
		//close the Dialog box  
//		function closeDialog()  {
//			$('.inboxPopUp').css('display','none');        
//		}
	

		 
