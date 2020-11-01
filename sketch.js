var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box1, box2,box3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = createSprite(width/2, 650, 200,20);
	World.add(world, box1);
	box1.shapeColor=("red");

	box2 = createSprite(495, 590, 10,100);
	World.add(world, box2);
	box2.shapeColor=("red");

	box3 = createSprite(305, 590, 10,100);
	World.add(world, box3);
	box3.shapeColor=("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  if(keyDown(DOWN_ARROW)) {
	   Body.setStatic(packageBody, false); 
	}

  drawSprites();
}


