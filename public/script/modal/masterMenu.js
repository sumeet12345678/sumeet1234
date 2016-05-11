$(function() {  
	
	var masterMenu = $('#MASTER_MENU');
	var masterMenuIcon = $('#MASTER_MENU_ICON');
	var masterMenuMinIcon = $('#MASTER_MENU_MIN_ICON');
	//var expandIcon = $('.expandIcon');
	var masterMenuToggleBar = $('.masterMenuToggleBar');
	
	masterMenu.css('height', SCREEN_HEIGHT_GLOBAL);
	
	/* SHOW/HIDES MASTER MENU */   
	masterMenuIcon.on('click', function(){
		toggleMasterMenuDisplay();
	});
	
	masterMenuMinIcon.on('click', function() {
		toggleMasterMenuDisplay();
		
	});
	
	
	/* EXPANDING THE ICON */
	masterMenuToggleBar.on('click', function() {
		var element = $(this);
		element.siblings('.masterMenuOptions').toggle();
		element.children('.expandIcon').toggle();
		//$(this).css('color', '#fff');
		element.toggleClass('white-text');
		element.toggleClass('green-toggle-bar');
		//element.css('background-color', '#91B535');
	});
	
	
	
	
	
	
	
	function toggleMasterMenuDisplay() {
		masterMenu.toggle();
	}
	
});   