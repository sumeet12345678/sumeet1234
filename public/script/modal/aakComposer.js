

$(function(){
	
	var composerCurrentSize = "MINIMIZED";    
	
	var $composerWrapper = $('.composerWrapper');
	var $ccTextArea = $('#MSG_COMPOSER_CC_TEXTAREA');
	var $chatTextArea = $('#MSG_COMPOSER_CHAT_TEXTAREA');
	var $composerBottomBar = $('#MSG_COMPOSER_BOTTOM_BAR');  
	
	//Melbin's Code
	var $smileyemotions = $('#SMILEY_EMOTIONS');
	var $attachoption = $('#ATTACH_OPTIONS');
	
	var newBar = $('#headerBarId'); //salvin
	
	var top = 0; //salvin
	
//	$composerBottomBar.css('width', '-=80');  //Intial width during loading
	
	$('#plus').on('click', function() {
		 
		//var $composerWrapper = $('.composerWrapper');     // 
		 
		
		$composerWrapper.toggle(); //salvin
		
		//$composerWrapper.css('bottom', getFooterBarHeight()); 
		$composerWrapper.css('bottom', '40px'); 
		
		/* Savlins*/ 
		 newBar = $('#headerBarId');
		 newBar.show();
		 
//		No help... always returns 'auto' as top :( like jQuery 
//		 var computedStyle = getComputedStyle(document.getElementsByClassName('composerWrapper')[0], null)
//		 
//		     alert(computedStyle.top)
 
		 //newBar.css('top', $composerWrapper.css('top'));
		 //newBar.css('top','-=40'); 
		 
		newBar.css('top', $composerWrapper.position().top);
		newBar.css('top','-=40'); 
		 
		//alert("Wrapper == " + $composerWrapper.position().top);
		// alert("New Bar = " + newBar.css('top'));
		 
		 
		 
		 
		/* Salvin's ends*/
		//$composerWrapper.css('top', $footerBarHeight); 
		//$composerWrapper.toggleClass('visible');
		//hideAllPopUpMenus($composerWrapper); //
		
		/* For Desktop Esc Key functionality */
		$('.composerWrapper').focus(); 
	});   
	 
	
	/*Salvin's start*/
	var bottomVar = 80;
	var leftVar = 20;
	var z_index = 1058;
	
$('#new_plus').on('click', function() {
		
		//var newComposer = $('.composerWrapper').clone(true);
	    var newComposer = $composerWrapper.clone(true);
		newComposer.appendTo('body');
		//alert(newComposer.attr('bottom'));

		newComposer.css('bottom', 30 + bottomVar);
		bottomVar = bottomVar + 80;
		newComposer.css('left', 60 + leftVar);
		leftVar = leftVar + 65;
		newComposer.css('z-index', z_index);
		z_index--;
		newBar.css('top', newComposer.position().top);
		newBar.css('top','-=40');
		newBar.css('left', newComposer.css('left'));

		/*lighter grey background color for new composer popups*/
		newComposer.find('#MSG_COMPOSER_TOP_BAR').css('background-color','#999696'); 
		newComposer.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color','#999696'); 
		newComposer.find('#MSG_COMPOSER_LEFT_BAR').css('background-color','#999696');
		newComposer.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color','#999696');
		
		/* lighter border(same as composerWrapper)*/
		 
		
		newComposer.css('border-top', '2px solid #999696');   
		newComposer.css('border-left', '1px solid #999696');  
		newComposer.css('border-right', '1px solid #999696');  
		newComposer.css('border-bottom', '0px solid #999696');  
		
		//alert("topddd === " + newBar.css('top'));
		
		//bottomVar = bottomVar + 10;
		
		//$composerWrapper1.show();
		//$composerWrapper.css('top', $footerBarHeight); 
		//$composerWrapper.toggleClass('visible');
		//hideAllPopUpMenus($composerWrapper);
		 
	});

//var topWindow = $('.composerWrapper');

var topWindow = $composerWrapper;  
//on click on each composer //	
$('.composerWrapper').on('click',function() {
	 
    console.log('composer.......');
    var bottom =  $(this).css('bottom');
	var z_index = $(this).css('z-index');
	var left = $(this).css('left');
	var top = $(this).position().top;
	
	console.log(bottom + " "+ z_index + "  " +left); 
		
	$(this).css('bottom', topWindow.css('bottom'));
	$(this).css('z-index', topWindow.css('z-index'));
	$(this).css('left', topWindow.css('left'));

	 

	topWindow.css('bottom', bottom);
	topWindow.css('z-index', z_index);
	topWindow.css('left', left);
	
	//EXCHANGE COLORS  
	var topBarBgColor = $(this).find('#MSG_COMPOSER_TOP_BAR').css('background-color');
	var rightBarBgColor = $(this).find('#MSG_COMPOSER_RIGHT_BAR').css('background-color');
	var leftBarBgColor = $(this).find('#MSG_COMPOSER_LEFT_BAR').css('background-color');
	var bottomBarBgColor = $(this).find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color');
	
	$(this).find('#MSG_COMPOSER_TOP_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_TOP_BAR').css('background-color'));
	$(this).find('#MSG_COMPOSER_RIGHT_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color'));
	$(this).find('#MSG_COMPOSER_LEFT_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_LEFT_BAR').css('background-color'));
	$(this).find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color'));
	 
	
	 
	topWindow.find('#MSG_COMPOSER_TOP_BAR').css('background-color', topBarBgColor );
	topWindow.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color', rightBarBgColor );
	topWindow.find('#MSG_COMPOSER_LEFT_BAR').css('background-color', leftBarBgColor );
	topWindow.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color', bottomBarBgColor ); 
	 
	//EXCHANGE BORDERS

	 
	var borderTop = $(this).css('border-top');
	var borderLeft =  $(this).css('border-left');
	var borderRight =  $(this).css('border-right');
	var borderBottom =  $(this).css('border-bottom');
	  
	
	$(this).css('border-top', topWindow.css('border-top'));   
	$(this).css('border-left', topWindow.css('border-left'));  
	$(this).css('border-right', topWindow.css('border-right'));  
	$(this).css('border-bottom', topWindow.css('border-bottom'));     
	 
	 
	  
	topWindow.css('border-top', borderTop);  
	topWindow.css('border-left', borderLeft);   
	topWindow.css('border-right', borderRight); 
	topWindow.css('border-bottom', borderBottom);   
	
	//////////////
 
	topWindow = $(this);
 
});
	 
	/* EXPAND AAK COMPOSER */ 
	 
	$('#MSG_COMPOSER_MAX_MIN').on('click', function() {
		console.log('max min.......');
		if(composerCurrentSize == "MINIMIZED") {
			 
			maximizeComposer($(this).closest('.composerWrapper'));
		}	
		else if(composerCurrentSize == "MAXIMIZED") {
			 
			minimizeComposer($(this).closest('.composerWrapper'));  
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
    
	function maximizeComposer(parentComposerWrapper){
		
		 parentComposerWrapper.css('height', '100%');  
		 parentComposerWrapper.css('bottom','0');
		 parentComposerWrapper.css('top','0'); 
		 //parentComposerWrapper.find('#MSG_COMPOSER_CC_TEXTAREA').css('display', 'block');///////
	    // parentComposerWrapper.find('#MSG_COMPOSER_CHAT_TEXTAREA').css('display', 'block');///////
		// parentComposerWrapper.find('#MSG_COMPOSER_BOTTOM_BAR').css('display', 'block');
		

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
	
	function minimizeComposer(parentComposerWrapper) {
		 
		parentComposerWrapper.css('height', '157px');  
		//parentComposerWrapper.css('bottom', getFooterBarHeight());
		parentComposerWrapper.css('bottom', '40px');
		parentComposerWrapper.css('top', 'auto');  ////////////////////////////////////////
		//parentComposerWrapper.find('#MSG_COMPOSER_CC_TEXTAREA').css('display', 'none');///////
		//parentComposerWrapper.find('#MSG_COMPOSER_CHAT_TEXTAREA').css('display', 'none');///////
		//parentComposerWrapper.find('#MSG_COMPOSER_BOTTOM_BAR').css('display', 'none');
		
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
		showContaxonomyModal('AK_COMPOSER', $('#AAK_PLUS_CAT option:selected').text());
		//$('#CONTAXONOMY_MODAL').detach();
		//$('#CONTAXONOMY_MODAL').attach();
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

	


 var ajaxJsonMappingData =  [
							    
	                         	{
	                         		'id' : 			'P',
	                         		'url' :			 '/unicomposer/post',  
	                         		'alreadyCalled' : "no"
	                         	},
	                         	
	                         	{
	                         		'id' : 			'E',
	                         		'url' :			 '/unicomposer/email',
	                         		'alreadyCalled' : 'no'
	                         	}
                         
                         
                         ];
 
//msgCats();
	$('#AAK_PLUS_CAT').on('change', function(e) {
		
		var parentComposerWrapper = $(this).closest('.composerWrapper');
		
		parentComposerWrapper.find('.uni-composer-msg-category').hide();
		
		 
		
		
		var selectedOptionValue = this.value;
		
		showHideAakSubCat(selectedOptionValue, parentComposerWrapper); 
		
		if(selectedOptionValue == 'IM') { 
			parentComposerWrapper.find('#UNI_COMPOSER_IM').show();
			
			//maximizeComposer();
		}
		
		else {
			
			populateAakComposer(selectedOptionValue, parentComposerWrapper);
		}
		
		//$('#MSG_COMPOSER_GENERAL').hide();
	});
	 
	 
	function populateAakComposer(selectedOptionValue, parentComposerWrapper) {
		//first hide any msg category displayed
		
		
		for(var i = 0; i < ajaxJsonMappingData.length; i++) {
			var obj = ajaxJsonMappingData[i];
			
			if( (obj.id == selectedOptionValue) ) {
				if((obj.alreadyCalled == 'no')) {
					
					 appendMsgCategory(obj.url, selectedOptionValue, parentComposerWrapper);
					 
				}
				else {
					
					 
				}
				
				//
				
			}
			
		}
		
		
		
	} /* populateAakComposer() ends */
	
	//////////////////////////////////  
	
	function appendMsgCategory(url, selectedOptionValue, parentComposerWrapper) {
		var xhr = new XMLHttpRequest();
		
		xhr.onload = function() {  
			if(xhr.status === 200) { 
				console.log("Status  == 200");
				
				parentComposerWrapper.find('#TEXT_AREA').append(xhr.responseText);
				
				 //display the selected msg category
				if(selectedOptionValue == 'P') {
					parentComposerWrapper.find('#UNI_COMPOSER_POST').show();
					maximizeComposer(parentComposerWrapper);
				}
				if(selectedOptionValue == 'E') { 
					parentComposerWrapper.find('#UNI_COMPOSER_EMAIL').show();
					
					maximizeComposer(parentComposerWrapper);
				}
				
				
				 
			}
			else {
				console.log("Status == " + xhr.status);  
			}
		}
		
		 xhr.open('GET', url, true);         
		 xhr.send(null); 
	}
	
	
	
	/* SHOWS or HIDES CATEGORIES SELECT OPTIONS */
	function showHideAakSubCat(msgTypeSelected, parentComposerWrapper) {
		 //alert( this.value );
		if(msgTypeSelected == "IM") {
			parentComposerWrapper.find('#AAK_PLUS_SUB_CAT').css('display', 'none');
		}
		
		else {
			parentComposerWrapper.find('#AAK_PLUS_SUB_CAT').css('display', 'inline-block');
			msgCats(msgTypeSelected, parentComposerWrapper);
		}
		
	}

  
	
 function msgCats(msgType, parentComposerWrapper) {	
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
	

	




	 parentComposerWrapper.find('#AAK_PLUS_SUB_CAT').html('');
	// $('#AAK_PLUS_SUB_CAT').append
	msgCatsOptions.forEach(function(element) {
	  
		var elementString = '<option>' + element.name + '</option>';
		parentComposerWrapper.find('#AAK_PLUS_SUB_CAT').append($(elementString));
		 
		 
		if(element.childs) {			
			element.childs.forEach(function(level2Element) {
				var elementString = '<option>&nbsp;' + level2Element.name + '</option>';
				parentComposerWrapper.find('#AAK_PLUS_SUB_CAT').append($(elementString));
				

				if(level2Element.childs) {			
					level2Element.childs.forEach(function(level3Element) {
						 var elementString = '<option>&nbsp;&nbsp;&nbsp;' + level3Element.name + '</option>';
						 parentComposerWrapper.find('#AAK_PLUS_SUB_CAT').append($(elementString));
				        


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
		         ATTACH_OPTIONS.hide();  ///////////////


		         $('#MSG_COMPOSER_ADD_STUFF').on('click', function(){
					$('#ATTACH_OPTIONS').toggle();
					});

		     }

			    	 
		 });



});



