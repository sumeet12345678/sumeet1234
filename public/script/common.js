var globalSunModalContext = "profile";    

/* hides or displays sun icon */
function showHideD360Icon(d360) {
       if(d360) {
    	   $('#d360').css({'visibility':'visible'});    
       }
}
 

function getCenterScreenLayoutHeight() {
	var $viewPortHeight = $(window).height();     
	var $footerBarHeight = $('#footerBarId').height();
	var $topMenuBarHeight = $('top-menubar').height();      
	 
	var $centerScreenSize =  $viewPortHeight - ($footerBarHeight + $topMenuBarHeight);   
	
	return $centerScreenSize;
}    