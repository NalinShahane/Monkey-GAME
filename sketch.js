
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var Energy;
var PLAY=1;
var END=0;
var GS= PLAY;
var restart;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
 
   rImage= loadImage("restart.png");
}



function setup() {
  createCanvas(400,400);

  M= createSprite(30,315,20,20);
  M.scale= 0.1;
  M.addAnimation("M",monkey_running);
  
   ground = createSprite(200,350,800,10);
   ground.x = ground.width /2;
   ground.velocityX=-4;

  BG= new Group();
  OG= new Group();
  
  score=0;
  Energy=0;
  
 
  
}



function draw() {
 background("black");
  fill("yellow");
  text("Banana's Eaten: "+ score, 280,50);
  text("Energy: " + Energy,10,50);
 
  if(GS === PLAY){
   if(keyDown("space") && M.y >= 270 ) {
      M.velocityY = -12
    }
  
  M.velocityY = M.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(BG.isTouching(M))
   {
      BG.destroyEach();
      score= score+1;
      Energy= Energy+2;
   }
  
  if(M.isTouching(OG))
  {
    GS = END;
  }  
  }
  
  if (GS === END)
  {
    fill("yellow");
    textSize(20);
    text("GAME OVERR", 180,200);   
    text("STONE ATE THE MONKEY",100,160);
    ground.velocityX= 0;
    M.velocityY= 0;
    BG.setVelocityXEach(0);
    OG.setVelocityXEach(0);
    
    OG.setLifetimeEach(-1);
    BG.setLifetimeEach(-1);
  }
  
  
  
  
  
  
  SB();
  SO();
  M.collide(ground);
  drawSprites();
}

function SB(){

  if (frameCount % 80 === 0)
  {
    B= createSprite(450,200,20,20);
    B.addImage(bananaImage);
    B.scale=0.1;
    B.velocityX= -8;
    B.y=Math.round(random(150,350));
    B.lifeTime=100;
    BG.add(B);
  }  
}

function SO()
{
  if (frameCount % 200 === 0)
  {
    O= createSprite(460,305,20,10);
    O.addImage(obstaceImage);     
    O.velocityX= -9;
    O.scale=0.2;
    O.lifeTime=100;
    OG.add(O);  
     O.debug= true;
    O.setCollider("rectangle",90,40,60,60);

  } 
  
}  




















