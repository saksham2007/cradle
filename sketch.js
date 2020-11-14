
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rope1
var rope2
var rope3
var rope4
var rope5

function preload()
{
	
}

function setup() {
createCanvas(800,700)


	engine = Engine.create();
	world = engine.world;


	bob1 = new Bob(200,600,30)
	bob2 = new Bob(259,600,30)
	bob3 = new Bob(319,600,30)
	bob4 = new Bob(379,600,30)
	bob5 = new Bob(440,600,30)

	roof1 = new Roof(300,100,400,40)
	
	rope1 = new Rope(bob1.body,roof1.body,-115,0)
	rope2 = new Rope(bob2.body,roof1.body,-60,0)
	rope3 = new Rope(bob3.body,roof1.body,5,0)
	rope4 = new Rope(bob4.body,roof1.body,65,0)
	rope5 = new Rope(bob5.body,roof1.body,130,0)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(220);

    roof1.display()
	
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

    bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-55});
	}
}

