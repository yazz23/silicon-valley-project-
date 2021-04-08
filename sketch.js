var player1
var player2
var scoring
var player1j, player2j
var background
var ball
var ball2
var score
var score2 = 0

function preload() {
  player1 = loadImage("red w ball.png")
  player2 = loadImage("bluewball.png")
  scoring = loadImage("shoot2.png")
  player1j = loadImage("redjumping.png")
  player2j = loadImage("bluejumping.png")
  backgroundimg = loadImage("bkgimg.jpg")
  ballImg = loadImage("ball.png")
  ball2Img = loadImage("ball.png")
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  ball = createSprite(800, height / 2, 50, 50)
  ball.addImage(ballImg)
  ball2 = createSprite(800, height / 2, 50, 50)
  ball2.addImage(ballImg)
  ball2.scale = 0.1
  ball.scale = 0.1
  ball.visible = false
  ball2.visible = false
  
  player = createSprite(400, 600, 50, 50)
  player.addImage(player1)
  test = createSprite(270, 530, 50, 50)
  test.visible = false
  test2 = createSprite(1235,520,50,50)
  test2.visible = false 
  player22 = createSprite(900, 500, 50, 50)
  player22.addImage(player2)
  player22.scale = 3
  player22.velocityX = -5
  score = 0
  score2 = 0

}


function draw() {
  background(backgroundimg);
  textSize(40)
  text("score = " + score, 670, 290)
  textSize(40)
  text("score = "+ score,670,250)
  
  player.velocityX = 0
  if (player22.x < width / 2) {
    player22.velocityX = 0
    player22.destroy()
    player22 = createSprite(width / 2 - 100, 500, 10, 10)
    player22.addImage(player2j)

    player22.scale = 2.5
    ball2.x = ball2.x - 2

    if (ball2.x < width / 2 && ball2.x > width / 2 - 420) {

      ball2.x = ball2.x - 4
    }
    if (ball2.x <= width / 2 - 420) {
      ball2.y = ball2.y + 4
    }
    ball2.visible = true



  }
  if (keyDown(RIGHT_ARROW)) {
    player.velocityX = 5
  }


  if (keyDown(LEFT_ARROW)) {
    player.velocityX = -5
  }

  if (player22.x === width / 2) {

  }
  if (player.x > width / 2) {
    player.velocityX = 0
    player.destroy()
    player = createSprite(width / 2 + 100, 500, 10, 10)
    player.addImage(player1j)
    ball.x = ball.x + 2
    if (ball.x > width / 2 && ball.x < width / 2 + 420) {
      ball.x = ball.x + 4
    }
    if (ball.x >= width / 2 + random(420,480)) {
      ball.y = ball.y + 4
    }
    ball.visible = true
  }

  if (ball2.isTouching(test)) {
    player22.x = width/2+250
    ball2.x = width/2
    player22.destroy()
    player22 = createSprite(900, 500, 50, 50)
    player22.addImage(player2)
    player22.scale = 3
    test.visible = true
    test.addImage(scoring)
    test.scale = 0.2
    score2 = score2 + 1
  }

  if(ball2.x == width/2){
    ball2.visible = false 
  }

 

  if(ball.isTouching(test2)){
    player.x = width/2-250
    ball.x = width/2
    player.destroy()
    player = createSprite(400, 600, 50, 50)
  player.addImage(player1)
  test2.visible = true
test2.addImage(scoring)
test2.scale = 0.2
score = score + 1

  }

  if(ball.x == width/2){
    ball.visible = false
  }
  drawSprites();
 if(score===5||score2===5){
if(score===5){
  console.log("hello")
  textSize(50)
  text("player Wins",width/2-100,height/2)
 // score=0
  //score2=0
}
if(score2===5){
  text("computer Wins",width/2-100,height/2)
  score=0
  score2=0
}
 }
 
  
}