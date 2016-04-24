var notificationPopUpMenuJson = [
          {
        	  "key":"key1", "icon":"iconLink", "label":"Suggested Videos","action":"someUrl", "callback":"showSkillProfile"
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
		
		
		function displayNotificationPopUpMenu(event){
			 
			iconClicked = event.target;  
			 
			//var dAtX = event.source.x;
			//var dAtY = event.source.x;
			
			var dAtX = event.clientX;
			var dAtY = event.clientY;
			//alert("x==" + dAtX + "   Y == "+ dAtY);
						
			//Clear and recreate the popup menu
			$('.notificationPopUpMenu #NOTIFICATION_POPUP_MENU_CONTAINER_ID').empty();
			//$('.popUpMenu').css('display','none');  
			
			
			
			
			
			
			notificationPopUpMenuJson.forEach(function(element) {	 	 		
				var el = $('<div class="notificationPopUpMenuItems">'+ '<span class="label">' + element.label + '</span>' +  '<span class="number">10</span> </div>');
				el.on('click', closeDialog); 
				$('.notificationPopUpMenu #NOTIFICATION_POPUP_MENU_CONTAINER_ID').append(el);      
						  
			}); 
			
			//get position right for popup
			 
			var rightSpaceWidth = $(document).width() - dAtX;
			
			$('.notificationPopUpMenu').css('display','block');   
						
			//logic for x positioning
			if(rightSpaceWidth > $('.notificationPopUpMenu').width()) {  
				$('.notificationPopUpMenu').css('left', dAtX);  
			}
			else{
				$('.notificationPopUpMenu').css('right', rightSpaceWidth); 
			}
			
			//logic for y positioning
			 var yPosition = $(window).height() - dAtY;    
			 
			 if(yPosition >= $('.notificationPopUpMenu').height()) {  
					$('.notificationPopUpMenu').css('top', dAtY);
			 }
			 else{  
				 $('.notificationPopUpMenu').css('bottom', yPosition);      
			 }
	
			 
		}
  		
		//close the Dialog box  
		function closeDialog()  {
			$('.notificationPopUpMenu').css('display','none');        
		}
	

		
  
