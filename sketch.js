const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(600,500,280,20)

box1=new Box(600,480,30,20)
box2=new Box (500,480,30,20)
box3=new Box(520,480,30,20)
box4=new Box(540,480,30,20)
box5=new Box (560,480,30,20)
box6=new Box(580,480,30,20)
box7=new Box(620,480,30,20)
box8=new Box (640,480,30,20)
box9=new Box(660,480,30,20)
box10=new Box(680,480,30,20)
box11=new Box (520,460,50,20)
box12=new Box(560,460,50,20)
box13=new Box (600,460,50,20)
box14=new Box(640,460,50,20)
box15=new Box(550,440,50,20)
box16=new Box (600,440,50,20)
box17=new Box(580,420,50,20)

slingshot = new Slingshot(this.polygon,{X:100,y:200});

}


function draw (){
ground.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  

slingshot.display();


    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}


