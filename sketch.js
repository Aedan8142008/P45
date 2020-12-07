var car, carImage;
var obstacle, obstacleImage, obstaclesGroup;
var building, buildingImage, buildingsGroup;
var dealership, dealershipImage;
var road, roadImage;


function preload() {
carImage=loadImage("car1.2.png");
roadImage=loadImage("road1.png");
}

function setup() {
  createCanvas(800,800);
  road=createSprite(400, 720, 50, 50);
  road.addImage("roas",roadImage);
  road.velocityY=-3;
  
  car=createSprite(400, 720, 50, 50);
  car.addImage("Tactical",carImage);
  car.scale=0.3;
  car.velocityY=-3;
  
}

function draw() {
  background(0);  
 
  console.log(road.y);
  if(road.y<600){
    road.y=600;
   }
  drawSprites();
}

/*
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

*/

/*

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

*/