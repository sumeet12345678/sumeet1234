var aakInboxPopUpJson = [ 
		
		{
			"title" : "Deals, Promotions",
			"subCategory": [
			              {
			            	"id" : "grocery", 
			            	"title" : "Grocery",			            	
			            	"callback" : "function1"
			            				              
			              },
			              {		"id" : "electronics",
			            	    "title" : "Electronics",				            	
				            	"callback" : "function1"
				            				              
				              },
				           {		
				            	    "id" : "travel_leisure",
				            	    "title" : "Travel, Leisure",					            	
					            	"callback" : "function1"
					            				              
					              }
			     
			              ]
		},
		
		
		{
			"title" : "Reminders",
			"subCategory": [
				              { "id" : "bill_payments",
				            	"title" : "Bill Payments",				            	
				            	"callback" : "function1"
				            				              
				              },
				              {     "id" : "appointments",
				            	    "title" : "Appointments",					            	
					            	"callback" : "function1"
					            				              
					              }
			     
			              ]
		},
		
		{
			"title" : "Alert, Notifications",
			"subCategory": [
			              { "id" : "banking",
			            	"title" : "Banking",  			            	
			            	"callback" : "function2"
			            				              
			              }
			     
			              ] 
		}
		
		
];





 $(function(){
		
		$('#AAK_INBOX_POPUP_ID').on('click', function() {
			//Clear and recreate the popup menu
			var aakPopUpMenuContainer = $('.aakInboxPopUp #AAK_POPUP_MENU_CONTAINER_ID');
			aakPopUpMenuContainer.empty();        
			//$('.aakInboxPopUp').css('display','none');  
			
 	
			aakInboxPopUpJson.forEach(function(element) {	 	 		  
//				var el = $('<div class="aakInboxPopUpItems">'+element.label + '<div>');  
//				el.on('click', closeDialog); 
//				$('.aakInboxPopUp #POPUP_MENU_CONTAINER_ID').append(el);      
			 
				var category = element;  
				var subCategory = category.subCategory;   
				   
				//alert(element.title);
				
				var categoryDiv = $('<div class="categoryTitle">'+ category.title +'</div>');
				//alert("Category div== :" + categoryDiv);
				
				//console.log("Value == " + element.title);
			  
				subCategory.forEach(function(subElement) {  	
				    					
				   var subCategoryDiv = $('<a href="/aakBox?categoryId=' + subElement.id + '"><div class="subCategoryTitle">'+ subElement.title +'</div></a>'); 
				   //subCategoryDiv.on('click', );
				   categoryDiv.append(subCategoryDiv);
				   
				   console.log("Sub category title == " + subElement.title);      
				});
			
				aakPopUpMenuContainer.append(categoryDiv);  
			    
 					  
			});   
		
			//aakPopUpMenuContainer.append('<p>fdfdfdfdf</p>')
			
			var $aakInboxPopUp = $('.aakInboxPopUp');      
			//var $topMenubarHeight = $('.top-menubar').height();  
			var $footerBarHeight = $('#footerBarId').height();    
			//var $viewPortHeight = $(window).height(); // height of browser viewport   
			//alert($viewPortHeight - ($topMenubarHeight + $footerBarHeight));
			//alert("window height == " + $viewPortHeight);
			 
			$aakInboxPopUp.css('bottom', $footerBarHeight);  
			//$composerWrapper.css('top', $footerBarHeight);   
			 $aakInboxPopUp.toggleClass('visible');  
			 
			//$composerWrapper.css('height', $viewPortHeight - ($topMenubarHeight+$footerBarHeight) - 309);  
			
			//Get height for the viewport and substract header and footer height to get the required height for mobile devices
			 globalSunModalContext = "aakBox";
			 alert(globalSunModalContext);
		}); 
	});

  		
		//close the Dialog box  
//		function closeDialog()  {
//			$('.inboxPopUp').css('display','none');        
//		}
	

		 
