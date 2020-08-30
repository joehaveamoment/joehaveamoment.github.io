window.onload = choosePic;

var myPix = new Array("images/a.png","images/i.png","images/u.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
