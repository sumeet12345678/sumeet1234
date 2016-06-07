

$(function(){
	
	var composerCurrentSize = "MINIMIZED";    
	
	var $composerWrapper = $('.composerWrapper');
	var $ccTextArea = $('#MSG_COMPOSER_CC_TEXTAREA');
	var $chatTextArea = $('#MSG_COMPOSER_CHAT_TEXTAREA');
	var $composerBottomBar = $('#MSG_COMPOSER_BOTTOM_BAR');  
	
//	$composerBottomBar.css('width', '-=80');  //Intial width during loading
	
	$('#plus').on('click', function() {
		 
		var $composerWrapper = $('.composerWrapper');     
		 
		$composerWrapper.css('bottom', getFooterBarHeight()); 
		//$composerWrapper.css('top', $footerBarHeight); 
		//$composerWrapper.toggleClass('visible');
		hideAllPopUpMenus($composerWrapper);
		 
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
		 
		
		composerCurrentSize = "MAXIMIZED";    

	}
	
	function minimizeComposer() {
		
		$composerWrapper.css('height', '157px');  
		$composerWrapper.css('bottom', getFooterBarHeight());  
		$ccTextArea.css('display', 'none');///////
		$chatTextArea.css('display', 'none');///////
		$composerBottomBar.css('display', 'none');
		     
		composerCurrentSize = "MINIMIZED";  
		
	}
	
	
	function changeChatTextArea() {
		
	}
	
	function maximizeComposerWrapper() {
		
	}
	
	
});
