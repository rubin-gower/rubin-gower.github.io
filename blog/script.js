function start() {
	console.log("js connected")
	
}
function notready() {
	alert("that blog is not ready yet ):")
	
}
function easteregg() {
console.log("runing easter egg")
wait = setInterval(rainbow,200);

}
function rainbow() {
	console.log("runing rainbow")
	var red = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
document.getElementById("thetitle").style.color = "rgb(" + red + "," + blue + "," + green + ")";
}
	var wait = 0; 

function stop() {
	clearInterval(wait) 
	document.getElementById("thetitle").style.color = "black";
}
function diffrent() {
	if (toggle==0) {
	document.getElementById("scrollexamp").style.overflow = "visible";
	toggle++;
	}
	else if(toggle > 0) {
		document.getElementById("scrollexamp").style.overflow = "auto";
		toggle = 0;
	}
}
var toggle = 0;
function testSum(){
    var expected = 7
    var actual = sum(5, 2)
 
    if (actual != expected) {
        console.log("It's broken..")
    } else {
        console.log("It works!")
    }
}
function sum(x, y) {
	return x + y
}