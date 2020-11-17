
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
}



function setup() {
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  
  console.log(ground.x)
  
 
}


function draw() { 
  createCanvas(400,400)

  
  food()
  obstacles()

  if(ground.x> 200){
    ground.x = ground.width/2
    
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10
    

  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
  drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50)
  
  
  
}

function food(){
  
  if(frameCount%80===0){
    
    banana = createSprite(400,0,50,50)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.lifetime = 200
    banana.scale = 0.1
    
    bananaGroup.add(banana)
                    
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,330,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.lifetime = 150
    obstacle.velocityX = -4
    obstacle.scale = 0.1
    obstacleGroup.add(obstacle)
    
  }
  
}





