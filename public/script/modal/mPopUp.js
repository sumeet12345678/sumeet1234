treeMenuDepth1Data = [ 
                          {
                     		"label": '1111111111111111111111',
                     		"id": '',
                     		"icon": '.png',
                     		"items": [{
                     			"label" : 'Groceries',
                     			"id" : '',
                     			"icon" : '.png'
                     		},
                     		{
                     			"label" : 'Electronics',
                     			"id" : '',
                     			"icon" : '.png'
                     		}
                     		]	 
                     	 },
                     	 {
                     		"label" : 'Alerts',
                     		"id" : '',
                     		"icon" : '.png',
                     		"items" : [{
                     			"label" : 'Banking',
                     			"id" : '',
                     			"icon" : '.png'
                     		},
                     		{
                     			"label" : 'Jobs',
                     			"id" : '',
                     			"icon" : '.png'
                     		}
                     		]	 
                     	 }
                     	 ];




var mDialogJson = [
          
			{
				  "key":"key1", "icon":"iconLink", "label":"Skills","action":"someUrl", "callback":"showSkillProfile"
			}, 
			{
				  "key":"key2", "icon":"iconLink", "label":"Education","action":"someUrl", "callback":"showEducationalProfile"
			},
			{
				  "key":"key3", "icon":"iconLink", "label":"Experience", "action":"someUrl", "callback":"showExperience"
			},
			{
				  "key":"key4", "icon":"iconLink", "label":"Recommendations", "action":"someUrl", "callback":"showRecommendations"  
			}
          
         /* {
        	  "key":"key5", "icon":"iconLink", "label":"Certificates, Awards, Recognitions", "action": "someUrl", "callback":"showCertAwardRecog"
          }
          {
        	  "key":"key5", "icon":"iconLink", "label":"Research, Papers, Patents, Indigenous Work", "action": "someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Projects", "action": "someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Interests", "action": "someUrl", "callback":"" 
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Causes, Voluntary Work", "action": "someUrl", "callback":""  
          } */
]; 

