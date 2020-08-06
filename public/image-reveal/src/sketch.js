const baseColor = '#000010';
const numberOfNodes = 5;
const nodeSize = 300;
let Node;
let img, img2, img3;
let allNodes = [];
function preload(){
  img2 = loadImage('../assets/main.png');
  img3 = loadImage('../assets/back.png');
  img = createDiv("img");
  img.style('display: block;');
  img.style('background: black;');
  img.style('width: 100%;');
  img.style('height: 100%;');
  img.style('margin: auto;');
	img.style("background-image: url('../assets/dali.jpg')");
	img.style("background-repeat: no-repeat");
	img.style("z-index: -100");
	img.position(0, 0);
}
function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  Node = class {
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.speedX = (Math.random())*2-1;
      this.speedY = (Math.random())*2-1;
    }
    move(){
      this.x += this.speedX;
      this.y += this.speedY;
    }
    show(){
      if(this.x<width/8 || this.x>3*width/8) this.speedX = -(this.speedX);
      if(this.y<(height/4) || this.y>(3*height/4)) this.speedY = -(this.speedY);
      noStroke();
      fill('red');
      ellipse(this.x, this.y, nodeSize);
    }
  }
  for(i=0; i<numberOfNodes; i++){
    allNodes.push(new Node(random(width/4)+width/8, random(height/4)+height/4));
  }
}
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
  background('white');
  image(img3, width/2, height/2, width, height);
  image(img2, 7*width/10, height/2, 6*width/10, height/2);
  erase();
  for(i=0; i<numberOfNodes; i++){
    allNodes[i].show();
    allNodes[i].move();
  }
  noErase();
}