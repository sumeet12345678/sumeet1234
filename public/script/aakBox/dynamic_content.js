function viewUpdateList(string) {
   
	var text = '{ "messages":['+
				'{"url": "/media/images/aakBox/image1.jpg", "name": "Shraddha", "message": "I think I am liking you.", "date": "1 April" },'+
				'{"url": "/media/images/aakBox/image2.jpg", "name": "Unknown", "message": "Hey there.", "date": "2 March" },'+
				'{"url": "/media/images/aakBox/Katrina.jpg", "name/media/images/aakBox/": "Katrina", "message": "", "date": "28 February" },'+
				'{"url": "/media/images/aakBox/Kareena.jpg", "name": "Kareena","message": "Look- I am up for a commitment.... Keep it with you.","date": "1 March" }]}';

	var data = JSON.parse(text),
		doc = document,
		ul = doc.getElementById("message-block"),
		ul1 = doc.getElementById("categoryDisplay"),  
		str = string;

		str = str = str.replace(/[_]/g, " ");  
	//alert(str);
	var length = data.messages.length;
	//alert(length);
	ul.innerHTML = '';
	ul1.innerHTML = " > " + str;
	for(var i=0; i<length; i++) {
		var outerDiv = doc.createElement('div'), 
			innerDiv1 = doc.createElement('div'), 
			innerDiv2 = doc.createElement('div'),
			innerDiv3 = doc.createElement('div'),
			image= doc.createElement('img'),
			name = doc.createElement('h5'),
			paragraph = doc.createElement('p'),
			date = doc.createElement('span'),
			horizontalLine = doc.createElement('hr'),        
			hyperLink = doc.createElement('a');        //Amar  
		
		hyperLink.setAttribute("href", "/profile/view/mahika");   //Amar
		
		outerDiv.className = 'row';
		
		outerDiv.style.margin = "7px 0px 7px 0px";
		//outerDiv.style.bottom = "5px;";
		
		innerDiv1.className = 'col-xs-2';  innerDiv1.style.padding="0px 3px 0px 3px";   
		innerDiv2.className = 'col-xs-7'; innerDiv2.style.padding="0px 3px 0px 0px";  
		innerDiv3.className = 'col-xs-3'; innerDiv3.style.padding="3px 3px 0px 0px"; 
		paragraph.className = 'message';
		name.className = 'page-header';
		date.className = 'label label-default';
		image.className = 'img-responsive';
		image.src = data.messages[i].url;
		name.textContent = data.messages[i].name;
		paragraph.textContent = data.messages[i].message;  
		date.textContent = data.messages[i].date;  

		ul.appendChild(outerDiv);
		ul.appendChild(horizontalLine);
		outerDiv.appendChild( innerDiv1);
		outerDiv.appendChild( innerDiv2);
		outerDiv.appendChild( innerDiv3);
		
		//innerDiv1.appendChild(image); 
		
		hyperLink.appendChild(image);//Amar  
		innerDiv1.appendChild(hyperLink); //Amar
		
		innerDiv2.appendChild( name );
		innerDiv2.appendChild( paragraph );
		innerDiv3.appendChild( date );    
	}
	
	manageFooterButtonDisplay();
}

function manageFooterButtonDisplay(){
	alert('Inside dynamic_content');
	globalSunModalContext = "aakBox";
	$('#AAK_INBOX_POPUP_ID').css({'visibility':'hidden'});
	showHideD360Icon($('#sunIcon'));
}
  
$('#footerBarId').height()
  
$(function() {
	var topMenuBarHeight = 	$('.top-menubar').height(); 
	$('#aakBoxContainer').css('margin-top', topMenuBarHeight); 
	
});



