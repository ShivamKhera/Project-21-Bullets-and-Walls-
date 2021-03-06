var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 75, 25);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet.velocityX=speed;
  wall.shapeColor = color(80,80,80)
  bullet.shapeColor = color(255,255,255)
}

function draw() {
  background(255,255,255); 
  if( wall.x-bullet.x<wall.width/2+bullet.width/2 ){
    bullet.velocityX=0;
    var deformation = 0.5 * speed * weight *speed/22509;
    if(deformation>180){
      bullet.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor = color(0,255,0);
    }

  }
 
  
  




  drawSprites();
}