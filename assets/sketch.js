function setup() {
  var canvasDiv = document.getElementById("p5canvas");
  var width = canvasDiv.clientWidth;
  var height = canvasDiv.scrollHeight;
  var canvas = createCanvas(width, height - 100);
  canvas.style("position", "absolute");
  canvas.style("top", "0");
  canvas.style("left", "0");
  canvas.style("width", "100%");
  canvas.style("height", "100%");
  canvas.style("z-index", "-1");
  canvas.parent("p5canvas");
  frameRate(16);
}

let pointX;
let pointY;
let morph = 0;
let pointCol;

function draw() {
  morph = random(0,1)
//  pointCol = lerpColor('#3FBEF0', '#CED639', morph);
  pointCol = lerpColor(color(63,190,240), color(206,214,57), morph);
  pointX = random(0, displayWidth);
  pointY = random(0, displayHeight);
  fill(pointCol);
  noStroke();
  ellipse(pointX, pointY, 10, 10);
}

function windowResized() {
  resizeCanvas(width, height);
}