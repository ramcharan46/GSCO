
var car,wall;
var speed,weight;

    function setup() {
  createCanvas(1600,400);
  speed=random(10,30);
  weight=random(400,1500);
  
  car=createSprite(50, 200, 50, 50);
wall=createSprite(1500,200,60,height/2);



}

function draw() {
  background(0,0,0);
  car.velocityX=speed;
  

  if( car.isTouching( wall)){

    car.velocityX=0;
  

  var deformation=0.5 * weight* speed* speed /22509;

  if(deformation > 100){

    car.shapeColor=color("green");
  }

  if(deformation < 100 && deformation > 180){

    car.shapeColor=color("yellow");
  }

  if(deformation > 180){

    car.shapeColor=color("red");
  }
  }

  drawSprites();
}