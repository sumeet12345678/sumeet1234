function updateListView() {
 
var text = '{"messages":['+
'{"url": "/media/images/aakInbox/image1.jpg", "name": "Shraddha", "message": "I think I am liking you.", "date": "1 April" },' +
'{"url": "/media/images/aakInbox/image2.jpg", "name": "Unknown", "message": "Hey there.", "date": "2nd March" },' +
'{"url": "/media/images/aakInbox/Katrina.jpg", "name": "Katrina", "message": "Thats ok with me", "date": "28 February" },' +
'{"url": "/media/images/aakInbox/Kareena.jpg", "name": "Kareena","message": "Look- I am up for a commitment.... Keep it with you.","date": "1 March" }]}';

var obj = JSON.parse(text);

	var ul = document.getElementById("message-block");
	var length = obj.messages.length;
	ul.innerHTML = '';
	for(var i=0; i<length; i++) {
		var outerDiv = document.createElement('div'),   
			innerDiv1 = document.createElement('div'),
			innerDiv2 = document.createElement('div'),
			innerDiv3 = document.createElement('div'),
			image= document.createElement('img'),
			name = document.createElement('h4'),
			paragraph = document.createElement('p'),
			date = document.createElement('span'),
			horizontalLine = document.createElement('hr');
  
		outerDiv.className = 'row';
		innerDiv1.className = 'col-sm-2';
		innerDiv2.className = 'col-sm-9';
		innerDiv3.className = 'col-sm-1';
		paragraph.className = 'message';
		name.className = 'page-header';
		date.className = 'label label-default';
		image.className = 'images';
		image.src = obj.messages[i].url;
		name.textContent = obj.messages[i].name;
		paragraph.textContent = obj.messages[i].message;
		date.textContent = obj.messages[i].date;

		ul.appendChild(outerDiv);
		ul.appendChild(horizontalLine);
		outerDiv.appendChild( innerDiv1);
		outerDiv.appendChild( innerDiv2);
		outerDiv.appendChild( innerDiv3);
		innerDiv1.appendChild(image);
		innerDiv2.appendChild( name );
		innerDiv2.appendChild( paragraph );
		innerDiv3.appendChild( date );
		
		

	}
}
