
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    roof=new Ground(500,150,450,50);
    roofSprite=createSprite(500,150,450,50);

    Bob1=new Bob(0,0,75);
    Bob2=new Bob(426,400,75);
    Bob3=new Bob(500,400,75);
    Bob4=new Bob(574,400,75);
    Bob5=new Bob(649,400,75);

    rope1 = new Chain(Bob1.body,roof.body, -149,0);
    rope2 = new Chain(Bob2.body,roof.body, -74,0);
    rope3 = new Chain(Bob3.body,roof.body, 0,0);
    rope4 = new Chain(Bob4.body,roof.body, 74,0);
    rope5 = new Chain(Bob5.body,roof.body, 149,0);
}


function draw() {
  rectMode(CENTER);
  background("lightGray");
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  roof.display();

  drawSprites();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-85,y:-85});
  }
}