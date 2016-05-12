var globalSunModalContext = "profile";  
var CENTER_REGION_HEIGHT = getCenterScreenLayoutHeight();
var FOOTER_BAR_HEIGHT = getFooterBarHeight();  
var SCREEN_HEIGHT_GLOBAL = screen.height;
var TOP_MENU_BAR_HEIGHT = getTopMenuBarHeight();


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
