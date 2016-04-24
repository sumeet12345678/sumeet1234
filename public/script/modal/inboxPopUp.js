 var inboxPopUpJson = [
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
        	  "key":"key4", "icon":"iconLink", "label":"Like", "action":"someUrl", "callback":""
          }, 
          {
        	  "key":"key4", "icon":"iconLink", "label":"Recommendations", "action":"someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Interests", "action": "someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Awards", "action": "someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Recognitions", "action": "someUrl", "callback":""  
          }
          
]; 
   
 
  
		var iconClicked;    
		
		
		function displayinboxPopUp(event){
			iconClicked = event.target;  
			 
			//var dAtX = event.source.x;
			//var dAtY = event.source.x;
			
			var dAtX = event.clientX;
			var dAtY = event.clientY;
			//alert("x==" + dAtX + "   Y == "+ dAtY);
						
			//Clear and recreate the popup menu
			$('.inboxPopUp #POPUP_MENU_CONTAINER_ID').empty();
			//$('.inboxPopUp').css('display','none');  
			
			
			
			
			
			
			inboxPopUpJson.forEach(function(element) {	 	 		
				var el = $('<div class="inboxPopUpItems">'+element.label + '<div>');
				el.on('click', closeDialog); 
				$('.inboxPopUp #POPUP_MENU_CONTAINER_ID').append(el);  
						  
			}); 
			
			//get position right for popup
			 
			var rightSpaceWidth = $(document).width() - dAtX;
			
			$('.inboxPopUp').css('display','block');   
						
			//logic for x positioning
			if(rightSpaceWidth > $('.inboxPopUp').width()){  
				$('.inboxPopUp').css('left', dAtX);
			}
			else{
				$('.inboxPopUp').css('right', rightSpaceWidth); 
			}
			
			//logic for y positioning
			 var yPosition = $(window).height() - dAtY;    
			 
			 if(yPosition >= $('.inboxPopUp').height()) {  
					$('.inboxPopUp').css('top', dAtY);
			 }
			 else{  
				 $('.inboxPopUp').css('bottom', yPosition);      
			 }
	
			 
		}
  		
		//close the Dialog box  
		function closeDialog()  {
			$('.inboxPopUp').css('display','none');        
		}
	

		 
