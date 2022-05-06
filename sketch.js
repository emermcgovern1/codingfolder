var fade;
var fadeAmount = 1
let r, g, b;
let img;

function preload(){
	img= loadImage('phone.jpeg');
}

function setup() {
  createCanvas(300, 600);

  r = random(255);
  g = random(255);
  b = random(255);
}
//text
function draw() {
  background(300);

	image(img,120,150);

	//grey dots
		fill(204);
	  stroke(127);
	  ellipse(390, 500, 20, 20);
	  ellipse(290, 300, 40, 40);
		ellipse(320, 210, 10, 10);
		ellipse(400, 230, 30, 30);
		ellipse(450, 290, 24, 24);
		ellipse(300, 610, 55, 55);
		ellipse(280, 450, 45, 45);
		ellipse(270, 670, 30, 30);
		ellipse(420, 640, 40, 40);


//fade and bubble

	fill(0,224,0);
	noStroke();
	rect(100, 50, 570, 60,10);
	circle(70,140,30,40);
	circle(40,180,20,40);

	fade += fadeAmount;
	print(fade)
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 225);
  circle(360, 400, 100, 200);
//text bubble

	fill(0, 0, 0, fade)
  text("Who holds the power?", 150,100)
  if (fade<0) fadeAmount=1;
	if (fade>255) fadeAmount=-10;

}

function mousePressed() {

  let d = dist(mouseX, mouseY, 360, 400);
  if (d < 100) {

    r = random(255);
    g = random(255);
    b = random(255);
  }
}


function setup() {
  createCanvas(700, 800);
  textSize(50)
  fade = 0
}
