
$(function(){
	
	$('#plus').on('click', function(){
		var $composerWrapper = $('.composerWrapper');     
		//var $topMenubarHeight = $('.top-menubar').height();
		var $footerBarHeight = $('#footerBarId').height()
		//var $viewPortHeight = $(window).height(); // height of browser viewport 
		//alert($viewPortHeight - ($topMenubarHeight + $footerBarHeight));
		//alert("window height == " + $viewPortHeight);
		 
		$composerWrapper.css('bottom', $footerBarHeight);  
		$composerWrapper.toggleClass('visible');
		 
		//$composerWrapper.css('height', $viewPortHeight - ($topMenubarHeight+$footerBarHeight) - 309);
		
		//Get height for the viewport and substract header and footer height to get the required height for mobile devices
	}); 
});
