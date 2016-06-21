

$(function(){
	  var qukToolVisible=false;
	  
	  var images = [
	                {  'id'   : '1',
		  			   'img'  : '/media/images/icons/add-audience.png',
		  			   'text' : 'Connections',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
	                },
	                {  'id'   : '2',
			  			   'img'  : '/media/images/icons/team/team-blk.png',
			  			   'text' : 'Teams',
			  			   'col'  : 'orange',
			  			   'url'  : '123'
		            },
		            {  'id'   : '3',
		  			   'img'  : '/media/images/icons/crowd-black.png',
		  			   'text' : 'Groups',
		  			   'col'  : 'yellow',
		  			   'url'  : '123'
		            },
		            {  'id'   : '4',
		  			   'img'  : '/media/images/icons/add-audience.png',
		  			   'text' : 'Connections',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
		            },
		            {  'id'   : '5',
		  			   'img'  : '/media/images/icons/team/team-blk.png',
		  			   'text' : 'Teams',
		  			   'col'  : 'orange',
		  			   'url'  : '123'
			        },
			        {  'id'   : '6',
		  			   'img'  : '/media/images/icons/crowd-black.png',
		  			   'text' : 'Groups',
		  			   'col'  : 'yellow',
		  			   'url'  : '123'
		            },
		            {  'id'   : '7',
		  			   'img'  : '/media/images/icons/add-audience.png',
		  			   'text' : 'Connections',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
	                },
	                {  'id'   : '8',
			  			   'img'  : '/media/images/icons/team/team-blk.png',
			  			   'text' : 'Teams',
			  			   'col'  : 'orange',
			  			   'url'  : '123'
		            },
		            {  'id'   : '9',
		  			   'img'  : '/media/images/icons/crowd-black.png',
		  			   'text' : 'Groups',
		  			   'col'  : 'yellow',
		  			   'url'  : '123'
		            },
			            
		            {  'id'   : '10',
		  			   'img'  : '/media/images/icons/add-audience.png',
		  			   'text' : 'Connections',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
	                },
	                {  'id'   : '11',
			  			   'img'  : '/media/images/icons/team/team-blk.png',
			  			   'text' : 'Teams',
			  			   'col'  : 'orange',
			  			   'url'  : '123'
		            },
		            {  'id'   : '12',
		  			   'img'  : '/media/images/icons/crowd-black.png',
		  			   'text' : 'Groups',
		  			   'col'  : 'yellow',
		  			   'url'  : '123'
		            },
		            
		            {  'id'   : '13',
		  			   'img'  : '/media/images/icons/add-audience.png',
		  			   'text' : 'Connections',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
	                },
	                {  'id'   : '14',
			  			   'img'  : '/media/images/icons/team/team-blk.png',
			  			   'text' : 'Teams',
			  			   'col'  : 'orange',
			  			   'url'  : '123'
		            },
		            {  'id'   : '15',
		  			   'img'  : '/media/images/icons/crowd-black.png',
		  			   'text' : 'Groups',
		  			   'col'  : 'yellow',
		  			   'url'  : '123'
		            },
		            {  'id'   : '16',
		  			   'img'  : '/media/images/icons/add-audience.png',
		  			   'text' : 'Connections',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
	                },
	                {  'id'   : '17',
			  			   'img'  : '/media/images/icons/team/team-blk.png',
			  			   'text' : 'Teams',
			  			   'col'  : 'orange',
			  			   'url'  : '123'
		            },
		            {  'id'   : '18',
		  			   'img'  : '/media/images/icons/crowd-black.png',
		  			   'text' : 'Groups',
		  			   'col'  : 'yellow',
		  			   'url'  : '123'
		            }
    
	  ];
	  
	  //alert("ID === " + images[0].id);
	  
//	  rightbarStart=1;
//	  rightbarEnd=3;
//	  topbarStart=4;
//	  topbarEnd=9;
//	  leftbarStart=10;
//	  leftbarEnd=12;
//	  image();  
	  
	  rightbarStart=1;
	  rightbarEnd=3;
	  topbarStart=4;
	  topbarEnd=7;
	  leftbarStart=8;
	  leftbarEnd=10;
	  image();
	  
//	  rightbarStart=0;
//	  rightbarEnd=2;
//	  topbarStart=3;
//	  topbarEnd=8;
//	  leftbarStart=9;
//	  leftbarEnd=11;
//	  image();  
	  
	$('#QUK_TOOL_ICON_ID').on('click', function() {  
	 
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
	
	
	 /*   var images = ['/media/images/icons/add-2-contaxonomy-blk.png','/media/images/icons/team/team-blk.png','/media/images/icons/crowd-black.png','/media/images/icons/add-2-contaxonomy-blk.png','/media/images/icons/team/team-blk.png','/media/images/icons/crowd-black.png',
    '/media/images/icons/add-2-contaxonomy-blk.png','/media/images/icons/team/team-blk.png','/media/images/icons/crowd-black.png','/media/images/icons/add-2-contaxonomy-blk.png','/media/images/icons/team/team-blk.png','/media/images/icons/crowd-black.png',
    '/media/images/icons/add-2-contaxonomy-blk.png','/media/images/icons/team/team-blk.png','/media/images/icons/crowd-black.png',  
    '/media/images/icons/add-2-contaxonomy-blk.png','/media/images/icons/team/team-blk.png','/media/images/icons/crowd-black.png','/media/images/icons/add-2-contaxonomy-blk.png'];
*/
 


//	var images = ['/media/images/icons/add-2-contaxonomy-blk.png'];
	 
	
   $('#left_Arrow').on('click',function() 
    {
        clearAllBars();
        leftArrow();
        image();
    });

    $('#right_Arrow').on('click', function() 
    { 
        clearAllBars();
        rightArrow();
        image();
        
    });  
	
	function clearAllBars()
	    {
	        $('#QUK_TOOL_LEFT_BAR').html("");
	        $('#QUK_TOOL_RIGHT_BAR').html("");
	        $('#QUK_TOOL_TOP_BAR').html("");
	    }
	
	function currentImage() {
        i = jQuery.inArray($('#slideshow').attr('src'), images);
        return i;

    }
 
	                       
	function image() {  
		
		var imageToAppend;
		var divContainerForImage;
		  
        for (var i =leftbarStart; i <= leftbarEnd; i++) 
        {
//            var f1_2012_image = document.createElement("IMG");
//            f1_2012_image.setAttribute("src", images[i]);
//
//            f1_2012_image.setAttribute("height", "50");
//            f1_2012_image.setAttribute("width", "50");
         
	     
	     
        	  divContainerForImage = $('<div style = "text-align: center; display: inline-block; width: 80px;"></div>');
        	  
        	  imageToAppend = $('<img>');
        	  imageToAppend.attr('width', "30");
        	  imageToAppend.attr('height', "30");
        	  imageToAppend.attr('id', images[i].id);
        	  imageToAppend.attr('src', images[i].img);
        	  imageToAppend.attr('onclick', images[i].url);
        	  
        	  divContainerForImage.append(imageToAppend);
        	  divContainerForImage.append('<span style = "display: block;  line-height:1; font-size: 12px; color:' + images[i].col +';">' + images[i].text + '</span>');
        	  

            $('#QUK_TOOL_LEFT_BAR').append(divContainerForImage);
            
           
        }
        
        for (var i = topbarEnd; i >=  topbarStart; i--) 
        {
//            var f1_2012_image = document.createElement("IMG");
//            f1_2012_image.setAttribute("src", images[i]);
//
//            f1_2012_image.setAttribute("height", "50");
//            f1_2012_image.setAttribute("width", "50");

      	  divContainerForImage = $('<div style = "text-align: center; display: inline-block; width: 80px;"></div>');
      	  
      	  imageToAppend = $('<img>');
      	  imageToAppend.attr('width', "30");
      	  imageToAppend.attr('height', "30");
      	  imageToAppend.attr('id', images[i].id);
      	  imageToAppend.attr('src', images[i].img);
      	  imageToAppend.attr('onclick', images[i].url);
      	  
      	  divContainerForImage.append(imageToAppend);
      	  divContainerForImage.append('<span style = "display: block;  line-height: 1; font-size: 12px; color:' + images[i].col +';">' + images[i].text + '</span>');

          $('#QUK_TOOL_TOP_BAR').append(divContainerForImage);

        }
          
        for (var i = rightbarEnd; i >=rightbarStart ; i--) 
        {
//            var f1_2012_image = document.createElement("IMG");
//            f1_2012_image.setAttribute("src", images[i]);
//
//            f1_2012_image.setAttribute("height", "50");
//            f1_2012_image.setAttribute("width", "50");

      	  divContainerForImage = $('<div style = "text-align: center; display: inline-block; width: 80px;"></div>');
      	  
      	  imageToAppend = $('<img>');
      	  imageToAppend.attr('width', "30");
      	  imageToAppend.attr('height', "30");
      	  imageToAppend.attr('id', images[i].id);
      	  imageToAppend.attr('src', images[i].img);
      	  imageToAppend.attr('onclick', images[i].url);
      	  
      	  divContainerForImage.append(imageToAppend);
      	  divContainerForImage.append('<span style = "display: block;   line-height: 1; font-size: 12px; color:' + images[i].col +';">' + images[i].text + '</span>');
      	  
          $('#QUK_TOOL_RIGHT_BAR').append(divContainerForImage);

            
        }

    }
	
	
// function appendToBar(content, containerBar){
//	 
//	 
// }
	                 
 function leftArrow()
  {
	   if (rightbarStart == 0 ) 
	   {
	    
	   }
	   else
	   {
	    rightbarStart--;
	    rightbarEnd--;
	    topbarStart--;
	    topbarEnd--;
	    leftbarStart--;
	    leftbarEnd--;
	   }
   }
	   
function rightArrow()  {
	
    if (leftbarEnd < images.length - 1) 
    {
    rightbarStart++;
    rightbarEnd++;
    topbarStart++;
    topbarEnd++;
    leftbarStart++;
    leftbarEnd++;
    }
    else
    {

    }
  
 }
 

});  
	

//function function1() {
//	alert("dfffffffff");
//}
 