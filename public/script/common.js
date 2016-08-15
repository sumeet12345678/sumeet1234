  
	var globalSunModalContext = "profile";  
	var CENTER_REGION_HEIGHT = getCenterScreenLayoutHeight();
	var FOOTER_BAR_HEIGHT = getFooterBarHeight();  
	var SCREEN_HEIGHT_GLOBAL = screen.height;
	var TOP_MENU_BAR_HEIGHT = getTopMenuBarHeight();
	
	//alert(" -----"  + CENTER_REGION_HEIGHT);  
	//alert(" ----ttt-"  + TOP_MENU_BAR_HEIGHT);
	var _g_blurScreen;
	var g_pageHeaderBarJSONData; // carries page title, features icons menu JSON 
   

 
var GLOBAL_POP_UP_ARRAY_LIST = ["plus", "AKK_OPTIONS_POPUP_ID", "sunIcon"," QUK_TOOL_ICON_ID", "imgProfilePhoto"]; //not necessary

/* hides or displays sun icon */
function showHideD360Icon(d360) {
       if(d360) {
    	   $('#d360').css({'visibility':'visible'});    
       } 
}
 
function showHideFooterSearch(display) {  
	if(!display) {
		 $('#FOOTER_SEARCH').hide();    
	}
}

function getCenterScreenLayoutHeight() {
	//var $viewPortHeight = $(window).height();screen.height;     
	var $viewPortHeight = screen.height;     
	var $footerBarHeight = getFooterBarHeight();
	var $topMenuBarHeight = getTopMenuBarHeight();      
	 
	var $centerScreenSize =  $viewPortHeight - ($footerBarHeight + $topMenuBarHeight);   
	
	return $centerScreenSize;  
} 

function getTopMenuBarHeight() {
	var $topMenuBarHeight = $('.top-menubar').outerHeight(); 
	return $topMenuBarHeight;
}
        
function getFooterBarHeight() {
	return  $('#footerBarId').outerHeight();    
}


function getScreenWindowTotalHeight(){
	return screen.height;
}


/* ALL POPUP'S ARRAY */
function hideAllPopUpMenus(displayPopUp) { 
	 
	displayPopUp.removeClass('popUp');
	$('.popUp').hide();
	displayPopUp.toggle();
	displayPopUp.addClass('popUp');
}


function treeMenuDepth_1(container) {
	
}

/* toggle bar*/
function showHideDownSibling(whose, url) {
	//alert("url ==== === ");
	whose.parent().siblings().toggle();
	
 	 if( whose.attr('src') ==  '/media/images/icons/arrowUpLines.png' ) { 
 		whose.attr('src', '/media/images/icons/arrow-Down-lines.png');   
 	 }
 	 else {
 		whose.attr('src', '/media/images/icons/arrowUpLines.png'); 
 		
 		/* if getAttribute of data-ajaxCalled is 'yes' than dont call the method below, else make an ajax call and set data-ajaxCalled = 'yes' */
 		 
 	 }
}

/* toggle big section */
function showHideDownSiblingForBigSection(whose) {
	whose.siblings().toggle();
}

function blurScreen() {
	 
	if(!_g_blurScreen){
		 
		_g_blurScreen = $('<div style = "width: 100%; height: 100%; background-color: #000;"></div>');
		 
		_g_blurScreen.appendTo('body');  
		
	} 
	
	_g_blurScreen.show();
}   

function unBlurScreen() {
	_g_blurScreen.hide();     
}

/* 
 * 
 * For init-ing header bar in pages       
 * 
 */
function initHeaderBar() { 
	var headerBar = $('#CONTENT_HEADER_BAR');
	headerBar.append('<b>' + g_pageHeaderBarJSONData.title + '</b>'); 
	if(g_pageHeaderBarJSONData.features.length > 0) {
		document.getElementById('CONTENT_HEADER_BAR_RT_ICON').style.display = 'block';
	}	
	headerBar.show();
}

/* 
 * 
 * common icons menu creator and toggler
 * 
 */
function iconsMenuLauncherClickHandler(launchersIdentifer, iconsDataJson) {
	if(!iconsDataJson) {
		iconsDataJson = g_pageHeaderBarJSONData.features;
	}
	var iconsMenuID = launchersIdentifer  + '_MENU';
	var iconsMenuObj = document.getElementById(iconsMenuID);
	if(iconsMenuObj == null) {
		$('#CONTENT_HEADER_BAR').append(createIconMenu(iconsMenuID, iconsDataJson));
	} else {		
		$(iconsMenuObj).toggle();
	}
}
 
/*function placeIcon() {
	var menuDropDownDiv = $('<div class = "menu-drop-down-icon" style = "display:inline-block; height: 30px; top: 0; position: absolute; right: 0;"></div>'); 
	var menuDropDownImgIcon = $('<img src = "/media/images/icons/plainblack/3lines-thin-menu-blk.png" width = 30px; height = 30px;" />');
	menuDropDownDiv.append(menuDropDownImgIcon);

}*/
  

