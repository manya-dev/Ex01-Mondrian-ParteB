var c1, c2, r, b1, b2, y1, y2;
//layer for lines
var LineLayer;
var TextureLayer;

var mainVerticalX = 376;
var leftVerticalX = 76;
var rightVerticalX = 620;
var topHorizontalY = 325;
var middleHorizontalY = 520;
var bottomHorizontalY = 763;

function setup() {
  createCanvas(816, 800);
  LineLayer = createGraphics(width, height);
  TextureLayer = createGraphics(width, height);

  // colors for a gradient background
  c1 = color(239, 243, 238);
  c2 = color(193, 186, 185);
  // colors for a gradient blue square
  b1 = color(44, 52, 134);
  b2 = color(25, 19, 99);
//yellow gradient
  y1 = color(253, 219, 0);
  y2 = color(234, 189, 0);
//test red color
  r = color(238, 36, 0);

  drawTexture(TextureLayer, 30000);
}

function draw() {
  setGradient(c1, c2);

  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    mainVerticalX += (mouseX - mainVerticalX) * random(0.005, 0.01);
    leftVerticalX += (mouseX - leftVerticalX) * random(0.005, 0.01);
    rightVerticalX += (mouseX - rightVerticalX) * random(0.005, 0.01);
    topHorizontalY += (mouseY - topHorizontalY) * random(0.005, 0.01);
    middleHorizontalY += (mouseY - middleHorizontalY) * random(0.005, 0.01);
    bottomHorizontalY += (mouseY - bottomHorizontalY) * random(0.005, 0.01);
  }

  //red
  fill(r);
  noStroke();
  rect(0, 0, mainVerticalX, topHorizontalY);
       //yellow
  //fill(254,219,0);
  //noStroke();
  //rect(0,394,57,206);
  drawGradientRect(0, middleHorizontalY + 5, leftVerticalX, height - middleHorizontalY - 5, y1, y2);

  //blue
  drawGradientRect(
    mainVerticalX + 3,
    middleHorizontalY + 8,
    rightVerticalX - mainVerticalX - 4,
    bottomHorizontalY - middleHorizontalY - 3,
    b1,
    b2
  );

  image(TextureLayer, 0, 0);

  //lines on the layer
  LineLayer.clear();
  LineLayer.stroke(0);
  LineLayer.strokeWeight(12);
  LineLayer.line(mainVerticalX, 0, mainVerticalX, 800);
  //
  LineLayer.strokeWeight(19);
  LineLayer.line(0, topHorizontalY, 816, topHorizontalY);
  //
  LineLayer.line(0, middleHorizontalY, 816, middleHorizontalY);
  //
  LineLayer.strokeWeight(11);
  LineLayer.line(leftVerticalX, middleHorizontalY, leftVerticalX, 816);

  LineLayer.strokeWeight(11);
  LineLayer.line(mainVerticalX, bottomHorizontalY, rightVerticalX - 3, bottomHorizontalY);

  LineLayer.strokeWeight(11);
  LineLayer.line(rightVerticalX, middleHorizontalY + 11, rightVerticalX, 800);

  //FILTER
  LineLayer.filter(BLUR, 1.5, false);
  image(LineLayer, 0, 0);
}

//texture
function drawTexture(layer, density) {
  for (let i = 0; i < density; i++) {
    let x = random(width);
    let y = random(height);
    layer.stroke(0, random(15, 40));
    layer.point(x, y);
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
