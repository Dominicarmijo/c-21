var fixedRect, movingRect, go1,go2,go3,go4;
var rect1,rect2
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80);

  go1 = createSprite(100,100,50,50)
  go2 = createSprite(200,100,50,50) 
  go3 = createSprite(300,100,50,50)
  go4 = createSprite(400,100,50,50)
  go1.shapeColor = "aqua"
  go2.shapeColor= "aqua"
  go3.shapeColor = "aqua"
  go4.shapeColor="aqua"
  
  fixedRect.shapeColor = "aqua";
movingRect.shapeColor = "aqua";
rect1=createSprite(100,0,50,30);
rect2=createSprite(100,400,30,50);
rect1.shapeColor="green";
rect2.shapeColor="pink";
rect1.velocityY=5
rect2.velocityY=-5
}

function draw() {
  background(0);

movingRect.x = mouseX;
movingRect.y = mouseY;

bounceOff()

//(varies-400<50)
//console.log(movingRect.x-fixedRect.x)
if(isTouching(go1,movingRect)){
  go1.shapeColor = "crimson";
    movingRect.shapeColor = "crimson";
}else{
  go1.shapeColor = "aqua";
    movingRect.shapeColor = "aqua";
}


  drawSprites();
}


