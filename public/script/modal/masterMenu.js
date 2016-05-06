$(function() {
	
	var masterMenu = $('#MASTER_MENU');
	var masterMenuIcon = $('#MASTER_MENU_ICON');
	var masterMenuMinIcon = $('#MASTER_MENU_MIN_ICON');
	
	masterMenu.css('height', SCREEN_HEIGHT_GLOBAL);
	
	masterMenuIcon.on('click', function(){
		toggleMasterMenuDisplay();
	});
	
	masterMenuMinIcon.on('click', function() {
		toggleMasterMenuDisplay();
	});
	
	
	function toggleMasterMenuDisplay() {
		masterMenu.toggle();
	}
	
});SCREEN_HEIGHT_GLOBAL