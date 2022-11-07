var ball;
var ball2;

function setup() {
  createCanvas(500,500);
  ball = createSprite(300, 300, 45, 45);
  ball2 = createSprite(200, 400, 50, 50);
  ball.shapeColor = "black";
  ball2.shapeColor = "purple";
}

function draw() 
{
  background("blue");
  if (keyIsDown(RIGHT_ARROW)) {
    ball.x = ball.x + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.x = ball.x - 5;
  }
  if (keyIsDown(UP_ARROW)) {
    ball.y = ball.y + 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    ball.y = ball.y - 5;
  }
  drawSprites();
}