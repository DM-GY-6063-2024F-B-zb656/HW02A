function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40,25,0);

  let rectX = windowWidth/2 - 120
  let rectY = 50

  //main rectangle
  rect(rectX, rectY, 240, 650);

  //top line
  rect(rectX, rectY, 120, 10);
  rect(rectX + 120, rectY, 120, 10);

  //left side
  rect(rectX, rectY + 10, 10, 20);
  rect(rectX, rectY + 30, 10, 80);
  rect(rectX + 10, rectY + 30, 20, 40);
  rect(rectX + 10, rectY + 90, 10, 5);
  rect(rectX + 20, rectY + 90, 10, 5);
  rect(rectX + 10, rectY + 95, 20, 15);
  rect(rectX + 30, rectY + 30, 45, 20);
  rect(rectX + 75, rectY + 30, 45, 20);
  rect(rectX + 30, rectY + 50, 90, 10);
  rect(rectX + 75, rectY + 60, 45, 10);
  rect(rectX + 30, rectY + 70, 45, 20);
  rect(rectX + 75, rectY + 70, 45, 20);

  //right side
  rect(rectX + 230, rectY + 10, 10, 20);
  rect(rectX + 230, rectY + 30, 10, 40);
  rect(rectX + 130, rectY + 30, 100, 40);

  //second line
  rect(rectX + 10, rectY + 10, 110, 10);
  rect(rectX + 120, rectY + 10, 110, 10);

  //third line small boxes
  rect(rectX + 10, rectY + 20, 10, 5);
  rect(rectX + 10, rectY + 25, 10, 5);
  rect(rectX + 30, rectY + 20, 10, 5);
  rect(rectX + 30, rectY + 25, 10, 5);
  rect(rectX + 50, rectY + 20, 10, 5);
  rect(rectX + 50, rectY + 25, 10, 5);
  rect(rectX + 60, rectY + 20, 10, 10);
  rect(rectX + 70, rectY + 20, 10, 5);
  rect(rectX + 70, rectY + 25, 10, 5);
  rect(rectX + 80, rectY + 20, 10, 10);
  rect(rectX + 90, rectY + 20, 10, 5);
  rect(rectX + 90, rectY + 25, 10, 5);
  rect(rectX + 120, rectY + 20, 10,10);
  rect(rectX + 130, rectY + 20, 10, 5);
  rect(rectX + 130, rectY + 25, 10, 5);
  rect(rectX + 150, rectY + 20, 10, 5);
  rect(rectX + 150, rectY + 25, 10, 5);
  rect(rectX + 170, rectY + 20, 10, 5);
  rect(rectX + 170, rectY + 25, 10, 5);
  rect(rectX + 190, rectY + 20, 10, 5);
  rect(rectX + 190, rectY + 25, 10, 5);
  rect(rectX + 200, rectY + 20, 10, 10);
  rect(rectX + 220, rectY + 20, 10, 5);
  rect(rectX + 220, rectY + 25, 10, 5);

  //middle vertical small boxes
  rect(rectX + 120, rectY + 40, 10, 10);
  rect(rectX + 120, rectY + 60, 10, 10);




  // colored boxes down here v

  fill(0,0,0); //black
  rect(rectX + 20, rectY + 20, 10, 10);
  rect(rectX + 110, rectY + 20, 10, 10);
  rect(rectX + 160, rectY + 20, 10, 10);
  rect(rectX + 230, rectY + 70, 10, 10);
  rect(rectX + 120, rectY + 50, 10, 10);

  fill(8,9,201); //dark blue
  rect(rectX + 40, rectY + 20, 10, 10);

  fill(219,155,0); //dark orange
  rect(rectX + 100, rectY + 20, 10, 10);

  fill(0,166,181); //light blue
  rect(rectX + 140, rectY + 20, 10, 10);

  fill(194,0,0); //brighter red
  rect(rectX + 180, rectY + 20, 10, 10);

  fill(173,0,0); //dark red
  rect(rectX + 210, rectY + 20, 10, 10);
  rect(rectX + 30, rectY + 60, 45, 10);

  fill(247,193,0); //marigold
  rect(rectX + 10, rectY + 70, 20, 20);

  fill(70,102,43); //dark olive
  rect(rectX + 120, rectY + 30, 10, 10);

}

function draw() {
}
