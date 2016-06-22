$(function(){
	
	var composerCurrentSize = "MINIMIZED"; 
	
	var $composerWrapper = $('.composerWrapper');
	var $ccTextArea = $('#MSG_COMPOSER_CC_TEXTAREA');
	var $chatTextArea = $('#MSG_COMPOSER_CHAT_TEXTAREA');
	var $composerBottomBar = $('#MSG_COMPOSER_BOTTOM_BAR');  
	var $smileyemotions = $('#SMILEY_EMOTIONS');
	var $attachoption = $('#ATTACH_OPTIONS'); 
	var topWindow = $composerWrapper;  
	var newWindowBtn = $('#AAK_NEW_COMPOSER_WINDOW_BTN');  
	var top = 0;  
	
	//var bottomVar = 58;
	var bottomVar = 40;
	//var leftVar = 20;
	var leftVar = 40;
	var z_index = 1058;
	
	var windowsHidden = false;
	
	
	
	// main window shou  60px and focuse
	
	// set creat new 
	
	$('#plus').on('click', function() { 
		
		$('#COMMON_BLUR_SCREEN').toggle();
		
		 $('.composerWrapper').toggle();
		 
		 if(windowsHidden) {
			 topWindow.show();
			 windowsHidden = false;
		 }
		
		 
		 //topWindow.show(); 
		 $composerWrapper.css('bottom', '40px');   
		// newWindowBtn = $('#AAK_NEW_COMPOSER_WINDOW_BTN'); 
		 newWindowBtn.show(); 
		 newWindowBtn.css('top', $composerWrapper.position().top);
		 newWindowBtn.css('top','-=31'); 
		 newWindowBtn.css('margin-left', '40px');
				 
		/* For Desktop Esc Key functionality */
		$('.composerWrapper').focus(); 
	});   
	 
 

	
$('#AAK_NEW_COMPOSER_WINDOW_BTN').on('click', function() { 
	
	    var newComposer = $composerWrapper.clone(true);
		newComposer.appendTo('body'); 
		newComposer.css('bottom',  bottomVar +44);
		bottomVar = bottomVar + 44; 
		newComposer.css('left',  '+=' + leftVar);
		leftVar = leftVar + 40;
		newComposer.css('z-index', z_index);
		z_index--;
		newWindowBtn.css('top', newComposer.position().top); //FIRST PLACING newWindowBtn at same top value as newComposer.
		newWindowBtn.css('top','-=31'); //DECREASING THE TOP VALUE BY HEIGHT OF newWindowBtn TO MAKE newWindowBtn VISIBLE. 
	    newWindowBtn.css('left', '+=40');

		/*lighter grey background color for new composer popups*/
		newComposer.find('#MSG_COMPOSER_TOP_BAR').css('background-color','#999696'); 
		newComposer.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color','#999696'); 
		newComposer.find('#MSG_COMPOSER_LEFT_BAR').css('background-color','#999696');
		newComposer.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color','#999696');
		
		/* lighter border(same as composerWrapper)*/ 
		 newComposer.css('border-top', '0px solid #999696');   
		 newComposer.css('border-left', '0px solid #999696');  
		 newComposer.css('border-right', '0px solid #999696');  
		 newComposer.css('border-bottom', '0px solid #999696');  
	});
 
/* on click on each composer exchange the windows */	
$('.composerWrapper').on('click',function() {
	   
        if(!topWindow.is(this)) {
        	 var whichWindow = swapComposerWindows($(this));
         	maximizeComposer(whichWindow);
        }
        
	
	/* HIDE ALL OTHER WINDOWS AND SHOW THE CURRENT ONE . THE CLICKED WINDOW IS THE CURRENT TOP WINDOW NOW. */
/*	$('.composerWrapper').hide();
	topWindow.show();
	windowsHidden = true;
*/	
//	newWindowBtn.css('top', topWindow.position().top);
//	newWindowBtn.css('top','-=31'); 
//	newWindowBtn.css('left',topWindow.css('left'));  
	//newWindowBtn.css('bottom', '500');
	 
});

function swapComposerWindows(swapTo) {
	 console.log('composer.......');
	    
	    var bottom =  swapTo.css('bottom');
		var z_index =swapTo.css('z-index');
		var left =swapTo.css('left');
		var top =swapTo.position().top;  
			
		swapTo.css('bottom', topWindow.css('bottom'));
		swapTo.css('z-index', topWindow.css('z-index'));
		swapTo.css('left', topWindow.css('left'));  
		
		topWindow.css('bottom', bottom);
		topWindow.css('z-index', z_index);
		topWindow.css('left', left);
		
		//EXCHANGE COLORS  
		var topBarBgColor =swapTo.find('#MSG_COMPOSER_TOP_BAR').css('background-color');
		var rightBarBgColor =swapTo.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color');
		var leftBarBgColor =swapTo.find('#MSG_COMPOSER_LEFT_BAR').css('background-color');
		var bottomBarBgColor =swapTo.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color');
		
		swapTo.find('#MSG_COMPOSER_TOP_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_TOP_BAR').css('background-color'));
		swapTo.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color'));
		swapTo.find('#MSG_COMPOSER_LEFT_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_LEFT_BAR').css('background-color'));
		swapTo.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color', topWindow.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color'));  
		
		topWindow.find('#MSG_COMPOSER_TOP_BAR').css('background-color', topBarBgColor );
		topWindow.find('#MSG_COMPOSER_RIGHT_BAR').css('background-color', rightBarBgColor );
		topWindow.find('#MSG_COMPOSER_LEFT_BAR').css('background-color', leftBarBgColor );
		topWindow.find('#MSG_COMPOSER_BOTTOM_BAR').css('background-color', bottomBarBgColor ); 
		 
		//EXCHANGE BORDERS 
		var borderTop =swapTo.css('border-top');
		var borderLeft = swapTo.css('border-left');
		var borderRight = swapTo.css('border-right');
		var borderBottom = swapTo.css('border-bottom');  
		
		swapTo.css('border-top', topWindow.css('border-top'));   
		swapTo.css('border-left', topWindow.css('border-left'));  
		swapTo.css('border-right', topWindow.css('border-right'));  
		swapTo.css('border-bottom', topWindow.css('border-bottom'));  
		  
		topWindow.css('border-top', borderTop);  
		topWindow.css('border-left', borderLeft);   
		topWindow.css('border-right', borderRight); 
		topWindow.css('border-bottom', borderBottom);   
		
		 
		
		topWindow =swapTo;
		
		return topWindow;
}

