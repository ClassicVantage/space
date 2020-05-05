var sun,mercury,venus,Earth,mars,jupiter,saturn,uranus,neptune
var sun1,mercury1,venus1,Earth1,mars1,jupiter1,saturn1,uranus1,neptune1
var angle=0
var angleSpeed=0.2
function preload(){
sun1=loadImage("sun.png")
mercury1=loadImage("mercury.png")
Earth1=loadImage("earth.png")
venus1=loadImage("venus.png")
mars1=loadImage("mars.png")
}







function setup() {
  createCanvas(400,400);
sun=createSprite(200,200,50,50)
mercury=createSprite(140,200,20,20)
venus=createSprite(100,200,20,20)
Earth=createSprite(60,200,20,20)
mars=createSprite(20,200,20,20) 

Earth.addImage(Earth1)
mercury.addImage(mercury1)
sun.addImage(sun1)
venus.addImage(venus1)
mars.addImage(mars1)
sun.scale=0.3
mercury.scale=0.13
venus.scale=0.15
Earth.scale=0.13
mars.scale=0.15
}


function draw() {
  push()
  background(0);  
  
  angleMode(DEGREES)
  translate(width/2,height/2)
rotate(angle)
  //to make the suns size increase over time
 if(World.frameCount%50===0){
   sun.scale=sun.scale+0.06
 }
 //to make sure that the sun covers up the planets
sun.depth=mercury.depth+1
sun.depth=venus.depth+1
sun.depth=Earth.depth+1
sun.depth=mars.depth+1
// to destroy the planets when the sun eats them
if(mercury.isTouching(sun)){
  mercury.destroy()
}
if(venus.isTouching(sun)){
  mercury.destroy()
}
if(Earth.isTouching(sun)){
  mercury.destroy()
}
if(mars.isTouching(sun)){
  mercury.destroy()
}

angle=angle+angleSpeed
pop()    
  


  
 
  
  drawSprites();
}