function createIconMenu(iconsMenuID, iconsInfoJson) {	
	/* append images(menu items) to menu items container */
	var menuItemsContainer = $('<div id = "' + iconsMenuID  + '" style = "background-color : #FFF ; display: block; position: absolute; right: 0;border: 2px solid #dcdcdc;"></div>');
	var menuItemsHtmlString  = "";	
	for(var i = 0; i < iconsInfoJson.length; i++) {
		menuItemsHtmlString = '<div class = "img-with-caption-common" onClick = "javascript: location.href = \'' + iconsInfoJson[i].url + '\';">';		
		menuItemsHtmlString = menuItemsHtmlString + '<img style = "cursor: pointer;"  width="28" height="28" src="' + iconsInfoJson[i].img +  '" />';   
		menuItemsHtmlString = menuItemsHtmlString +  '<span class = "img-caption"><b>' + iconsInfoJson[i].txt +'</b></span>' + '</div>';		
		menuItemsContainer.append($(menuItemsHtmlString));  
	}
	return menuItemsContainer;
}


/* aligns menu bar item with equal spacing,  currently for images with caption. Make it generic */
function alignMenuBarItems() {
	 var $menuBar = $('#TEAM_HOME_MENU_BAR');
	 var menuBarWidth = $menuBar.width();
	 var menuItemWidth = $('.img-with-caption-common').width();
	// alert("Menu right == " + menuItem.width());
	 var noOfMenuItems = $menuBar.find('.img-with-caption-common').length;
	 var avlbleSpace =  menuBarWidth - (noOfMenuItems * menuItemWidth);
	 console.log("Total width = " + menuBarWidth  + "    Total Free space == " + avlbleSpace + "  noOfMenuItems == " + noOfMenuItems);
	 var imgMarginRight =  avlbleSpace / (noOfMenuItems - 1)-4; // -5 should be removed, jst given a discrete value
	 
	 if(imgMarginRight <= 0) {
		 imgMarginRight = 0;
	 }
	 console.log("Margin-right ===  " + imgMarginRight);
	 //alert("Total images === " + noOfMenuItemImages);  li:not(:last-child)
	 $menuBar.find('.img-with-caption-common:not(:last-child)').css('margin-right', imgMarginRight);    
	 
}
  

 

/**/
var peopleAppLoaded = false;

function loadPeopleApp(element) {
	
    if(!peopleAppLoaded)
    { 	   
    	$.get('/peopleApp')
    	.done(function(data) {
    		$(data).insertAfter(element);
			peopleAppLoaded = true;  
    	})
    	.fail( function(){ console.log("Ajax call to people App failed") });
    }
    else {
    	$('#PEOPLE_HOME').toggle();
    }
    
}



/**/
var b_contaxgonomyLoaded = false; /* ---------------       */

function loadContaxgonomy(callback) {
	
    if(!b_contaxgonomyLoaded)
    { 	      
    	$.get('http://ekcontagx.herokuapp.com/html/contagxonomy.html')
    	.done(function(data) {
    		$(data).insertAfter($('#CONTENT_HEADER_BAR'));
    		b_contaxgonomyLoaded = true;  
    		
    		if (callback && typeof(callback) === "function") {
    	        callback();
    	    } 
    	})
    	.fail( function(){ console.log("Ajax call to contaxonomy  failed") });
    }  
   else {
	     if (callback && typeof(callback) === "function") {
   		     callback();
   	     } 
   }
    
    
        
}




///* loads COMPOSER*/
//$('#plus').on('click', function(){
//	  alert(" Composer in Common.js ...");
//		loadMsgComposer();
//});  	
function showHideProgress(){
	    $('#PROGRESS_BAR').toggle();    /* PROGRESS_BAR IS placed in footer*/
	}
var b_aakComposerLoaded = false;
  
function uniComposeMsg(usrId, usrName, msgType, context) {
	
    if(!b_aakComposerLoaded)
    { 	      
    	$.get('/aakComposer')
    	.done(function(data) {  
    		$(data).insertAfter($('#footerBarId'));
    		b_aakComposerLoaded = true;      		 
    		
    		$(function() {   
	    		initComposer();
	    		toggleComposer(usrId, usrName, msgType, context);
    		});
    	})
    	.fail( function(){ console.log("Ajax call to aakComposer  failed") });
    }  
   else {
	  // initComposer();
	   toggleComposer(usrId, usrName, msgType, context);	      
   }  
        
}   





  










//function getDeviceType() {
	
//	var device_width = screen.width;
	
	//if(device_width) {
	// section_title
	//}
//}

//window.onclick = function(event) {
//////	alert("Event target Id ===   " + event.target.id);
////	GLOBAL_POP_UP_ARRAY_LIST.forEach(function(menuId) {
////		if(event.target.id === menuId){
////			$("#" + menuId).toggle();
////		}
////		else {
////			$("#" + menuId).hide();
//	alert("inside window onClick");
//	//$('.popUp').hide();
// 	}
////	});
////}




 