$(function(){
	
	mDialogJson.forEach(function(item) {    
		var el = $('<div>'+ item.label + '<div>');  
		//el.attr('data-dismiss','modal');  //Create seperate function later for closing modal box by passing modal id
		el.on('click', eval(item.callback));  				
		$('.mPopUpBody').append(el);	    	 
	});   
	
	  
	$('.mPopUpWrapper').css('bottom', $('#footerBarId').height());  
	//$('.modal-dialog').css('max-width', $('#profileDescription').width());
	
	
/* callBack functions implemented */
	
	function showSkillProfile(event) {
		console.log("Experience"); 
		var xhr = new XMLHttpRequest();
		
		xhr.onload = function(){
			if(xhr.status === 200){
				console.log("Status  == 200");
				$('.summary').html(xhr.responseText);
				
				updatePushZone();
			}
			else {
				console.log("Status == " + xhr.status);  
			}
		}
		
		 xhr.open('GET','/data/skills_mihika.html', true);       
		 xhr.send(null);
		 // loads the content of the push zone
		 loadPushZone();    
	}
	
	
	
	function showEducationalProfile(event){
		var xhr = new XMLHttpRequest();
		  
		xhr.onload = function(){
			if(xhr.status === 200){
				console.log("Status  == 200");
				$('.summary').html(xhr.responseText);
				updatePushZone();
			}
			else {
				console.log("Status == " + xhr.status);  
			}
			 
		}
		
		 //xhr.open('GET','http://localhost:3000/data/education_mihika.html', true);
		xhr.open('GET','/data/education_mihika.html', true);
		 xhr.send(null);
		 loadPushZone();
	}
	
	function showExperience(event){
		console.log("Experience");
		var xhr = new XMLHttpRequest();
		
		xhr.onload = function(){
			if(xhr.status === 200){
				console.log("Status  == 200");
				$('.summary').html(xhr.responseText);
				updatePushZone();
			}
			else {
				console.log("Stauts == " + xhr.status);  
			}
		}
		
		 xhr.open('GET','/data/experience_mihika.html', true);  
		 xhr.send(null);
		 loadPushZone();
		 
		// $('.modal-dialog').css('display','none');
	}
	
	function showRecommendations(event) {   
		console.log("Experience");
		var xhr = new XMLHttpRequest();
		
		xhr.onload = function(){
			if(xhr.status === 200){
				console.log("Status  == 200");
				//$('.summary').html(xhr.responseText);
				
				updatePushZone();  
			}
			else {
				console.log("Status == " + xhr.status);  
			}
		}
		
		 xhr.open('GET','/data/skills_mihika.html', true);       
		 xhr.send(null);
		 // loads the content of the push zone
		 loadPushZone();
		
	}	
	

	/*updates push zone*/  
	
	function loadPushZone(){
		
		var content = '<img id="offersIcon" height="17" width="17" class="pull-left" style="margin-right: 10px; margin-top: -2px" src="/media/images/icons/loading.gif" />' +
				'<div style="display:inline-block; color: #77933C;"> Working on your action.. </div>';
		
		// $('.top-push-zone .pushContainer #leftBlock #offersIcon').attr('src','/media/images/icons/loading.gif');  
		 //$('.top-push-zone .pushContainer #leftBlock').append("Working on your action..");
			//
		   $('.top-push-zone .pushContainer').addClass("pushZoneActionMessage");   
		   $('.top-push-zone .pushContainer #leftBlock').html(content); 
		
	}
	
	function updatePushZone(){      
		/*delay inserted for test purpose only */  
		setTimeout(function(){
			var pushContent = '<img id="offersIcon" height="17" width="17" class="pull-left" style="margin-right: 10px; margin-top:-2px" src="/media/images/icons/offers.png" />' + 
				'<div style="display:inline-block;"> 3578/- of referrals, 29317/- of discounts.. <span class="blue-on-top-of-earth-color arrow-link">&gt;&gt;</span></div>';
			
			$('.top-push-zone .pushContainer #leftBlock').html(pushContent);
			$('.top-push-zone .pushContainer').removeClass("pushZoneActionMessage");
				
			},1000);
		
		closeMpopUp();      
			
	}
	 
	//	
	var iconClicked123;
	
	
	$('#sunIcon').on('click', treeMenuDepth1);
	
	
	
	/**$('#sunIcon').on('click', function(event) {
		
		//hideAllPopUpMenus(); //common function for hiding all popups
		
		if(globalSunModalContext == "profile") {
			//alert("in mpopUp.js == " +  globalSunModalContext);  
			   
			//$("#sunIcon").attr("class", "aakBoxContext");
			
			
		    iconClicked123 = event.target;    
		    var $popUpWrapper = $('.mPopUpWrapper');  
			var $footerBarHeight = $('#footerBarId').height();      			 
			$popUpWrapper.css('bottom', $footerBarHeight);          
			//$popUpWrapper.toggleClass('visible');
			 
			//$popUpWrapper.toggle();
			
			
			
			
			//$popUpWrapper.removeClass('popUp');
			hideAllPopUpMenus($popUpWrapper);///////////////////////////////////////
			
			 
			
			//Get height for the viewport and substract header and footer height to get the required height for mobile devices
		}  
		else if(globalSunModalContext == "aakBox"){
			generateAakInboxPop();
			    
			}
			
		}); */
	  
	
	//Closes the dialog box after upadation of push zone  
	function closeMpopUp(){
		$('.mPopUpWrapper').removeClass('visible');        
	}  
	
//	 
	 
	
//	var mPopUp = document.getElementById('M_POPUP_WRAPPER_ID');        
	//window.onclick = function(event) {  
	//	alert("Name ===  ytrrrrr" + event.target.id);
//		 console.log("TARGET === " + $.contains(mPopUp, event.target));          
//		
//		    if (!((event.target == mPopUp) || ( $.contains(mPopUp, event.target)) || (event.target == iconClicked123))) {  
//		    	//alert("Inside...")
//		    	//closeMpopUp();
//		    	$('.mPopUpWrapper').removeClass('visible');      
//		    }  
//		    
	//}
	 
});
