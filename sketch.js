function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40,25,0);

  let rect1X = windowWidth/2 - 374;
  let rect2X = windowWidth/2 - 108;
  let rect3X = windowWidth/2 + 158;
  let rectY = 50;

  fill(255,255,255);
  rect(rect1X, rectY, 216, 650);
  rect(rect2X, rectY, 216, 650);
  rect(rect3X, rectY, 216, 650);

  rect(rect1X, rectY, 117, 9);
  rect(rect1X + 117, rectY, 99, 9);
  rect(rect2X, rectY, 108, 9);
  rect(rect2X + 108, rectY, 108, 9);
  rect(rect3X, rectY, 108, 9);
  rect(rect3X + 108, rectY, 108, 9);

  rect(rect1X, 650, 216, 50);
  rect(rect2X, 650, 216, 50);
  rect(rect3X, 650, 216, 50);

  rect(rect2X, 641, 216, 9);
  rect(rect2X, rectY+9, 9, 582);
  rect(rect2X + 207, rectY+9, 9, 582);

  rect(rect1X, rectY+9, 9, 591);
  rect(rect1X + 207, rectY+9, 9, 591);

}

function draw() {
}
