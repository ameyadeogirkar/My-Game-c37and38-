var spaceShip,destroy;
var spaceShipImg;
var ground,winningLine;
var backgroundImg;
var sun,sunImg;


function preload(){
  spaceShipImg=loadImage("images/X-wing.png");
  sunImg=loadImage("images/sun.jpg");
 // enemyImg = loadImage("images/Tie-Fighter.png")
  backgroundImg = loadImage("background.jpg");
  destroy = loadImage("images/blast.png");
}

function setup() {
  createCanvas(800,1200);

  spaceShip = createSprite(350,600);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.7;

  sun = createSprite (350, 1150, 20, 20);
  sun.addImage(sunImg);
  sun.scale = 5;

  ground = createSprite(350,1000,1000,20);
  ground.visible = false;
 
  winningLine = createSprite(395,0,805,20);
  winningLine.shapeColor = "crimson"

  gameState = 0;
  // gamestate (0) === PLAY
}

function draw() {
  background(0);  

  camera.position.x = displayWidth/2.7;
  camera.position.y = spaceShip.y;

  if(keyDown("space")){
    spaceShip.velocityY = -11;
  }  

  if(spaceShip.isTouching(winningLine)){
    console.log("YOU WIN...")
    sun.destroy();
    ground.destroy();
    spaceShip.destroy();
    winningLine.destroy();
    gameState === 1;
  }else{
    gameState === 0;
  }

  if (spaceShip.isTouching(ground)){
    var d = createSprite(20,20,20,20);
    d.x = spaceShip.x;
    d.y = spaceShip.y;
    d.addImage(destroy);
    spaceShip.destroy();
    console.log(">>>>YOU LOSE")
    console.log(">>>>relode this page for another chance")
  }

  spaceShip.velocityY = spaceShip.velocityY + 0.8;

 // bckgrd.x = camera.x
    
 spaceShip.display();
 sun.display();
 ground.display();
 winningLine.display();

  if(gameState===0){
    fill("cyan")
    textSize(50);
    text("open consol for result.....",140,900);
    text("touch the crimson line to win.........",30,1000);
  }else if(gameState===1){
    fill("cyan")
    textSize(50);
    text("you win..",30,300);
  }
}
