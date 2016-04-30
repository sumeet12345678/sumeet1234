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
		setWidthOfLeftandRightBar();		 
	});   
	
	function setWidthOfLeftandRightBar(){
		//Set height of quk_tool,  and set left and right bar's width equal to top bar
		var $viewPortHeight = $(window).height();  
		var $footerBarHeight = $('#footerBarId').height(); 
		var topBarHeight = $('#QUK_TOOL_TOP_BAR').outerHeight();
		//alert(topBarHeight);
		
		$('#QUK_TOOL_LEFT_BAR').css('width', topBarHeight);
		$('#QUK_TOOL_LEFT_BAR').css('top',  topBarHeight);
		$('#QUK_TOOL_RIGHT_BAR').css('width', topBarHeight);
		$('#QUK_TOOL_RIGHT_BAR').css('top', topBarHeight);
		
		$('#QUK_TOOL_BOTTOM_BAR').css('bottom',  $footerBarHeight);
		
		$('#QUK_TOOL_LEFT_BAR').toggle();    
		$('#QUK_TOOL_RIGHT_BAR').toggle();
		$('#QUK_TOOL_BOTTOM_BAR').toggle();
		 $('#QUK_TOOL_TOP_BAR').toggle();
		
		
		//$('#QUK_TOOL_BOTTOM_BAR').css('height', $viewPortHeight - $footerBarHeight);
		//$('#QUK_TOOL_LEFT_BAR').css('width', topBarHeight + (.1 * topBarHeight));
		//$('#QUK_TOOL_RIGHT_BAR').css('width', topBarHeight + (.1 * topBarHeight));    
		
		
	};
});  