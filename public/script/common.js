  
	var globalSunModalContext = "profile";  
	var CENTER_REGION_HEIGHT = getCenterScreenLayoutHeight();
	var FOOTER_BAR_HEIGHT = getFooterBarHeight();  
	var SCREEN_HEIGHT_GLOBAL = screen.height;
	var TOP_MENU_BAR_HEIGHT = getTopMenuBarHeight();
	
	//alert(" -----"  + CENTER_REGION_HEIGHT);  
	//alert(" ----ttt-"  + TOP_MENU_BAR_HEIGHT);
	var _g_blurScreen;
   

 
var GLOBAL_POP_UP_ARRAY_LIST = ["plus", "AKK_OPTIONS_POPUP_ID", "sunIcon"," QUK_TOOL_ICON_ID", "imgProfilePhoto"]; //not necessary

/* hides or displays sun icon */
function showHideD360Icon(d360) {
       if(d360) {
    	   $('#d360').css({'visibility':'visible'});    
       } 
}
 
function showHideFooterSearch(display) {  
	if(!display) {
		 $('#FOOTER_SEARCH').hide();    
	}
}

function getCenterScreenLayoutHeight() {
	//var $viewPortHeight = $(window).height();screen.height;     
	var $viewPortHeight = screen.height;     
	var $footerBarHeight = getFooterBarHeight();
	var $topMenuBarHeight = getTopMenuBarHeight();      
	 
	var $centerScreenSize =  $viewPortHeight - ($footerBarHeight + $topMenuBarHeight);   
	
	return $centerScreenSize;  
} 

function getTopMenuBarHeight() {
	var $topMenuBarHeight = $('.top-menubar').outerHeight(); 
	return $topMenuBarHeight;
}
        
function getFooterBarHeight() {
	return  $('#footerBarId').outerHeight();    
}


function getScreenWindowTotalHeight(){
	return screen.height;
}


/* ALL POPUP'S ARRAY */
function hideAllPopUpMenus(displayPopUp) { 
	 
	displayPopUp.removeClass('popUp');
	$('.popUp').hide();
	displayPopUp.toggle();
	displayPopUp.addClass('popUp');
}


function treeMenuDepth_1(container) {
	
}

/* toggle bar*/
function showHideDownSibling(whose) {
	//alert("Src == " + whose.attr('src'));
	whose.parent().siblings().toggle();
	
 	 if( whose.attr('src') ==  '/media/images/icons/arrowUpLines.png' ) { 
 		whose.attr('src', '/media/images/icons/arrow-Down-lines.png');
 	 }
 	 else {
 		whose.attr('src', '/media/images/icons/arrowUpLines.png');
 		 
 	 }
}

/* toggle big section */
function showHideDownSiblingForBigSection(whose) {
	whose.siblings().toggle();
}


function blurScreen() {
	 
	if(!_g_blurScreen){
		 
		_g_blurScreen = $('<div style = "width: 100%; height: 100%; background-color: #000;"></div>');
		 
		_g_blurScreen.appendTo('body');
		
	} 
	
	_g_blurScreen.show();
}   

function unBlurScreen() {
	_g_blurScreen.hide();  
}

/* For adding header bar to all pages */
function initHeaderBar(title, headerBar, headerBarJsonData) {   
	//alert("hello");
	var closeBtn = $('<div style = "display: inline-block; position:absolute; font-weight: bold; font-size: 14px; top:0; left:0;">X</div>');
	//headerBar.append(closeBtn);
	headerBar.append('<b>' + title + '</b>');    
	
	var menuDropDownDiv = $('<div class = "menu-drop-down-icon" style = "display:inline-block; height: 30px; top: 0; position: absolute; right: 0;"></div>'); 
	var menuDropDownImgIcon = $('<img src = "/media/images/icons/plainblack/3lines-thin-menu-blk.png" width = 30px; height = 30px;" />');
	menuDropDownDiv.append(menuDropDownImgIcon);

	/* append images(menu items) to menu items container */
	var menuItemsContainer = $('<div class = "cmn_mnu_itm_cntnr" style = "background-color : #FFF ; display: none; position: absolute; right: 0;border: 2px solid #dcdcdc;"></div>');
	 
	
	var menuItemsHtmlString  = "";
	
	for(var i = 0; i < headerBarJsonData.length; i++) {
		menuItemsHtmlString = '<div class = "img-with-caption-common" data-url-value = ' +  headerBarJsonData[i].url  + '>';
		//console.log("url value == " + headerBarJsonData[i].url);
		menuItemsHtmlString = menuItemsHtmlString + '<img style = "cursor: pointer;"  width="28" height="28" src="' + headerBarJsonData[i].img +  '" />';   
		menuItemsHtmlString = menuItemsHtmlString +  '<span class = "img-caption"><b>Opportunities</b></span>' + '</div>';
		
		menuItemsContainer.append($(menuItemsHtmlString));  
	}
	   	
  
	
/*	
	<div class = "img-with-caption-common">
		<img   width="28" height="28" src="/media/images/icons/plainblack/opportunities-blk.png" />
	    <span class = "img-caption" style = ""><b>Opportunities</b></span>  
    </div>  
*/	
	
	
	
	
	//menuDropDownDiv.append(menuItemsContainer);
	headerBar.append(menuItemsContainer);
//	var menuDropDownDiv = "<div>" +
//						'<div class = "img-with-caption-common"><img   width="28" height="28" src="/media/images/icons/plainblack/talks-trending-blk.png" /><span class = "img-caption"><b>Trending</b></span></div> ' + "</div>";  
	headerBar.append(menuDropDownDiv);
	headerBar.show();
	
	
}


/* aligns menu bar item with equal spacing,  currently for images with caption. Make it generic */
function alignMenuBarItems() {
	 var $menuBar = $('#TEAM_HOME_MENU_BAR');
	 var menuBarWidth = $menuBar.width();
	 var menuItemWidth = $('.img-with-caption-common').width();
	// alert("Menu right == " + menuItem.width());
	 var noOfMenuItems = $menuBar.find('.img-with-caption-common').length;
	 var avlbleSpace =  menuBarWidth - (noOfMenuItems * menuItemWidth);
	 console.log("Total width = " + menuBarWidth  + "    Total Free space == " + avlbleSpace + "  noOfMenuItems == " + noOfMenuItems);
	 var imgMarginRight =  avlbleSpace / (noOfMenuItems - 1)-4; // -5 should be removed, jst given a discrete value
	 if(imgMarginRight <= 0) {
		 imgMarginRight = 0;
	 }
	 console.log("Margin-right ===  " + imgMarginRight);
	 //alert("Total images === " + noOfMenuItemImages);  li:not(:last-child)
	 $menuBar.find('.img-with-caption-common:not(:last-child)').css('margin-right', imgMarginRight); 
	 
}


//function getDeviceType() {
	
//	var device_width = screen.width;
	
	//if(device_width) {
	// section_title
	//}
//}

//window.onclick = function(event) {
//////	alert("Event target Id ===   " + event.target.id);
////	GLOBAL_POP_UP_ARRAY_LIST.forEach(function(menuId) {
////		if(event.target.id === menuId){
////			$("#" + menuId).toggle();
////		}
////		else {
////			$("#" + menuId).hide();
//	alert("inside window onClick");
//	//$('.popUp').hide();
// 	}
////	});
////}




 