var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 50, 80); //50
 fixedRect.shapeColor = "green";// 50/2+80/2 =25+ 40 = 65
 movingRect = createSprite(400,200,80,50);//80
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 fixedRect.debug = true;
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x -movingRect.x< movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y -movingRect.y< movingRect.height/2+fixedRect.height/2 )
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}