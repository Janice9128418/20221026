var mic
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)

  var micLevel=mic.getLevel();

  push()
   translate(width/2,height/2)
   ellipse(0,0,400)
   ellipse(0,0,100,50)

   ellipse(-25,0,20)
   ellipse(25,0,20)

   ellipse(-75,-100,60)
   ellipse(75,-100,60)

   fill(0)
   ellipse(-75+map(mouseX,0,width,-15,15),-100+map(mouseY,0,height,-15,15),20)
   ellipse(75+map(mouseX,0,width,-15,15),-100+map(mouseY,0,height,-15,15),20)
  //  if(mouseIsPressed)
  //  {
  //   fill(255,0,0)
  //   arc(0,75,200,150,0,180)
  //  }
  //  else
  //  {
  //  fill(255,0,0)
  //  arc(0,75,200,75,0,180)
  //  }

  arc(0,75,200,75+micLevel*1000,0,180)
   fill(255)
   arc(0,74,200,50,0,180)
   console.log(micLevel)
  pop()
}
