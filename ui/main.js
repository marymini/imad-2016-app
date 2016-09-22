console.log('Loaded!');

var element=document.getElementById('txt');
element.innerHthml="The Text Value Changed";

var img=document.getElementById('madi');
var img1=document.getElementById('madi1');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+1;
  img.style.marginLeft=marginLeft+'px';  
}
img.onclick = function() {
var interval=setInterval(moveRight,50);
};
img1.onclick=function() {
    var interval=setInterval(moveLeft,10);
}
