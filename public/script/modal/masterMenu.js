$(function() {  
	
	var masterMenu = $('#MASTER_MENU');
	var masterMenuIcon = $('#MASTER_MENU_ICON');
	var masterMenuMinIcon = $('#MASTER_MENU_MIN_ICON');
	var masterMenuToggleBar = $('.master-menu-content-toggleBar');
	var masterMenuBanner = $('#MASTER_MENU_BANNER');
	var masterMenuContent = 	$('#MASTER_MENU_CONTENT');
	
	masterMenu.css('height', SCREEN_HEIGHT_GLOBAL);
	
	/*
	 *  SHOW/HIDES MASTER MENU 
	*/   
	masterMenuIcon.on('click', function() {
		toggleMasterMenuDisplay();
	});
	
	masterMenuMinIcon.on('click', function() {
		toggleMasterMenuDisplay();
	});
	
	
	/* 
	 *  EXPANDING THE ICON 
	*/
	masterMenuToggleBar.on('click', function() {
		var element = $(this);
		element.siblings('.masterMenuOptions').toggle();
		element.children('.expandIcon').toggle();
		element.children('.barTitle').toggleClass('green-text');
		element.toggleClass('earth-gradient-bg');
	});
	
	$('#MASTER_MENU_PROFILE_ICON').on('click', function() {
		masterMenuBanner.css('display','block');
		masterMenuContent.css('display','none');
	});
	
	$('#MASTER_MENU_QUESTION_ICON').on('click', function() {
		masterMenuBanner.css('display','none');
		masterMenuContent.css('display','block');
	});
	
	function toggleMasterMenuDisplay() {
		masterMenu.toggle();
	}
	
});   