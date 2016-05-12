$(function() {  
	
	var masterMenu = $('#MASTER_MENU');
	var masterMenuIcon = $('#MASTER_MENU_ICON');
	var masterMenuMinIcon = $('#MASTER_MENU_MIN_ICON');
	//var expandIcon = $('.expandIcon');
	var masterMenuToggleBar = $('.master-menu-content-toggleBar');
	
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
		element.children('.barTitle').toggleClass('green-text');
		//element.toggleClass('green-toggle-bar');
		element.toggleClass('earth-gradient-bg')
		//element.css('background-color', '#91B535');
	});
	
	$('#MASTER_MENU_PROFILE_ICON').on('click', function() {
		$('#MASTER_MENU_BANNER').css('display','block');
		$('#MASTER_MENU_CONTENT').css('display','none');
	});
	
	$('#MASTER_MENU_QUESTION_ICON').on('click', function() {
		$('#MASTER_MENU_BANNER').css('display','none');
		$('#MASTER_MENU_CONTENT').css('display','block');
	});
	
	
	
	function toggleMasterMenuDisplay() {
		masterMenu.toggle();
	}
	
});   