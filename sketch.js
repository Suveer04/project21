var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(100,150);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  

  wall = createSprite(1150,200,thickness,height);
  wall.shapeColor = "purple";
  }

  function draw() {
    background("black");   
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage > 10){
      wall.shapeColor = 'red';
    }
     if(damage < 10){
wall.shapeColor = 'green';
      }
    
  }

    drawSprites();
  }

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }

}

