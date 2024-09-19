function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40,25,0);

  let rectX = windowWidth/2 - 120
  let rectY = 25

  //main rectangle
  rect(rectX, rectY, 240, 700);

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
  rect(rectX + 30, rectY + 90, 45, 40);
  rect(rectX + 75, rectY + 90, 10, 40);
  rect(rectX + 85, rectY + 90, 35, 30);
  rect(rectX + 85, rectY + 120, 35, 10);
  rect(rectX + 85, rectY + 130, 35, 10);
  rect(rectX, rectY + 190, 10, 20);
  rect(rectX + 30, rectY + 190, 45, 20);
  rect(rectX, rectY + 210, 10, 10);
  rect(rectX + 10, rectY + 210, 65, 10);

  //right side
  rect(rectX + 230, rectY + 10, 10, 20);
  rect(rectX + 230, rectY + 30, 10, 40);
  rect(rectX + 130, rectY + 30, 100, 40);
  rect(rectX + 230, rectY + 80, 10, 130);

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

  //middle vertical line
  rect(rectX + 120, rectY + 40, 10, 10);
  rect(rectX + 120, rectY + 60, 10, 10);
  rect(rectX + 120, rectY + 80, 10, 10);
  rect(rectX + 120, rectY + 90, 10, 30);
  rect(rectX + 120, rectY + 120, 10, 10);
  rect(rectX + 120, rectY + 130, 10, 10);
  rect(rectX + 120, rectY + 140, 10, 40);

  //left small boxes
  rect(rectX + 10, rectY + 110, 10, 10);
  rect(rectX + 20, rectY + 110, 10, 10);
  rect(rectX, rectY + 120, 10, 10);
  rect(rectX + 20, rectY + 120, 10, 10);
  rect(rectX + 10, rectY + 130, 10, 10);
  rect(rectX + 20, rectY + 140, 10, 10);
  rect(rectX + 20, rectY + 160, 10, 10);
  rect(rectX, rectY + 170, 10, 10);
  rect(rectX + 10, rectY + 170, 10, 10);
  rect(rectX + 10, rectY + 180, 10, 10);
  rect(rectX + 30, rectY + 170, 5, 20);
  rect(rectX + 35, rectY + 170, 10, 10);
  rect(rectX + 45, rectY + 170, 10, 10);
  rect(rectX + 55, rectY + 170, 10, 10);
  rect(rectX + 65, rectY + 170, 10, 10);
  rect(rectX + 75, rectY + 170, 10, 10);
  rect(rectX + 35, rectY + 180, 10, 10);
  rect(rectX + 55, rectY + 180, 10, 10);
  rect(rectX + 75, rectY + 180, 10, 10);
  rect(rectX + 75, rectY + 200, 10, 10);
  rect(rectX + 95, rectY + 180, 15, 10);
  rect(rectX + 120, rectY + 180, 10, 10);
  rect(rectX + 85, rectY + 190, 15, 10);
  rect(rectX + 85, rectY + 200, 25, 10);
  rect(rectX + 120, rectY + 200, 10, 10);


  // colored boxes down here v

  fill(0,0,0); //black
  rect(rectX + 20, rectY + 20, 10, 10);
  rect(rectX + 110, rectY + 20, 10, 10);
  rect(rectX + 160, rectY + 20, 10, 10);
  rect(rectX + 230, rectY + 70, 10, 10);
  rect(rectX + 120, rectY + 50, 10, 10);
  rect(rectX + 120, rectY + 70, 10, 10);
  rect(rectX, rectY + 180, 10, 10);
  rect(rectX + 20, rectY + 180, 10, 10);
  rect(rectX + 45, rectY + 180, 10, 10);
  rect(rectX + 65, rectY + 180, 10, 10);
  rect(rectX + 85, rectY + 180, 10, 10);
  rect(rectX + 75, rectY + 190, 10, 10);
  rect(rectX + 75, rectY + 210, 10, 10);

  fill(8,9,201); //dark blue
  rect(rectX + 40, rectY + 20, 10, 10);
  rect(rectX + 120, rectY + 210, 10, 10);

  fill(219,155,0); //dark orange
  rect(rectX + 100, rectY + 20, 10, 10);
  rect(rectX + 200, rectY + 70, 30, 30);
  rect(rectX, rectY + 110, 10, 10);
  rect(rectX + 10, rectY + 120, 10, 10);
  rect(rectX, rectY + 130, 10, 10);
  rect(rectX + 20, rectY + 130, 10, 10);
  rect(rectX + 10, rectY + 140, 10, 10);
  rect(rectX, rectY + 150, 10, 10);
  rect(rectX + 20, rectY + 150, 10, 10);
  rect(rectX + 10, rectY + 160, 10, 10);
  rect(rectX + 20, rectY + 170, 10, 10);

  fill(0,166,181); //light blue
  rect(rectX + 140, rectY + 20, 10, 10);

  fill(173,0,0); //dark red
  rect(rectX + 180, rectY + 20, 10, 10);
  rect(rectX + 210, rectY + 20, 10, 10);
  rect(rectX + 30, rectY + 60, 45, 10);
  rect(rectX + 75, rectY + 160, 10, 10);
  rect(rectX + 110, rectY + 180, 10, 10);
  rect(rectX + 100, rectY + 190, 10, 10);
  rect(rectX + 120, rectY + 190, 10, 10);
  rect(rectX + 110, rectY + 200, 10, 10);

  fill(247,193,0); //marigold
  rect(rectX + 10, rectY + 70, 20, 20);

  fill(70,102,43); //dark olive
  rect(rectX + 120, rectY + 30, 10, 10);

  fill(97, 173, 30) //light green
  rect(rectX + 10, rectY + 190, 20, 20);


  //circles
  fill(173,0,0); //dark red
  ellipse(rectX + 75, rectY + 65, 60);

  fill(247,193,0); //marigold
  ellipse(rectX + 85, rectY + 135, 60);

}

function draw() {
}
