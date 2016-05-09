$(function() {
	
	var masterMenu = $('#MASTER_MENU');
	var masterMenuIcon = $('#MASTER_MENU_ICON');
	var masterMenuMinIcon = $('#MASTER_MENU_MIN_ICON');
	//var expandIcon = $('.expandIcon');
	var toggleBar = $('.toggleBar');
	
	masterMenu.css('height', SCREEN_HEIGHT_GLOBAL);
	
	/* SHOW/HIDES MASTER MENU */ 
	masterMenuIcon.on('click', function(){
		toggleMasterMenuDisplay();
	});
	
	masterMenuMinIcon.on('click', function() {
		toggleMasterMenuDisplay();
	});
	
	
	/* EXPANDING THE ICON */
	toggleBar.on('click', function() {
		$(this).siblings('.masterMenuOptions').toggle();
	});
	
	
	
	
	
	
	
	function toggleMasterMenuDisplay() {
		masterMenu.toggle();
	}
	
});   