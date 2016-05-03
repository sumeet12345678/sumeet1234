
$(function(){
	
	$('#plus').on('click', function(){
		
	
		
		var $composerWrapper = $('.composerWrapper');     
		//var $topMenubarHeight = $('.top-menubar').height();  
		var $footerBarHeight = $('#footerBarId').height();
		//var $viewPortHeight = $(window).height(); // height of browser viewport 
		//alert($viewPortHeight - ($topMenubarHeight + $footerBarHeight));
		//alert("window height == " + $viewPortHeight);
		 
		$composerWrapper.css('bottom', $footerBarHeight);
		//$composerWrapper.css('top', $footerBarHeight); 
		$composerWrapper.toggleClass('visible');
		 
		//$composerWrapper.css('height', $viewPortHeight - ($topMenubarHeight+$footerBarHeight) - 309);  
		
		//Get height for the viewport and substract header and footer height to get the required height for mobile devices
	}); 
	
	
	
	/* EXPAND AAK COMPOSER */
	
	$('#MSG_COMPOSER_MAXIMIZE').on('click', function(){
		var $composerWrapper = $('.composerWrapper');
		var $ccTextArea = $('#MSG_COMPOSER_CC_TEXTAREA');
		var $ccTextAreaReadOnly = $('#MSG_COMPOSER_READ_ONLY_TEXTAREA');
		var $ccTextAreaReadOnly = $('#MSG_COMPOSER_READ_ONLY_TEXTAREA');
		$composerWrapper.css('height', '100%');  
		$composerWrapper.css('bottom','0');  
		$ccTextArea.css('display', 'block');///////
		$ccTextAreaReadOnly.css('display', 'block');///////
		
		
	});
	
	
	
	function maximizeComposerWrapper() {
		
	}
	
	
});
