let rSlider, gSlider, bSlider;

let fontsize = 40;

function setup() {
  // create canvas
  createCanvas(600, 600);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  fill(r,g,b);
  noStroke();
  ellipse(300,300,300,300);
  textAlign(CENTER);
  drawWords(width * 0.5,r,g,b);
}

function drawWords(x,r,g,b) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(255);
  text(r + "," + g +","+ b, x, 300);
}