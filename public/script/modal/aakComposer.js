

$(function(){
	
	var composerCurrentSize = "MINIMIZED";    
	
	var $composerWrapper = $('.composerWrapper');
	var $ccTextArea = $('#MSG_COMPOSER_CC_TEXTAREA');
	var $chatTextArea = $('#MSG_COMPOSER_CHAT_TEXTAREA');
	var $composerBottomBar = $('#MSG_COMPOSER_BOTTOM_BAR');  
	
	//Melbin's Code
	var $smileyemotions = $('#SMILEY_EMOTIONS');
	var $attachoption = $('#ATTACH_OPTIONS');
	
//	$composerBottomBar.css('width', '-=80');  //Intial width during loading
	
	$('#plus').on('click', function() {
		 
		var $composerWrapper = $('.composerWrapper');     
		 
		$composerWrapper.css('bottom', getFooterBarHeight()); 
		//$composerWrapper.css('top', $footerBarHeight); 
		//$composerWrapper.toggleClass('visible');
		hideAllPopUpMenus($composerWrapper);
		
		/* For Desktop Esc Key functionality */
		$('.composerWrapper').focus(); 
	}); 
	 
	/* EXPAND AAK COMPOSER */
	 
	$('#MSG_COMPOSER_MAX_MIN').on('click', function() {
		
		if(composerCurrentSize == "MINIMIZED"){
			 
			maximizeComposer();
		}	
		else if(composerCurrentSize == "MAXIMIZED"){
			 
			minimizeComposer();  
		}		 
	 
	}); 
	
	$('#MSG_COMPOSER_ADD_STUFF').on('click', function() {
		$('#ATTACH_OPTIONS').toggle();
	});
	
	
    $('#MSG_COMPOSER_MESSAGE_TEXTAREA').on('focus', function() {
    	//alert("Total Screen =  " + screen.height);
    });
	
    $($chatTextArea).on('keypress', function() {
    	//alert("Total Screen =  " + screen.height);
    });  
    
	function maximizeComposer(){
		
		$composerWrapper.css('height', '100%');  
		$composerWrapper.css('bottom','0');  
		$ccTextArea.css('display', 'block');///////
		$chatTextArea.css('display', 'block');///////
		$composerBottomBar.css('display', 'block');
		

		//Melbin's Code
		$smileyemotions.css('top', '0px');
		$smileyemotions.css('height', '20%');
		$smileyemotions.css('right', '40px');
		$attachoption.css('height', '25%');

		if (screen.width <= 767) {
			$smileyemotions.css('width', 'calc(100% - 80px)');
			$attachoption.css('height', '15%');
		}	
		 
		
		composerCurrentSize = "MAXIMIZED";    

	}
	
	function minimizeComposer() {
		
		$composerWrapper.css('height', '157px');  
		$composerWrapper.css('bottom', getFooterBarHeight());  
		$ccTextArea.css('display', 'none');///////
		$chatTextArea.css('display', 'none');///////
		$composerBottomBar.css('display', 'none');
		
		//Melbin's Code
		$smileyemotions.css('top', '-151px');
		$smileyemotions.css('height', '70%');
		$smileyemotions.css('right', '0px');
		$attachoption.css('height', '70%');

		if (screen.width <= 767) {
			$smileyemotions.css('width', '100%');
			
		} 					

		
		     
		composerCurrentSize = "MINIMIZED";  
		
	}
	
	
	function changeChatTextArea() {
		
	}
	
	function maximizeComposerWrapper() {
		
	}
	
	$('#MSG_COMPOSER_TO').on('click', function() {
		//alert( $('#MSG_CATEGORY option:selected').text() );  
		
		//$('#CONTAXONOMY_MODAL').show();
		showContaxonomyModal('AK_COMPOSER', $('#MSG_TYPE_OPTION_SELECT option:selected').text());
		$('#CONTAXONOMY_MODAL').focus();
		
	});
	
	
	$('.composerWrapper').focus();
	
	
	
	
	
	
	
	
	
	
	/*
	 *  SALVIN'S CODE
	 * */
	// Toggle function 


	 




//  Emotion Buttons


$('#EMOTIONS').on('click', function(){
	$('#SMILEY_EMOTIONS').toggle();
});


$('#EMOTION1').on('click', function() {
	$('.emotion-div-class').hide();
	$('#EMOTION_1').show();
	

});

$('#EMOTION2').on('click', function(){
	$('.emotion-div-class').hide();
	$('#EMOTION_2').show();
	
});

$('#EMOTION3').on('click', function(){
	$('.emotion-div-class').hide();
	$('#EMOTION_3').show();
});

$('#EMOTION4').on('click', function(){
	$('.emotion-div-class').hide();
	$('#EMOTION_4').show();
});


$('#CLOSE').on('click', function(){
	$('#SMILEY_EMOTIONS').hide();
});



//Smileys to the text area




// document.querySelector('.imo_icon_img').addEventListener('click', function(e) {
//   if (e.target.tagName.toLowerCase() === 'img') {
//     document.querySelector('[contenteditable]').appendChild(e.target.cloneNode(true));
//   }
// });


$('.imo_icon_img').on('click', function(e){
	
	$('#MSG_COMPOSER_MESSAGE_TEXTAREA').append($(this).clone());
   // document.querySelector('[contenteditable]').appendChild(e.target.cloneNode(true));
 
  });

	


//msgCats();
	$('#MSG_TYPE_OPTION_SELECT').on('change', function(e) {
		 //alert( this.value );
		if(this.value == "IM") {
			$('#MSG_CATS_OPTIONS_SELECT').css('display', 'none');
		}
		
		else {
			$('#MSG_CATS_OPTIONS_SELECT').css('display', 'inline-block');
			msgCats(this.value);
		}
		 
	});

 function msgCats(msgType) {	
	var msgCatsOptions = [];
  
  if(msgType == "SM") {
	 msgCatsOptions = [  
	                               {
	                            	   'id' : 'INDIA',
	                            	   'name' : "Kerala"
	                            	 
	                            	   
	                               },	                               
	                               {
	                            	   'id' : 'FRIENDS',
	                            	   'name' : "Karnataka"
	                               },
	                               
	                               {
	                            	   'id' : 'COWORKERS',
	                            	   'name' : "Tamilnadu"
		                           },
		                           
		                           {
		                        	   'id' : 'ACQUINTANCES',
		                        	   'name' : "Goa",
			                           'childs' : [
			                                {
			                            	 'id' : 'ACQUINTANCES_INTERESTS',
			                            	 'name' : 'Maharashtra',
			                            	 'childs' : [{
				                            	 'id' : 'ACQUINTANCES_INTERESTS_SWIMMING',
				                            	 'name' : 'Hariyana'
					                            },
					                            {
					                                'id' : 'ACQUINTANCES_INTERESTS_TREKKING',
					                            	'name' : 'Kerala'
					                            }]
				                            },
				                            {
				                                'id' : 'ACQUINTANCES_CAUSES',
				                            	'name' : 'Karnataka'
				                            }
			                           ]
			                       },
			                       
			                       {
			                    	   'name' : "Business"
				                   },
				                   
				                   {
				                	   'name' : "Service"
				                   },
	                             
	                             
	                             ];
	 }

	 if(msgType == "MM") { 
	 		msgCatsOptions = [  
	                               {
	                            	   'id' : 'INDIA',
	                            	   'name' : "Washington"
	                            	 
	                            	   
	                               },	                               
	                               
	                               {
	                            	   'id' : 'FRIENDS',
	                            	   'name' : "California"

	                             	  

	                             	},
    
	                               {
	                            	   'id' : 'COWORKERS',
	                            	   'name' : "Florida"
		                           },
		                           
		                           {
		                        	   'id' : 'ACQUINTANCES',
		                        	   'name' : "Missouri",
			                          
			                       },
			                       
			                       
	                             
	                             ];
	 }


	 if(msgType == "LM"){
	 		msgCatsOptions = [  
	                               {
	                            	   'id' : 'INDIA',
	                            	   'name' : "Darlington"
	                            	 
	                            	   
	                               },	                               
	                               
	                               {
	                            	   'id' : 'FRIENDS',
	                            	   'name' : "Hambleton"

	                             	  

	                             	},
    
	                               {
	                            	   'id' : 'COWORKERS',
	                            	   'name' : "Craven"
		                           },
		                           
		                           {
		                        	   'id' : 'ACQUINTANCES',
		                        	   'name' : "Lancaster",
			                          
			                       },
			                       
			                       
	                             
	                             ];
	 }	
	


	 if(msgType == "XLM"){
	 		msgCatsOptions = [  
	                               {
	                            	   'id' : 'INDIA',
	                            	   'name' : "Tasmania"
	                            	 
	                            	   
	                               },	                               
	                               
	                               {
	                            	   'id' : 'FRIENDS',
	                            	   'name' : "Victoria"

	                             	  

	                             	},
    
	                               {
	                            	   'id' : 'COWORKERS',
	                            	   'name' : "Western Austalia"
		                           },
		                           
		                           {
		                        	   'id' : 'ACQUINTANCES',
		                        	   'name' : "Queensland",
			                          
			                       },
			                       
			                       
	                             
	                             ];
	 }	
	

	




	 $('#MSG_CATS_OPTIONS_SELECT').html('');
	// $('#MSG_CATS_OPTIONS_SELECT').append
	msgCatsOptions.forEach(function(element) {
	  
		var elementString = '<option>' + element.name + '</option>';
		$('#MSG_CATS_OPTIONS_SELECT').append($(elementString));
		 
		 
		if(element.childs) {			
			element.childs.forEach(function(level2Element) {
				var elementString = '<option>&nbsp;' + level2Element.name + '</option>';
				$('#MSG_CATS_OPTIONS_SELECT').append($(elementString));
				

				if(level2Element.childs) {			
					level2Element.childs.forEach(function(level3Element) {
						 var elementString = '<option>&nbsp;&nbsp;&nbsp;' + level3Element.name + '</option>';
				         $('#MSG_CATS_OPTIONS_SELECT').append($(elementString));
				        


					});
				} 
			});
		} 
		

	});
	
}


 
 
//Hide When click on the Text Area

	$(document).mouseup(function (e) 
	{
   var SMILEY_EMOTIONS = $("#SMILEY_EMOTIONS");
   if (!$('#SMILEY_EMOTIONS').is(e.target) && !SMILEY_EMOTIONS.is(e.target) && SMILEY_EMOTIONS.has(e.target).length == 0) 
   {
       SMILEY_EMOTIONS.hide();
   }

});



	$(document).mouseup(function (e) 
	{
   var ATTACH_OPTIONS = $("#ATTACH_OPTIONS");
   if (!$('#ATTACH_OPTIONS').is(e.target) && !ATTACH_OPTIONS.is(e.target) && ATTACH_OPTIONS.has(e.target).length == 0) 
   {
       ATTACH_OPTIONS.hide();
   }

	    	 $('#MSG_COMPOSER_ADD_STUFF').on('click', function(){
			$('#ATTACH_OPTIONS').toggle();
			});

});



});



