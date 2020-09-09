
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

var paperBall, ground;
var basket1, basket2, basket3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paperBall = new paper(200, 65, 15, 15);

	ground = new Ground(400, 655, 850, 20);

	basket1 = new Bin(520, 625, 10, 50);
	basket2 = new Bin(730, 625, 10, 50);
	basket3 = new Bin(625, 645, 200, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paperBall.display();
  ground.display();

  basket1.display();
  basket2.display();
  basket3.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 10, y: -12});
	}
}