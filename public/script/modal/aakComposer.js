/*
 * In this code, new composer windows are created by cloning existing window. So while clicking on any buttons/options on any window,
 * the parent of the buttons/options is first identified(using closest()). 
 * 
 * */


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
var composerCurrentSize;
var $composerWrapper;
var $composerAudience;
var $ccTextArea;
var $chatTextArea;
var $composerBottomBar;  
var $smileyemotions;
var $attachoption; 
var topWindow;  
var newWindowBtn;  
var top; 
var bottomVar;
var leftVar;
var z_index;
var windowsHidden; 

var firstTimePopUpped; ///
 
	
/* on ready function*/
$(function() { 
	initComposer();
});
	
function initComposer() {
	 composerCurrentSize = "MINIMIZED";  
	 $composerWrapper = $('.composerWrapper');
	 $composerAudience = $('#MSG_COMPOSER_TO');
	 $ccTextArea = $('#MSG_COMPOSER_CC_TEXTAREA');
	 $chatTextArea = $('#MSG_COMPOSER_CHAT_TEXTAREA');
	 $composerBottomBar = $('#MSG_COMPOSER_BOTTOM_BAR');  
	 $smileyemotions = $('#SMILEY_EMOTIONS');
	 $attachoption = $('#ATTACH_OPTIONS'); 
	 topWindow = $composerWrapper;  
	 newWindowBtn = $('#AAK_NEW_COMPOSER_WINDOW_BTN');     
	 top = 0;  
	 bottomVar = 42;
	 leftVar = 40; 
	 z_index = 1058;
	 windowsHidden = false;  
	 
	 firstTimePopUpped = true; ///
	 
	 $('#plus').on('click', function(){
		 uniComposeMsg();
	 });  
	
	 newWindowBtn.on('click', createNewComposerWindow); 
	 
	 $('.composerWrapper').on('click',function() {
		 selectComposerWindow(this);
	 });
	 
	 $('#AAK_PLUS_CLOSE_BTN').on('click', function() { 
		 closeWindow($(this));
	});
	 
	$('#MSG_COMPOSER_MAX_MIN').on('click', function(event) {
		//event.stopPropagation();
	 	 //maxMinComposer($(this));	
		maxMinComposer($(this).closest('.composerWrapper'));
		 
	});   
	
	$('#MSG_COMPOSER_ADD_STUFF').on('click', function() {
		$('#ATTACH_OPTIONS').toggle();
	});
	
	$('#MSG_COMPOSER_TO').on('click', function() {
		loadContaxgonomy(function() {
			showContaxonomyModal('AK_COMPOSER', $('#AAK_PLUS_CAT option:selected').text());		
			$('#CONTAXONOMY_MODAL').focus();
		}); //Ajax call  
		
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
		$('#MSG_COMPOSER_CONTENT').append($(this).clone()); 
	}); 
	
	$('#AAK_PLUS_CAT').on('change', function(e) {
		onChangeOfMsgCat(this);
	});
	
	     
} /* initComposer() ends */


function uniComposeMsg(usrId, usrName, msgType, context) {  //uniComposeMsg(category, true) ==> 'true' for show/hide composer's footer bar. context = local/global(footer bar)
	// alert("hi");
	 $('#COMMON_BLUR_SCREEN').toggle();		
	 $('.composerWrapper').toggle();  
	 newWindowBtn.toggle();
	 $('#AAK_PLUS_CAT').val(msgType);
	 //newWindowBtn.show(); ///
	 $composerAudience.text(usrName);
//	 if(windowsHidden) {
//		 topWindow.show();
//		 windowsHidden = false;
//	 }
	 
	 
	
	 positionComposer(context);	
}


function positionComposer(context) {
	
     $composerWrapper.css('bottom', '42px');   
	 
     if(context != "localCntxt"){
    	 if(firstTimePopUpped == true) {
    		 newWindowBtn.show();	 
    		 newWindowBtn.css('top', $composerWrapper.position().top);
    		 newWindowBtn.css('top','-=31'); 
    		 newWindowBtn.css('margin-left', '40px');
    		 
    		  firstTimePopUpped = false;
    		}  
    	 
		 //newWindowBtn.show();	 
		 //newWindowBtn.css('top', $composerWrapper.position().top);
		 //newWindowBtn.css('top','-=31'); 
		 //newWindowBtn.css('margin-left', '40px');
     }			 
	/* For Desktop Esc Key functionality */
	$('.composerWrapper').focus(); 
	
	
	
	
	
}


function createNewComposerWindow() {
	var newComposer = $composerWrapper.clone(true);
	newComposer.appendTo('body'); 
	//newComposer.css('bottom',  bottomVar + 44);
	//bottomVar = bottomVar + 44; 
	newComposer.css('bottom',  bottomVar + 44);
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
	newComposer.css('border-top', '2px solid #999696');   
	newComposer.css('border-left', '1px solid #999696');  
	newComposer.css('border-right', '1px solid #999696');  
	newComposer.css('border-bottom', '0px solid #999696');  
}
   
function selectComposerWindow(selectedWindow) { 
    if(!topWindow.is(selectedWindow)) {
    	 var whichWindow = swapComposerWindows($(selectedWindow)); 
     	 maximizeComposer(whichWindow);
    }	   
}

