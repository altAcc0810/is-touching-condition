var ball,goalpost

function setup() {
  createCanvas(800,400);
  ball=createSprite(100,100,50,100);
  ball.debug=true;
  goalpost=createSprite(300,200,80,100)
  goalpost.debug=true;
}

function draw() {
  background(100,170,255);  
  ball.x=mouseX;
  ball.y=mouseY;
  if(ball.x-goalpost.x<ball.width/2+goalpost.width/2
    &&goalpost.x-ball.x<ball.width/2+goalpost.width/2
    &&ball.y-goalpost.y<ball.height/2+goalpost.height/2
    &&goalpost.y-ball.y<ball.height/2+goalpost.height/2){
  goalpost.shapeColor="orange"
  goalpost.velocityX=2
  }
  else{
    goalpost.shapeColor="yellow"
    ball.shapeColor="red"
    goalpost.x=300
    goalpost.velocityX=0
  }
  drawSprites();
}