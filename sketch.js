
var canvas;
var form;

function setup(){
	canvas = createCanvas(displayWidth-20,displayHeight-30);
	form = new Form();
}

function draw(){
	form.display();
}
