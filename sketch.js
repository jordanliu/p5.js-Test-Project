

function setup() {
  createCanvas(600,600);
  background(255);
}

function draw() {
  let r1 = random(600);
  let r2 = random(600);
  let r3 = random(255);
  stroke(r3);
  line(r1, r2, 300, 300);

}

function mouseClicked(){
  save('myCanvas.png');
}