var c1, c2, r, b1, b2, y1, y2;
//layer for lines
var LineLayer;

function setup() {
  createCanvas(816, 800);
  LineLayer = createGraphics(width, height);

  // colors for a gradient background
  c1 = color(239, 243, 238);
  c2 = color(193, 186, 185);
  //bg gradient
  setGradient(c1, c2);
  // colors for a gradient blue square
  b1 = color(44, 52, 134);
  b2 = color(25, 19, 99);
//yellow gradient
  y1 = color(253, 219, 0);
  y2 = color(234, 189, 0);
//test red color
  r = color(238, 36, 0);
}

function draw() {
  //red
  fill(r);
  noStroke();
  rect(0, 0, 376, 325);
       //yellow
  //fill(254,219,0);
  //noStroke();
  //rect(0,394,57,206);
  drawGradientRect(0, 525, 76, 275, y1, y2);

  //blue
  drawGradientSquare(379, 528, 240, b1, b2);

  drawTexture(30000);

  //lines on the layer
  LineLayer.clear();
  LineLayer.stroke(0);
  LineLayer.strokeWeight(12);
  LineLayer.line(376, 0, 376, 800);
  //
  LineLayer.strokeWeight(19);
  LineLayer.line(0, 325, 816, 325);
  //
  LineLayer.line(0, 520, 816, 520);
  //
  LineLayer.strokeWeight(11);
  LineLayer.line(76, 520, 76, 816);

  LineLayer.strokeWeight(11);
  LineLayer.line(376, 763, 617, 763);

  LineLayer.strokeWeight(11);
  LineLayer.line(620, 531, 620, 800);

  //FILTER
  LineLayer.filter(BLUR, 1.5, false);
  image(LineLayer, 0, 0);
//
  noLoop();

  
}

//texture
function drawTexture(density) {
  for (let i = 0; i < density; i++) {
    let x = random(width);
    let y = random(height);
    stroke(0, random(15, 40));
    point(x, y);
  }
}

//GRADIENTS
function setGradient(c1, c2) {
  for (let y = 0; y < height; y++) {
    const amount = map(y, 0, height, 0, 1);
    stroke(lerpColor(c1, c2, amount));
    line(0, y, width, y);
  }

}

function drawGradientSquare(x, y, size, c1, c2) {
  noStroke();
  fill(c1);
  square(x, y, size);

  for (let row = 0; row < size; row++) {
    const amount = map(row, 0, size, 0, 1);
    stroke(lerpColor(c1, c2, amount));
    line(x, y + row, x + size, y + row);
  }
}

function drawGradientRect(x, y, w, h, c1, c2) {
  noStroke();
  fill(c1);
  rect(x, y, w, h);

  for (let row = 0; row < h; row++) {
  const amount = map(row, 0, h, 0, 1);
  stroke(lerpColor(c1, c2, amount));
  line(x, y + row, x + w, y + row);

  }
}
