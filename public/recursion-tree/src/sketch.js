const baseColor = '#daffc9';
const col = [
  [61, 32, 0],
  [4, 120, 9]
];
const otherColors = [
  '#ffe926',
  '#71ff3d',
  '#6fff00',
  '#047809',
  '#fc670a',
  '#e37705'  
];
function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(baseColor);
}
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function tree(l){
  if(random(100)<25 && l<2) {fill('red'); ellipse(0, 0, Math.floor(random(3)));}
  if(l<8) return;
  let w = map(l, 200, 10, 20, 0.5);
  strokeWeight(w);
  if(l<10) stroke(otherColors[Math.floor(random(otherColors.length))]);
  else stroke(color(map(w, 20, 0.5, col[0][0], col[1][0]),map(w, 20, 0.5, col[0][1], col[1][1]),map(w, 20, 0.5, col[0][2], col[1][2])));
  let r = random(-l);
  if(l>190) {
    r=-250;
    fill(61, 32, 0);
    noStroke();
    quad(-20, 0, 20, 0, 10, r, -10, r);
  }
  else line(0, 0, 0, r); 

  push();
  translate(0, r);
  if(l>190) rotate(random(-PI/3,-PI/10));
  else if(l>150) rotate(random(-PI/2, -PI/10));
  else if(l>100) rotate(random(-PI/3,-PI/10));
  else rotate(random(-PI/5, -PI/10));
  tree(l*0.1);
  tree(l*0.3);
  tree(l*0.79);
  pop();

  push();
  translate(0, r);
  if(l>190) rotate(random(PI/10, PI/3));
  else if(l>150) rotate(random(PI/10, PI/2));
  else if(l>100) rotate(random(PI/10, PI/3));
  else rotate(random(PI/10, PI/4));
  tree(l*0.1);
  tree(l*0.3);
  tree(l*0.79);
  pop();
}

function draw(){
  frameRate(0.1);
  background(baseColor);
  if(width<500){
    push();
    translate(width/2, height);
    tree(200);
    pop();
  }
  else{
    push();
    translate(width/8, height);
    tree(200);
    pop();
    push();
    translate(7*width/8, height);
    tree(200);
    pop();
  }
  noLoop()
}