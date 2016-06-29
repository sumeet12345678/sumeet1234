 
function onEscapeHide( element ){
	element.hide();	
}

$(document).keydown(function(e) {
   // if (e.keyCode == 65 && e.ctrlKey) {
	   if (e.which == 87 && e.altKey) {  //w = 87
		   
		  $('#plus').trigger('click');//
		  $('.composerWrapper').focus();
	   }
	   
	   if (e.keyCode == 80 && e.altKey) {        //p =  87
		   $('#MSG_COMPOSER_TO').trigger('click');//
		} 
}); 

$('#CONTAXONOMY_MODAL').keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
    	onEscapeHide($(this));
    }
});	

$('.composerWrapper').keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
    	onEscapeHide($(this));
    }
});


$('.contagxonomy-ak-composer-title-bar-tab').on('focus', function(){
	 $(this).find('div').trigger('click');
});
