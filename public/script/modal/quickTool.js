$(function(){
	  var qukToolVisible=false;
	  
	$('#QUK_TOOL_ICON_ID').on('click', function(){
		//alert('jjjjrr');
		var qukTool = $('.quk_tool');
		if(qukToolVisible){
			qukTool.css('display','none');
			qukToolVisible=false;
		}
		else{
			qukTool.css('display','block');
			 qukToolVisible=true;
		}
		
		setWidthOfLeftandRightBar();		 
	});   
	
	function setWidthOfLeftandRightBar(){
		//retrieve height of top bar
		topBarHeight = $('#QUK_TOOL_TOP_BAR').outerHeight();
		$('#QUK_TOOL_LEFT_BAR').css('width', topBarHeight);
		$('#QUK_TOOL_RIGHT_BAR').css('width', topBarHeight);  
		
		
	}
});  