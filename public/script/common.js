var globalSunModalContext = "profile";  
var CENTER_REGION_HEIGHT = getCenterScreenLayoutHeight();
var FOOTER_BAR_HEIGHT = getFooterBarHeight();  
 

/* hides or displays sun icon */
function showHideD360Icon(d360) {
       if(d360) {
    	   $('#d360').css({'visibility':'visible'});    
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

