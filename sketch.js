let obstacles;
let player1;
let score;
let level;
let distance;
let fallSpeed;
let lastCol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player1 = new Player();
  distanceMultiplier = 5;
  distance = player1.h * distanceMultiplier;
  fallSpeed = height/200;
  obstacles = [];
  lastCol = 3;
  obstacles.push(new Obstacle());
  level = 1;
  score = 0;
  textAlign(CENTER, CENTER);
  loop();
}

function draw() {
  background(0);
  textSize(width/30);
  text('Level: ' + level,width/2,height/15);
  textSize(width/60);
  fill(120);
  text('by David Szilvasi',width/10,(height/100)*96)

  
  for (let i = obstacles.length-1; i >= 0; i--) {
    obstacles[i].display();
    obstacles[i].fall();
    
    if (obstacles[obstacles.length-1].y > distance) {
      obstacles.push(new Obstacle());
    }
    
    if (obstacles[i].hits(player1)) {
      fill(255);
      textSize(width/16);
      text('Game Over\nLevel: ' + level + '\n\nPress Enter to restart',width/2,height/2);
      noLoop();
    }

    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
      score += 1;
    }
  }

  player1.display();
  player1.move();   
  
  if (score % 5 == 0 && score != 0) {
    if (distance >= player1.h*3.7) {
      distanceMultiplier -= 0.4;
      distance = player1.h * distanceMultiplier;
    }
    fallSpeed += 0.75;
    level += 1;
    score += 1;
  }
}

function keyPressed() {
  if (keyCode === ENTER || keyCode === 32) {
    setup();
  }
}