var mDialogJson = [
          {
        	  "key":"key1", "icon":"iconLink", "label":"Skills","action":"someUrl", "callback":"showSkillProfile"
          }, 
          {
        	  "key":"key2", "icon":"iconLink", "label":"Education","action":"someUrl", "callback":"showEducationalProfile"
          },
          {
        	  "key":"key3", "icon":"iconLink", "label":"Experience", "action":"someUrl", "callback":"showExperience"
          },
          {
        	  "key":"key4", "icon":"iconLink", "label":"Recommendations", "action":"someUrl", "callback":"showRecommendations"
          }
         /* {
        	  "key":"key5", "icon":"iconLink", "label":"Certificates, Awards, Recognitions", "action": "someUrl", "callback":"showCertAwardRecog"
          }
          {
        	  "key":"key5", "icon":"iconLink", "label":"Research, Papers, Patents, Indigenous Work", "action": "someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Projects", "action": "someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Interests", "action": "someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Causes, Voluntary Work", "action": "someUrl", "callback":""
          } */
]; 

$(function(){
	
	mDialogJson.forEach(function(item) {    
		var el = $('<div>'+ item.label + '<div>');
		el.attr('data-dismiss','modal');  //Create seperate function later for closing modal box by passing modal id
		el.on('click', eval(item.callback));  				
		$('.mPopUpBody').append(el);		 
	}); //Main function ends
	
	  
	$('.mPopUpWrapper').css('bottom', $('#footerBarId').height());
	//$('.modal-dialog').css('max-width', $('#profileDescription').width());
	
	
//Callback functions were implemented here	
	 
	//	
	$('#sunIcon').on('click', function(){
			
			var $mPopUpWrapper = $('.mPopUpWrapper');     
			//var $topMenubarHeight = $('.top-menubar').height();  
			var $footerBarHeight = $('#footerBarId').height();
			//var $viewPortHeight = $(window).height(); // height of browser viewport 
			//alert($viewPortHeight - ($topMenubarHeight + $footerBarHeight));
			//alert("window height == " + $viewPortHeight);
			 
			$mPopUpWrapper.css('bottom', $footerBarHeight);
			//$composerWrapper.css('top', $footerBarHeight); 
			$mPopUpWrapper.toggleClass('visible');
			 
			//$composerWrapper.css('height', $viewPortHeight - ($topMenubarHeight+$footerBarHeight) - 309);  
			
			//Get height for the viewport and substract header and footer height to get the required height for mobile devices
		}); 
	  
});