function swapComposerWindows(swapTo) {
	 
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


/* 
 * This function gets called when max_min button is clicked on composer. The maximizeComposer() or minimizeComposer() will be called
 *  depending on the current max or min status of the composer whose btn is clicked.
 *  
*/
function maxMinComposer(composerWindow) {  
	  
	if(composerCurrentSize == "MINIMIZED") {
		/* check below done to avoid calling max function if it is not the top window, coz for back windows selectComposerWindow() is implemented where we swap and maximize the clicked window.  */
		 if(topWindow.is(composerWindow)) {
			 maximizeComposer(composerWindow.closest('.composerWrapper'));
	    }	 
		  
	}	
	else if(composerCurrentSize == "MAXIMIZED") {
		minimizeComposer(composerWindow.closest('.composerWrapper'));  
	}		 
}

function closeWindow(closeBtn) {  
	if($('.composerWrapper').length == 1) {
		$('#COMMON_BLUR_SCREEN').toggle();
		closeBtn.closest(".composerWrapper").hide();
		newWindowBtn.hide();
	}
	else {
		/* search all windows whose buttom is greater than the current window and decrease the bottom with appropriate value  */
		var currenWinbottom = closeBtn.closest(".composerWrapper").css('bottom');
		console.log(currenWinbottom);
		closeBtn.closest(".composerWrapper").remove();  
		repositionComposerWindows(currenWinbottom);
	}  
}  

function repositionComposerWindows(currenWinbottom) {
	var currenWinbottom = parseInt(currenWinbottom.replace(/[^-\d\.]/g, ''));
	for(var i = 0; i < $('.composerWrapper').length; i++) {
		
		var bottom = parseInt($('.composerWrapper').eq(i).css('bottom').replace(/[^-\d\.]/g, ''));
		//alert(bottom);  
			
		if( bottom > currenWinbottom) { 			
			$('.composerWrapper').eq(i).css('bottom', '-=44');
			$('.composerWrapper').eq(i).css('left', '-=40'); 
		}
	}
	
}


function maximizeComposer(parentComposerWrapper) {	   
	
	 parentComposerWrapper.css('height', '100%');  
	 parentComposerWrapper.css('bottom','0');
	 parentComposerWrapper.css('top','0'); 
     parentComposerWrapper.find('#MSG_COMPOSER_BOTTOM_BAR').css('display', 'block');
	 
	 $smileyemotions.css('top', '0px');    
	 $smileyemotions.css('height', '20%');
	 $smileyemotions.css('right', '40px');
	 $attachoption.css('height', '25%'); 

	 if (screen.width <= 767) {
		$smileyemotions.css('width', 'calc(100% - 80px)'); 
		$attachoption.css('height', '15%');
	 }	 
	 
	 parentComposerWrapper.find('#UNI_COMPOSER_CONTENT_AREA').css('height', 'calc(100% - 40px)');
	
	 composerCurrentSize = "MAXIMIZED";     
}
	
function minimizeComposer(parentComposerWrapper) {
	
	parentComposerWrapper.css('height', '157px');  
	parentComposerWrapper.css('bottom', '42px');
	parentComposerWrapper.css('top', 'auto');   
	parentComposerWrapper.find('#MSG_COMPOSER_BOTTOM_BAR').css('display', 'none');
	 
	$smileyemotions.css('top', '-151px');
	$smileyemotions.css('height', '70%');
	$smileyemotions.css('right', '0px');
	$attachoption.css('height', '70%');

	if (screen.width <= 767) {
		$smileyemotions.css('width', '100%');
	} 					 
	  
	parentComposerWrapper.find('#UNI_COMPOSER_CONTENT_AREA').css('height', 'calc(100% - 40px)');
	
	composerCurrentSize = "MINIMIZED";  
}

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
			parentComposerWrapper.find('#UNI_COMPOSER_CONTENT_AREA').append(xhr.responseText);  			
			if(selectedOptionValue == 'P') {
				parentComposerWrapper.find('#UNI_COMPOSER_POST').show();
				maximizeComposer(parentComposerWrapper);
			}
			if(selectedOptionValue == 'C') { 
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
	
function onChangeOfMsgCat(selectCat) {
	
	var parentComposerWrapper = $(selectCat).closest('.composerWrapper');	
	parentComposerWrapper.find('.uni-composer-msg-category').hide();
	var selectedOptionValue = selectCat.value;
	
	showHideAakSubCat(selectedOptionValue, parentComposerWrapper); 
	
	if(selectedOptionValue == 'IM') { 
		parentComposerWrapper.find('#UNI_COMPOSER_IM').show();
	}	
	else {		
		populateAakComposer(selectedOptionValue, parentComposerWrapper);
	}
}

/* SHOWS or HIDES CATEGORIES SELECT OPTIONS */
function showHideAakSubCat(msgTypeSelected, parentComposerWrapper) {
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
			                   }  
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
	                        	   'name' : "Queensland"  
		                       } 
	                         ];
		}	
	
		parentComposerWrapper.find('#AAK_PLUS_SUB_CAT').html('');
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
	


/*   mouseup Event  need to be verified */	
//Hide When click on the Text Area 
$(document).mouseup(function(e) 
{
 var SMILEY_EMOTIONS = $("#SMILEY_EMOTIONS");
 if (!$('#SMILEY_EMOTIONS').is(e.target) && !SMILEY_EMOTIONS.is(e.target) && SMILEY_EMOTIONS.has(e.target).length == 0) {
     SMILEY_EMOTIONS.hide();
 }

});

$(document).mouseup(function (e) {
	     var ATTACH_OPTIONS = $("#ATTACH_OPTIONS");
	     if (!$('#ATTACH_OPTIONS').is(e.target) && !ATTACH_OPTIONS.is(e.target) && ATTACH_OPTIONS.has(e.target).length == 0) {
	         ATTACH_OPTIONS.hide();   
	         $('#MSG_COMPOSER_ADD_STUFF').on('click', function(){
				$('#ATTACH_OPTIONS').toggle();
				});
	     }  
});
