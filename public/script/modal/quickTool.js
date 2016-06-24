

$(function() {
	  var qukToolVisible=false;
	  
	  var images = [
	                {  'id'   : '1',
			  			   'img'  : '/media/images/icons/add-audience.png',
			  			   'text' : 'Connections',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '/classifieds'
		            },
		                
					{  'id'   : '1',
						   'img'  : '/media/images/icons/plainblack/opportunities-blk.png',
						   'text' : 'Opportunities',
						   'col'  : '#dcdcdc',
						   'url'  : '/career_opportunities'
					},
					{  'id'   : '2',
							   'img'  : '/media/images/icons/plainblack/preferences-blk.png',
							   'text' : 'Preferences',
							   'col'  : '#dcdcdc',
							   'url'  : '/career_preferences'
					}, 
				 	 
	               
	                {  'id'   : '2',
			  			   'img'  : '/media/images/icons/banknotes-white.png',
			  			   'text' : 'My Money',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
		            },
		            {  'id'   : '3',
		  			   'img'  : '/media/images/icons/experience-white.png',
		  			   'text' : 'Jobs',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '/careerHome'
		            },
		            {  'id'   : '4',
		  			   'img'  : '/media/images/icons/statoscope-white.png',
		  			   'text' : 'My Health',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
			        },
			        {  'id'   : '5',
		  			   'img'  : '/media/images/icons/leisure_white.png',  
		  			   'text' : 'Travel',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
			        },
			        {  'id'   : '5',
			  			'img'  : '/media/images/icons/dine-white.png',
		  			   'text' : 'Food',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
			        },
			        {  'id'   : '5',
		  			   'img'  : '/media/images/icons/weighing-mc.png',
		  			   'text' : 'Legal',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
				     },
				     {  'id'   : '5',
			  			   'img'  : '/media/images/icons/relationships_white.png',
		  			   'text' : 'Family',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
			        },
			        {  'id'   : '5',
			  			   'img'  : '/media/images/icons/school-white.png',
		  			   'text' : 'Education',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
			        },
			        {  'id'   : '5',
			  			   'img'  : '/media/images/icons/thumbs-up-white.png',
		  			   'text' : 'Grow',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
			        },
			        {  'id'   : '5',
			  			   'img'  : '/media/images/icons/bulb-enlightenment-white.png',
		  			   'text' : 'Causes',
		  			   'col'  : '#dcdcdc',
		  			   'url'  : '123'
			        },
			        
			        {  'id'   : '1',
			  			   'img'  : '/media/images/icons/add-audience.png',
			  			   'text' : 'Connections',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
		                },
		                {  'id'   : '2',
				  			   'img'  : '/media/images/icons/banknotes-white.png',
				  			   'text' : 'My Money',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '123'
			            },
			            {  'id'   : '3',
			  			   'img'  : '/media/images/icons/experience-white.png',
			  			   'text' : 'Jobs',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '/careerHome'
			            },
			            {  'id'   : '4',
			  			   'img'  : '/media/images/icons/statoscope-white.png',
			  			   'text' : 'My Health',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
				        },
				        {  'id'   : '5',
			  			   'img'  : '/media/images/icons/leisure_white.png',  
			  			   'text' : 'Travel',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
				        },
				        {  'id'   : '5',
				  			'img'  : '/media/images/icons/dine-white.png',
			  			   'text' : 'Food',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
				        },
				        {  'id'   : '5',
			  			   'img'  : '/media/images/icons/weighing-mc.png',
			  			   'text' : 'Legal',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
					     },
					     {  'id'   : '5',
				  			   'img'  : '/media/images/icons/relationships_white.png',
			  			   'text' : 'Family',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
				        },
				        {  'id'   : '5',
				  			   'img'  : '/media/images/icons/school-white.png',
			  			   'text' : 'Education',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
				        },
				        {  'id'   : '5',
				  			   'img'  : '/media/images/icons/thumbs-up-white.png',
			  			   'text' : 'Grow',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
				        },
				        {  'id'   : '5',
				  			   'img'  : '/media/images/icons/bulb-enlightenment-white.png',
			  			   'text' : 'Causes',
			  			   'col'  : '#dcdcdc',
			  			   'url'  : '123'
				        },
				        
				        {  'id'   : '1',
				  			   'img'  : '/media/images/icons/add-audience.png',
				  			   'text' : 'Connections',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '123'
			                },
			                {  'id'   : '2',
					  			   'img'  : '/media/images/icons/banknotes-white.png',
					  			   'text' : 'My Money',
					  			   'col'  : '#dcdcdc',
					  			   'url'  : '123'
				            },
				            {  'id'   : '3',
				  			   'img'  : '/media/images/icons/experience-white.png',
				  			   'text' : 'Jobs',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '/careerHome'
				            },
				            {  'id'   : '4',
				  			   'img'  : '/media/images/icons/statoscope-white.png',
				  			   'text' : 'My Health',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '123'
					        },
					        {  'id'   : '5',
				  			   'img'  : '/media/images/icons/leisure_white.png',  
				  			   'text' : 'Travel',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '123'
					        },
					        {  'id'   : '5',
					  			'img'  : '/media/images/icons/dine-white.png',
				  			   'text' : 'Food',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '123'
					        },
					        {  'id'   : '5',
				  			   'img'  : '/media/images/icons/weighing-mc.png',
				  			   'text' : 'Legal',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '123' 
						     },
						     {  'id'   : '5',
					  			   'img'  : '/media/images/icons/relationships_white.png',
				  			   'text' : 'Family',
				  			   'col'  : '#dcdcdc', 
				  			   'url'  : '123'
					        },
					        {  'id'   : '5',
					  			   'img'  : '/media/images/icons/school-white.png',
				  			   'text' : 'Teams',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '/teamsHome'
					        },
					        {  'id'   : '5',
					  			   'img'  : '/media/images/icons/thumbs-up-white.png',
				  			   'text' : 'Teams',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '/teamsHome'
					        },
					        {  'id'   : '5',
					  			'img'  : '/media/images/icons/bulb-enlightenment-white.png',
				  			   'text' : 'Teams',
				  			   'col'  : '#dcdcdc',
				  			   'url'  : '/teamsHome'
					        }
			        
		            
	  ];
	  
	  //alert("ID === " + images[0].id);
	  
	var	  rightbarStart=0
	var	  rightbarEnd=0;
	var	  topbarStart=0;
	var   topbarEnd=0;
	var   leftbarStart=0;
	var   leftbarEnd=0;
	
	var   bottomBarStart = 0;
	var   bottomBarEnd = 0;
  
	  
	
	function setBarsPositionVariables() {
		 /* DECIDE THESE VALUES BASED ON DEVICE SIZE */
		  rightbarStart=1;
		  
		  //rightbarEnd=3; //End value auto generated
		  //height [.height()] of right bar(400)/42 + 5 + 5  = 7.6 = rounded to lowest = 7 i.e, rightBarEnd = 7  and topBarStart =  rightBarEnd + 1
		  // after getting each bar size, check if the bar is consuming entire json image data. If it is, then check the next bar's variable setting.
		  var rightBarHeight = $('#QUK_TOOL_RIGHT_BAR').height();
		  rightbarEnd = Math.floor(rightBarHeight/92); // height of image with container and top and bottom margin,  42+25+25 = 92 , 42 = width of left bar,  margin-top and bottom both 15px.
		  
		 
		  
		  //topbarStart=4;
		  topbarStart= rightbarEnd + 1;
		  //  auto generate topbarEnd
		 // topbarEnd=7;
		  var topBarWidth = $('#QUK_TOOL_TOP_BAR').width(); 
		  topbarEnd = topbarStart +  Math.floor(topBarWidth/110) -1; //80+15+15 = 110, left and right margin both 25px
		  //alert('topbarEnd == ' +  topBarWidth);
		  
		  
		 // leftbarStart=8;
		  leftbarStart= topbarEnd + 1;
		  var leftBarHeight = $('#QUK_TOOL_LEFT_BAR').height();
		  leftbarEnd = leftbarStart + Math.floor(leftBarHeight/92)-1; // 42+25+25 = 92 , 42 = width of left bar,  margin-top and bottom both 25px.
		  
		  console.log("rightBarStart == " + rightbarStart + "  rightbarEnd == " + rightbarEnd + "  topbarStart == " + topbarStart + "  topbarEnd == " + topbarEnd + "  leftbarStart==" + leftbarStart + "  leftbarEnd==" + leftbarEnd );
		  
		//  leftbarEnd=10;
		 
	}
	 
	 
	  
//	  rightbarStart=0;
//	  rightbarEnd=2;
//	  topbarStart=3;
//	  topbarEnd=8;
//	  leftbarStart=9;
//	  leftbarEnd=11;
//	  image();  
	  
	 
	  
	$('#QUK_TOOL_ICON_ID').on('click', function() {    
		 clearAllBars();
		 setWidthOfLeftandRightBar();  	 
		 setBarsPositionVariables();
		 image();  
	});   
	
	function setWidthOfLeftandRightBar() {
		//Set height of quk_tool,  and set left and right bar's width equal to top bar
		var $viewPortHeight = $(window).height();     
		var $footerBarHeight = $('#footerBarId').height();       
		
		var $topBar = $('#QUK_TOOL_TOP_BAR');
		var $bottomBar = $('#QUK_TOOL_BOTTOM_BAR'); 
		var $leftBar = $('#QUK_TOOL_LEFT_BAR');
		var $rightBar = $('#QUK_TOOL_RIGHT_BAR');  
		
		$leftBar.css('height', $viewPortHeight - (90 + $footerBarHeight)); // 90 = 45 + 45 for top bar and left bar
		$rightBar.css('height', $viewPortHeight - (90 + $footerBarHeight)); // 90 = 45 + 45 for top bar and left bar
		$bottomBar.css('bottom',  $footerBarHeight); 
		  
		$leftBar.toggle();    
		$rightBar.toggle();
		$bottomBar.toggle();
		$topBar.toggle();  
	  
	};
	
	 
	
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
		var aTag;
		  
        for (var i =leftbarStart; i <= leftbarEnd; i++) 
        {
//            var f1_2012_image = document.createElement("IMG");
//            f1_2012_image.setAttribute("src", images[i]);
//
//            f1_2012_image.setAttribute("height", "50");
//            f1_2012_image.setAttribute("width", "50");
         
	     
	     
        	  divContainerForImage = $('<div class = "quk-tool-img-caption-container" style = "text-align: center; display: inline-block; width: 80px; height: 42px;"></div>');
        	  aTag = $('<a href ="' + images[i].url + '"></a>');
        	  
        	  imageToAppend = $('<img>');
        	  imageToAppend.attr('width', "30");
        	  imageToAppend.attr('height', "30");
        	  imageToAppend.attr('id', images[i].id);
        	  imageToAppend.attr('src', images[i].img);
        	  imageToAppend.attr('onclick', images[i].url);
        	  
        	  aTag.append(imageToAppend);
        	  
        	  divContainerForImage.append(aTag);
        	  divContainerForImage.append('<span style = "display: block;  margin-top: 8px; font-size: 12px; font-weight: bold; color:' + images[i].col +';">' + images[i].text + '</span>');
        	  

            $('#QUK_TOOL_LEFT_BAR').append(divContainerForImage);
            
           
        }
        
        for (var i = topbarEnd; i >=  topbarStart; i--) 
        {
//            var f1_2012_image = document.createElement("IMG");
//            f1_2012_image.setAttribute("src", images[i]);
//
//            f1_2012_image.setAttribute("height", "50");
//            f1_2012_image.setAttribute("width", "50"); 
 
      	  divContainerForImage = $('<div  class = "quk-tool-img-caption-container" style = "text-align: center; display: inline-block; width: 80px;height: 42px;"></div>');
      	  aTag = $('<a href ="' + images[i].url + '"></a>');
      	  
      	  imageToAppend = $('<img>');
      	  imageToAppend.attr('width', "30");
      	  imageToAppend.attr('height', "30");
      	  imageToAppend.attr('id', images[i].id);
      	  imageToAppend.attr('src', images[i].img);
      	  imageToAppend.attr('onclick', images[i].url);
      	  
      	  aTag.append(imageToAppend);
      	 
      	  divContainerForImage.append(aTag);
      	  divContainerForImage.append('<span style = "display: block;   margin-top: 8px; font-size: 12px; font-weight: bold; color:' + images[i].col +';">' + images[i].text + '</span>');

          $('#QUK_TOOL_TOP_BAR').append(divContainerForImage);

        }
          
        for (var i = rightbarEnd; i >=rightbarStart ; i--) 
        {
//            var f1_2012_image = document.createElement("IMG");
//            f1_2012_image.setAttribute("src", images[i]);
//
//            f1_2012_image.setAttribute("height", "50");
//            f1_2012_image.setAttribute("width", "50");
        	
        	//appendToBar(index, content, containerBar);  

      	  divContainerForImage = $('<div  class = "quk-tool-img-caption-container" style = "text-align: center; display: inline-block; width: 80px; height: 42px;"></div>');
      	  aTag = $('<a href ="' + images[i].url + '"></a>');
      	 
      	  imageToAppend = $('<img>');
      	  imageToAppend.attr('width', "30");  
      	  imageToAppend.attr('height', "30");
      	  imageToAppend.attr('id', images[i].id);
      	  imageToAppend.attr('src', images[i].img);
      	  imageToAppend.attr('onclick', images[i].url);
      	  
      	  aTag.append(imageToAppend);
      	 
      	  divContainerForImage.append(aTag);
      	  divContainerForImage.append('<span style = "display: block;    margin-top: 8px; font-size: 12px; font-weight: bold; color:' + images[i].col +';">' + images[i].text + '</span>');
      	  
          $('#QUK_TOOL_RIGHT_BAR').append(divContainerForImage);

            
        }

    }
	
	
 function appendToBar(index, content, containerBar){
	 
	 
 }
	                 
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
 