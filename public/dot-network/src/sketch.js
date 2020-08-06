let numberOfNodes;
const connectDist = 130;
const baseColor = '#000015';
let Node;
let allNodes = [];
let tempDist;
function setup(){
  numberOfNodes = Math.floor(map(window.innerWidth, 1500, 300, 75, 25));
  createCanvas(window.innerWidth, window.innerHeight);
  background(baseColor);
  Node = class {
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.speedX = random(-0.5, 0.5);
      this.speedY = random(-0.5, 0.5);
    }
    move(){
      this.x += this.speedX;
      this.y += this.speedY;
    }
    show(){
      if(this.x<0 || this.x>width) this.speedX = -(this.speedX);
      if(this.y<0 || this.y>height) this.speedY = -(this.speedY);
      noStroke();
      stroke(color(252, 231, 47));
      strokeWeight(10);
      point(this.x, this.y);
    }
  }
  for(i=0; i<numberOfNodes; i++){
    allNodes.push(new Node(random(width), random(height)));
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  allNodes = [];
  setup();
  console.log(numberOfNodes);
}

function draw(){
  background(baseColor);
  for(i=0; i<numberOfNodes; i++){
    allNodes[i].show();
    allNodes[i].move();
  }
  for(i=0; i<numberOfNodes; i++){
    for(j=0; j<numberOfNodes; j++){
      if(i===j) continue;
      tempDist = dist(allNodes[i].x, allNodes[i].y, allNodes[j].x, allNodes[j].y);
      if(tempDist<connectDist){
        stroke(color(252, 231, 47));
        strokeWeight(map(tempDist, 0, connectDist,2 , 0));
        line(allNodes[i].x, allNodes[i].y, allNodes[j].x, allNodes[j].y)
      }
    }
  }
}