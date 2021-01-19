
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var ground,tree;
function preload()
{
	treeIMG=loadImage("tree.png",200,200);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 ground = new Ground(400,500,800,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 tree.display();
 ground.display();

  drawSprites();
 
}



