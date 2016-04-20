var popUpMenuJson = [
          {
        	  "key":"key1", "icon":"iconLink", "label":"Skills","action":"someUrl", "callback":""
          }, 
          {
        	  "key":"key2", "icon":"iconLink", "label":"Education","action":"someUrl", "callback":""
          },
          {
        	  "key":"key3", "icon":"iconLink", "label":"Experience", "action":"someUrl", "callback":""
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
		
		
		function displayPopUpMenu(event){
			iconClicked = event.target;
			 
			//var dAtX = event.source.x;
			//var dAtY = event.source.x;
			
			var dAtX = event.clientX;
			var dAtY = event.clientY;
			//alert("x==" + dAtX + "   Y == "+ dAtY);
						
			//Clear and recreate the popup menu
			$('.popUpMenu #POPUP_MENU_CONTAINER_ID').empty();
			//$('.popUpMenu').css('display','none'); 
			
			popUpMenuJson.forEach(function(element){	 	 		
				
			$('.popUpMenu #POPUP_MENU_CONTAINER_ID').append('<div class="popUpMenuItems">'+element.label + '<div>');
						  
			}); 
			
			//get position right for popup
			 
			var rightSpaceWidth = $(document).width() - dAtX;
			
			$('.popUpMenu').css('display','block');   
						
			//logic for x positioning
			if(rightSpaceWidth > $('.popUpMenu').width()){  
				$('.popUpMenu').css('left', dAtX);
			}
			else{
				$('.popUpMenu').css('right', rightSpaceWidth);
			}
			
			//logic for y positioning
			 var yPosition = $(window).height() - dAtY;  
			 
			 if(yPosition >= $('.popUpMenu').height()){
					$('.popUpMenu').css('top', dAtY);
			 }
			 else{
				 $('.popUpMenu').css('bottom', yPosition);
			 }
	
			 
		}
		
	

		var modal12335 = document.getElementById('POPUP_MENU_WRAPPER_ID');
		 window.onclick = function(event) {  
	
			 console.log("TARGET === " + $.contains(modal12335, event.target));
			
			    if (!((event.target == modal12335) || ( $.contains(modal12335, event.target)) || (event.target == iconClicked))) {      
			    	modal12335.style.display = "none";
			    }
			    
			}


