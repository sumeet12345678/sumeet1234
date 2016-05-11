$(function(){
	  var qukToolVisible=false;
	  
	$('#QUK_TOOL_ICON_ID').on('click', function(){  
	//alert('jjjjrr');  
	/*
		var qukTool = $('.quk_tool');
		if(qukToolVisible){
			qukTool.css('display','none');
			qukToolVisible=false;
		}
		else{
			qukTool.css('display','block');
			 qukToolVisible=true;
		}
	*/
		
		// Listen for orientation changes      
		window.addEventListener("orientationchange", function() {
		    // Announce the new orientation number
		   // alert(window.orientation);
		}, false);
		
		
		setWidthOfLeftandRightBar();		
		 
	});   
	
	function setWidthOfLeftandRightBar(){
		//Set height of quk_tool,  and set left and right bar's width equal to top bar
		var $viewPortHeight = $(window).height();     
		var $footerBarHeight = $('#footerBarId').height();     
		
		var $topBar = $('#QUK_TOOL_TOP_BAR');
		var $bottomBar = $('#QUK_TOOL_BOTTOM_BAR'); 
		var $leftBar = $('#QUK_TOOL_LEFT_BAR');
		var $rightBar = $('#QUK_TOOL_RIGHT_BAR');             
		  
		  
		//var topBarHeight = $('#QUK_TOOL_TOP_BAR').outerHeight();
		//alert(topBarHeight);
		
		//$('#QUK_TOOL_LEFT_BAR').css('width', topBarHeight);
		//$('#QUK_TOOL_LEFT_BAR').css('top',  topBarHeight); 
		//$('#QUK_TOOL_RIGHT_BAR').css('width', topBarHeight);
		//$('#QUK_TOOL_RIGHT_BAR').css('top', topBarHeight);
		
		$leftBar.css('height', $viewPortHeight - (90 + $footerBarHeight)); // 90 = 45 + 45 for top bar and left bar
		$rightBar.css('height', $viewPortHeight - (90 + $footerBarHeight)); // 90 = 45 + 45 for top bar and left bar
		$bottomBar.css('bottom',  $footerBarHeight);
		
		  
		$leftBar.toggle();    
		$rightBar.toggle();
		$bottomBar.toggle();
		$topBar.toggle();  
		
		//hideAllPopUpMenus([$leftBar,$rightBar,$bottomBar, $topBar]);  
//		hideAllPopUpMenus($rightBar);
//		hideAllPopUpMenus($bottomBar);
//		hideAllPopUpMenus($topBar);
		
		
		//$('#QUK_TOOL_BOTTOM_BAR').css('height', $viewPortHeight - $footerBarHeight);
		//$('#QUK_TOOL_LEFT_BAR').css('width', topBarHeight + (.1 * topBarHeight));
		//$('#QUK_TOOL_RIGHT_BAR').css('width', topBarHeight + (.1 * topBarHeight));    
		
		
	};
});  