$('#AAK_PLUS_CLOSE_BTN').on('click', function() { 
	if($('.composerWrapper').length == 1) {
		$('#COMMON_BLUR_SCREEN').toggle();
	}
	
	$(this).closest(".composerWrapper").remove();
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
	  parentComposerWrapper.find('#MSG_COMPOSER_BOTTOM_BAR').css('display', 'block');
	

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
	parentComposerWrapper.find('#MSG_COMPOSER_BOTTOM_BAR').css('display', 'none');
	
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
 
	
$('#MSG_COMPOSER_TO').on('click', function() {
	//alert( $('#MSG_CATEGORY option:selected').text() );  
	
	//$('#CONTAXONOMY_MODAL').show();
	showContaxonomyModal('AK_COMPOSER', $('#AAK_PLUS_CAT option:selected').text());
	//$('#CONTAXONOMY_MODAL').detach();
	//$('#CONTAXONOMY_MODAL').attach();
	$('#CONTAXONOMY_MODAL').focus();
	
});
	
	
$('.composerWrapper').focus();
	
 
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
$('.imo_icon_img').on('click', function(e){ 
	$('#MSG_COMPOSER_MESSAGE_TEXTAREA').append($(this).clone()); 
});
 

 var ajaxJsonMappingData =  [
							    
	                         	{
	                         		'id' : 			'P',
	                         		'url' :			 '/unicomposer/post',  
	                         		'alreadyCalled' : "no"
	                         	},
	                         	
	                         	{
	                         		'id' : 			'C',
	                         		'url' :			 '/classifieds',
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
});
	 
	 
function populateAakComposer(selectedOptionValue, parentComposerWrapper) {
	//first hide any msg category displayed
	for(var i = 0; i < ajaxJsonMappingData.length; i++) {
		var obj = ajaxJsonMappingData[i];		
		if( (obj.id == selectedOptionValue) ) {
			if((obj.alreadyCalled == 'no')) {				
				 appendMsgCategory(obj.url, selectedOptionValue, parentComposerWrapper);
			}			
		}		
	}
} 

	
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
			if(selectedOptionValue == 'C') { 
				//parentComposerWrapper.find('#UNI_COMPOSER_EMAIL').show();
				parentComposerWrapper.find('#POST_CLASSIFIED').show();
				
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
	         $('#MSG_COMPOSER_ADD_STUFF').on('click', function(){
				$('#ATTACH_OPTIONS').toggle();
				});

	     }  
	 });
 
});


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

