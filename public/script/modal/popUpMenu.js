var popUpMenuJson = [
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
			
			
			
			
			
			
			popUpMenuJson.forEach(function(element) {	 	 		
				var el = $('<div class="popUpMenuItems">'+element.label + '<div>');
				el.on('click', closeDialog); 
				$('.popUpMenu #POPUP_MENU_CONTAINER_ID').append(el);  
						  
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
			 
			 if(yPosition >= $('.popUpMenu').height()) {  
					$('.popUpMenu').css('top', dAtY);
			 }
			 else{  
				 $('.popUpMenu').css('bottom', yPosition);      
			 }
	
			 
		}
  		
		//close the Dialog box  
		function closeDialog()  {
			$('.popUpMenu').css('display','none');        
		}
	

		var modal12335 = document.getElementById('POPUP_MENU_WRAPPER_ID');       
		window.onclick = function(event) {  
			 	
			 //alert("hello");
			 console.log("Id === "  + event.target.id);
			 var mPopUp = document.getElementById('M_POPUP_WRAPPER_ID'); 
			 console.log("modal123 TARGET === " + $.contains(modal12335, event.target));   
			 console.log("mPopUp TARGET === " +  $.contains(mPopUp, event.target)); 
			// alert("Contains === " +  $.contains(mPopUp, event.target));
			//alert("Event.target === " +  (event.target == mPopUp));
			
			    if (!((event.target == modal12335) || ( $.contains(modal12335, event.target)) || (event.target.id == 'imgProfileEdit'))) {          
			    	modal12335.style.display = "none";
			    }
			    
//			    if (!((event.target == mPopUp) || ( $.contains(mPopUp, event.target)) || (event.target.id == 'sunIcon'))) {  
////			    	//alert("Inside...")  
////			    	//closeMpopUp();      
//			    	//mPopUp.style.display = "none";
//			    	$('.mPopUpWrapper').removeClass('visible'); 
// 			    }  
			    
			}


