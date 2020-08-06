var press = 39;
var score=0;
var n1 = 50, n;
var initx, inity, frame=10, l=0;
var skip;
var c1, c2;
var antx, anty;
var highscore=0;
var len;
var lengthofsnake = 10;
var a;
var bx = [];
var by = [];

function setup() {

  skip= width/10;
	c1= color(80, 12, 117);
	c2= color(233, 191, 255);
  frameRate(frame);
  let xw = window.innerWidth, xh = window.innerHeight;
  if(xw<500)
    createCanvas(window.innerWidth, window.innerHeight);
  else
    createCanvas(500, window.innerHeight);

  len = height / n1;
  n= int(width/len);
  antx = int(random(n - 1));
  anty = int(random(int((height/10)/len), (n1 - 1)));
  initx = lengthofsnake - 1;
  inity = int(n/2);
  for (var i = 0; i < lengthofsnake; i++) {
    bx[i] = i;
    by[i] = int(n/2);
  }
  a = new Array(n1);
  for (var i = 0; i < a.length; i++) {
    a[i] = new Array(n);
  }

  var k = 0,
    l = 0;
  for (i = 0; i < width; i += len) {
    l = 0;
    for (var j = 0; j < height; j += len) {
      a[k][l] = new sample(i, j, len);
      l++;
    }
    k++;
  }
}
function draw() {
  death();
  moving(press);
  for (var i = 0; i < n; i++)
    for (var j = 0; j < n1; j++) {
      for (k = 0; k < bx.length; k++) {
        if (i == bx[k] && j == by[k])
          a[i][j].f = c1;
      }
      if (i == antx && j == anty)
        a[i][j].f = color(255, 0, 0);
      a[i][j].show();
    }
push();
  fill(62, 84, 20, 50);
  noStroke();
  textSize(int(height/2));
  textAlign(CENTER)
  text(str(score), width/2, height*2/3);
  pop();
  push();
  stroke(c1);
  strokeWeight(3);
  // line(0, 40, width, 40);
  line(0, height/10, width, height/10);
  textSize(height/20);
  noStroke();
  fill(c1);
  text("Highscore:", width/15, height/15);
	textAlign(RIGHT);
  textSize(height/15);
  text(str(highscore), width-width/10, height/15);
  
  pop();
  if(l>0){
  push();
  stroke(0);
  fill(0);
  textSize(height/20);
  textAlign(CENTER);
  text('Game restarted', width/2, height/5);
  l--;
  pop();
}

}


function death() {
  var count = 0;
  for (var i = 0; i < bx.length - 1; i++) {
    if (initx == bx[i] && inity == by[i])
      count++;
    
  }
  if (count > 0) {
score=0;
frame=10;
l=20;
frameRate(frame);
    while (bx.length > 0) {
      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    }
    press=39;
    initx = lengthofsnake - 1;
    inity = int(n/2);
    for (var i = 0; i < lengthofsnake; i++) {
      bx[i] = i;
      by[i] = int(n/2);
    }
    count = 0;
  }

}

function moving(x) {
  if (x == 38) {
    inity--;
    if (inity == int((height/10)/len -1))
      inity = n1 - 1;
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {
      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();
  } else if (x == 40) {
    inity++;
    if (inity == n1)
      inity = int((height/10)/len);
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {

      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();
  } else if (x == 37) {
    initx--;
    if (initx == -1)
      initx = n - 1;
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {
      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();
  } else if (x == 39) {
    initx++;
    if (initx == n)
      initx = 0;
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {
      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    if(press!=40 && press!=38){
    press = keyCode;
    inity--;
    if (inity == int((height/10)/len  -1))
      inity = n1 - 1;
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {
      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();}
  } else if (keyCode == DOWN_ARROW) {
    if(press!=38 && press!=40){
    press = keyCode;
    inity++;
    if (inity == n1)
      inity = int((height/10)/len);
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {

      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();}
  } else if (keyCode == LEFT_ARROW) {
    if(press!=39 && press!=37){
    press = keyCode;
    initx--;
    if (initx == -1)
      initx = n - 1;
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {
      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();}
  } else if (keyCode == RIGHT_ARROW) {
    if(press!=37 && press!=39){
    press = keyCode;
    initx++;
    if (initx == n)
      initx = 0;
    bx.push(initx);
    by.push(inity);
    if (initx != antx || inity != anty) {
      a[bx[0]][by[0]].f = c2;
      bx.splice(0, 1);
      by.splice(0, 1);
    } else
      ant();}
  }
}

function ant() {

	score++;
	frame++;
	frameRate(frame);
  if(score>highscore)
    highscore=score;
  a[antx][anty].f = c2;
  antx = int(random(n - 1));
  anty = int(random(int((height/10)/len), (n1 - 1)));


}

function mouseDragged(){
if((abs(mouseX-pmouseX)<skip && abs(mouseY-pmouseY)>skip) || (abs(mouseX-pmouseX)>skip && abs(mouseY-pmouseY)<skip)){
if(abs(mouseX-pmouseX)>skip){
if((mouseX-pmouseX)<0){
if(press==38 || press==40)
press = 37
}
if((mouseX-pmouseX)>0){
  if(press==38 || press==40)
press = 39
}
}
if(abs(mouseY-pmouseY)>skip){
if((mouseY-pmouseY)<0){
  if(press==37 || press==39)
press = 38
}
if((mouseY-pmouseY)>0){
  if(press==37 || press==39)
press = 40
}
}
}
}

class sample {
  constructor(x, y, l = 10, f = c2) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.f = f;
  }
  show() {
    noStroke();
    fill(this.f)
    rect(this.x, this.y, this.l, this.l);
  }
}