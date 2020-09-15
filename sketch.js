function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;


function draw() {
  background(255,255,255);  
  drawSprites();

  plinko.display();
  particles.display();
  ground.display();
  division.division();
}

for(var k = 0; k <=width; k = k + 80){
  divisions.push(new divisions(k, height-divisionWeight/2, 10, divisionHeight));
}