





 $(function(){
		
		$('#inboxIcon').on('click', function(){
			//Clear and recreate the popup menu
			$('.inboxPopUp #POPUP_MENU_CONTAINER_ID').empty();  
			//$('.inboxPopUp').css('display','none');  
			
			
			
			
			
//			
//			inboxPopUpJson.forEach(function(element) {	 	 		  
//				var el = $('<div class="inboxPopUpItems">'+element.label + '<div>');
//				el.on('click', closeDialog); 
//				$('.inboxPopUp #POPUP_MENU_CONTAINER_ID').append(el);      
//						  
//			});  
		
			
			var $inboxPopUp = $('.inboxPopUp');     
			//var $topMenubarHeight = $('.top-menubar').height();  
			var $footerBarHeight = $('#footerBarId').height();  
			//var $viewPortHeight = $(window).height(); // height of browser viewport 
			//alert($viewPortHeight - ($topMenubarHeight + $footerBarHeight));
			//alert("window height == " + $viewPortHeight);
			 
			$inboxPopUp.css('bottom', $footerBarHeight);
			//$composerWrapper.css('top', $footerBarHeight);   
			$inboxPopUp.toggleClass('visible');
			 
			//$composerWrapper.css('height', $viewPortHeight - ($topMenubarHeight+$footerBarHeight) - 309);  
			
			//Get height for the viewport and substract header and footer height to get the required height for mobile devices
		}); 
	});

  		
		//close the Dialog box  
//		function closeDialog()  {
//			$('.inboxPopUp').css('display','none');        
//		}
	

		 
