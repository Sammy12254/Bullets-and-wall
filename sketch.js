  //creating the game objects 
  var wall, thickness;
  var bullet, speed, weight;

//creating the function setup
function setup() {

  //creating the Canvas 
    createCanvas(1600,400);

   //creating the random number for spedd and weight 
    speed = random(22, 55);
    weight = random(30, 52);
    thickness = random(22, 83);

  //creating the bullet 
    bullet = createSprite(50, 200, 50, 10);
    bullet.velocityX = speed;
    bullet.shapeColor="white";

    //creating the wall
    wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor=(80,80,80);
}

//creating the function draw
function draw() {

  //creating the background
  background(0);  
    
    //creating the if condition for hasCollided
    if(hasCollided(bullet, wall)){
     
      //giving the bullet velocity as 0
      bullet.velocityX = 0;

      //creating the damage for weight, speed, speed/thickness* thickness* thickness
      var damage = 0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      //if damage is greater than 10 then the wall colour will change 
      if(damage>10){
        wall.shapeColor = color(225, 0, 0);
      }
  
      //if damage is less than 10 then the wall colour will change 
      if(damage<10){
        wall.shapeColor = color(0, 255, 0);
      }
    }

    //creating teh drawSprites 
    drawSprites();
}

//creating the function hasCollided
function hasCollided(Lbullet, Lwall){

   //bulletRightEdge is equal to Lbullet.x is added to Lbullet.width
    bulletRightEdge = Lbullet.x + Lbullet.width;
    wallLeftEdge = Lwall.x;

    //if bulletRightEdge is greater than = wallLeftEdge than return is true or else return is false 
    if(bulletRightEdge>=wallLeftEdge){
    return true;
}

return false;
}
