

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
		
		/* For Desktop Esc Key functionality */
		$('.composerWrapper').focus(); 
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
	
	$('#MSG_COMPOSER_ADD_STUFF').on('click', function() {
		$('#ATTACH_OPTIONS').toggle();
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
	
	$('#MSG_COMPOSER_TO').on('click', function() {
		//alert( $('#MSG_CATEGORY option:selected').text() );  
		
		//$('#CONTAXONOMY_MODAL').show();
		showContaxonomyModal('AK_COMPOSER', $('#MSG_CATEGORY option:selected').text());
		$('#CONTAXONOMY_MODAL').focus();
		
	});
	
	
	$('.composerWrapper').focus();
	
});
