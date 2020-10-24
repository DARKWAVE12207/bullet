var bullet,wall,speed,weight,thickness
function setup() {
  createCanvas(800,400);
 bullet = createSprite(400, 200, 50, 50);
 bullet.shapeColor = "white"
 wall = createSprite(700, 200, 50, 600);
 wall.shapeColor = color (46,145,53)
 speed = random(55,90)
 weight = random(400,1500)
 thickness = random(22,83)
 bullet.velocityX= speed
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX= 0
    var damage = 0.5*speed*speed*weight/thickness*thickness*thickness
    if(damage>10){
      bullet.shapeColor = "red"
    }
   
    if(damage<10){
      bullet.shapeColor = "green"
    }
  } 
  drawSprites();

}