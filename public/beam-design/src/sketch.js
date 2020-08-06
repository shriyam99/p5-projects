const nodeSpeed = 15;
const trailLength = 50;
const headSize = 6;
const selectedColors = [
  '#ffffff',
  '#ffffff',
  '#32096b',
  '#ac37fa',
  '#bd0ba5'
];
let Node;
let allRays = [];
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  allRays = [];
  setup();
}
function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  Node = class {
    constructor(x, y, x2, y2, c){
      this.x = x;
      this.y = y;
      this.x2 = x2;
      this.y2 = y2;
      this.c = c;
      this.shift = [];
      this.trail = [];
      this.speedX = (nodeSpeed)*(this.x - this.x2)/(dist(this.x, this.y, this.x2, this.y2));
      this.speedY = (nodeSpeed)*(this.y - this.y2)/(dist(this.x, this.y, this.x2, this.y2));
    }
    setup(){
      for(let k=0; k<this.c.length; k++){
        this.shift.push({x: random(-5, 10), y:random(-5, 5)});
      }
    }
    move(){
      this.trail.unshift(new Node(this.x, this.y));
      if(this.trail.length>trailLength) this.trail.pop();
      this.x += this.speedX;
      this.y += this.speedY;
    }
    show(){
      if(this.x<0 || this.x>width) this.speedX = -(this.speedX);
      if(this.y<0 || this.y>height) this.speedY = -(this.speedY);
      noFill();
      for(let k=0; k<this.c.length; k++){
        stroke(this.c[k]);
        for(let i=1; i<this.trail.length; i++){
          strokeWeight(map(i, 0, trailLength, headSize, 0));
          beginShape();
          vertex(this.trail[i-1].x+this.shift[k].x, this.trail[i-1].y+this.shift[k].y);
          vertex(this.trail[i].x+this.shift[k].x, this.trail[i].y+this.shift[k].y);
          endShape();
        }
      }
      
    }
  }
  allRays.push(new Node(width/2-50, height/2-200, width/2+150, height/2, selectedColors));
  allRays.push(new Node(width/2+200, height/2-50, width/2, height/2+150, selectedColors));
  allRays.push(new Node(width/2+50, height/2+200, width/2-150, height/2, selectedColors));
  allRays.push(new Node(width/2-200, height/2+50, width/2, height/2-150, selectedColors));
  for(let i=0; i<allRays.length; i++) allRays[i].setup();
}


function draw(){
  background(color(0, 0, 0)); 
  for(let node of allRays){
    node.show();
    node.move();
  }
}