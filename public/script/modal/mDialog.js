var mDialogJson = [
          {
        	  "key":"key1", "icon":"iconLink", "label":"Skills","action":"someUrl", "callback":""
          }, 
          {
        	  "key":"key2", "icon":"iconLink", "label":"Education","action":"someUrl", "callback":""
          },
          {
        	  "key":"key3", "icon":"iconLink", "label":"Experience", "action":"someUrl", "callback":""
          },
          {
        	  "key":"key4", "icon":"iconLink", "label":"Recommendations", "action":"someUrl", "callback":""
          },
          {
        	  "key":"key5", "icon":"iconLink", "label":"Certificates, Awards, Recognitions", "action": "someUrl", "callback":""
          },
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
          }
]; 

$(function(){
	//$('.modal-body').append('<p>BLa blab bla<p>');
	
	mDialogJson.forEach(function(element){
		$('.modal-body').append('<div>'+element.label + '<div>');
		//$('.modal-body').append('<p>BLa blab bla<p>');
		//console.log(element.label);
	});
	
	$('.modal-dialog').css('bottom', $('#footerBarId').height());
	
//	$('#d360').on('click', function(){
//		var height = $(window).height() - ($('#footerBarId').height() + $('.modal-dialog').height()); 
//		alert("Window == "+ $(window).height());
	//alert("Footer ==" + $('#footerBarId').height());
//		alert("Dialog ==" + $('.modal-content').height());
//	});
	
	
	
});
