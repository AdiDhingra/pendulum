
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var holder1,holder2,holder3
var ball1,ball2,ball3,ball4;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	holder1=new Holder(600,300,50,300);
	holder2=new Holder(380,160,500,50);
	holder3=new Holder(160,300,50,300);
	ball1=new Ball(350,300,30);
	ball2=new Ball(420,300,30);
	ball3=new Ball(490,300,30);
	ball4=new Ball(280,300,30);
	rope1=new Line(ball1.body,{x:350, y:160})
	rope2=new Line(ball2.body,{x:420, y:160})
	rope3=new Line(ball3.body,{x:490, y:160})
	rope4=new Line(ball4.body,{x:280, y:160})
	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  holder1.display();
  holder2.display();
  holder3.display();
   rope1.display();
  ball1.display();
  rope2.display();
  ball2.display();
  rope3.display();
  ball3.display();
  rope4.display();
  ball4.display();

  drawSprites();
 
}



