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
			
				//$('.top-push-zone .pushContainer #leftBlock #offersIcon').attr('src','/media/images/icons/offers.png');
				//$('.top-push-zone .pushContainer #leftBlock').append($pushContent);
			$('.top-push-zone .pushContainer #leftBlock').html(pushContent);
			 $('.top-push-zone .pushContainer').removeClass("pushZoneActionMessage");
				
			},1000);
		 
	}