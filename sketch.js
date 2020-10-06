var paperObject,ground, side1, side2, side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = Bodies.rectangle(600,635,100,20,{isStatic:true});
	World.add(world, side1);

	side2 = Bodies.rectangle(550,600,20,100,{isStatic:true});
	World.add(world, side2);

	side3 = Bodies.rectangle(650,600,20,100,{isStatic:true});
	World.add(world, side3);
	
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	paperObject = Bodies.circle(200 , 600 , 40 , {isStatic:false, restitution:0.3, friction:0.5, density:1.2});
	World.add(world, paperObject);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
 
  fill(0,0,255);
  ellipseMode(RADIUS);
  ellipse(paperObject.position.x,paperObject.position.y,40,40);

  fill(0,255,0);
  rectMode(CENTER)
  rect(side1.position.x,side1.position.y,100,20);

  rectMode(CENTER)
  rect(side2.position.x,side2.position.y,20,100);

  rectMode(CENTER)
  rect(side3.position.x,side3.position.y,20,100);
  
  fill(255,0,0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject, paperObject.position,{x:85,y:-100});
	 }
}