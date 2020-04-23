let speed = 0;
let carX = 0;
let carY = 0;
let rotation = 0;
let rot = 0

function setup() {
  createCanvas(700, 700);
  background(0);
  rectMode(CENTER);
}

function draw() {
  car(carX, carY);
  if (keyIsDown(65)) {
    rotation -= 0.05;
  } else if (keyIsDown(68)) {
    rotation += 0.05;
  }
}

function car(x, y) {
  translate(width / 2, height / 2);
  carX += speed;
  rotate(rotation)
  rect(carX, y, 50, 20);
}

function keyPressed() {
  if (key == 'c') {
    background(220);
  } else if (key == 'w') {
    speed = 1;
  } else if (key == 's') {
    speed = -1;
  } else {
    speed = 0
    fill(random(0, 255), random(0, 255), random(0, 255));
  }
}
