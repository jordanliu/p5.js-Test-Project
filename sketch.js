

function setup() {
  createCanvas(600,600);
}

function draw() {
  let r1 = random(600);
  let r2 = random(600);
  ellipse(r1, r2, 40, 40);

}

function mouseClicked(){
  save('myCanvas.png');
}