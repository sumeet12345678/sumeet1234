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
          },
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
		el.attr('data-dismiss','modal');  //Create seperate function later for closing modal box by passing modal id
		el.on('click', eval(item.callback));  				
		$('.modal-body').append(el);		 
	}); //Main function ends
	
	
	$('.modal-dialog').css('bottom', $('#footerBarId').height());
	$('.modal-dialog').css('max-width', $('#profileDescription').width());
	
	function showSkillProfile(event){
		console.log("Experience");
		var xhr = new XMLHttpRequest();
		
		xhr.onload = function(){
			if(xhr.status === 200){
				console.log("Status  == 200");
				$('.summary').html(xhr.responseText);
				
				$('.top-push-zone .pushContainer #leftBlock #offersIcon').attr('src','/media/images/icons/offers.png');  
			//	$('#myModal').modal('hide');
			}
			else {
				console.log("Status == " + xhr.status);
			}
		}
		
		 xhr.open('GET','/data/skills_mihika.html', true);   
		 xhr.send(null);
		 // loads the content of the push zone
		 $('.top-push-zone .pushContainer #leftBlock #offersIcon').attr('src','/media/images/icons/loading.gif');
		 
		 
	}
	
	
	
	function showEducationalProfile(event){
		var xhr = new XMLHttpRequest();
		  
		xhr.onload = function(){
			if(xhr.status === 200){
				console.log("Status  == 200");
				$('.summary').html(xhr.responseText);
			}
			 
		}
		
		 //xhr.open('GET','http://localhost:3000/data/education_mihika.html', true);
		xhr.open('GET','/data/education_mihika.html', true);
		 xhr.send(null);
	}
	
	function showExperience(event){
		console.log("Experience");
		var xhr = new XMLHttpRequest();
		
		xhr.onload = function(){
			if(xhr.status === 200){
				console.log("Status  == 200");
				$('.summary').html(xhr.responseText);
			}
			else {
				console.log("Stauts == " + xhr.status);
			}
		}
		
		 xhr.open('GET','/data/experience_mihika.html', true);  
		 xhr.send(null);
		 
		// $('.modal-dialog').css('display','none');
	}
	
	function showRecommendations(event){
		 	}	
	
	function loadPushZoneContents(){
		
	}
});
