var myPicture = document.querySelector('img');
myPicture.onclick = function(){
	var mySrc = myPicture.getAttribute('src');
	if(mySrc === 'http://mdn.github.io/beginner-html-site/images/firefox-icon.png'){
		myPicture.setAttribute('src', 'http://icons.iconarchive.com/icons/media-design/hydropro/512/HP-Firefox-icon.png');
	}
	else {
		myPicture.setAttribute('src', 'http://mdn.github.io/beginner-html-site/images/firefox-icon.png');
	}

}