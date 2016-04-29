   
 $(function(){
		
		$('#AKK_OPTIONS_POPUP_ID').on('click', function() {
			//alert("dfdfdfdf");
			generateAakOptionsInboxPop();
		}); 
	});

  		
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
	

		 
