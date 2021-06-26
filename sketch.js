var bgimg
var iss,issimg
var craft,craftimg1,craftimg2,craftimg3,craftimg4
var hasDocked=false
function preload(){
craftimg1=loadImage("spacecraft1.png")
craftimg2=loadImage("spacecraft2.png")
craftimg3=loadImage("spacecraft3.png")
craftimg4=loadImage("spacecraft4.png")
issimg=loadImage("iss.png")
bgimg=loadImage("spacebackground.jpg")
}
function setup() {
  createCanvas(800,500);
  craft=createSprite(400,420,50,50)
  craft.addImage(craftimg1)
  craft.scale=0.3
  iss=createSprite(330,200,50,50)
  iss.addImage(issimg)
  iss.scale=1.2
}

function draw() {
  background(bgimg);  
  craft.addImage(craftimg1)
  if(!hasDocked){
    craft.x=craft.x+random(-1,1)
  
  if(keyDown(UP_ARROW)){
    craft.y = craft.y -2
    craft.addImage(craftimg2)
  }
  if(keyDown(DOWN_ARROW)){
    craft.addImage(craftimg2)
  }
  if(keyDown(LEFT_ARROW)){
    craft.x = craft.x -2
    craft.addImage(craftimg3)
  }
  if(keyDown(RIGHT_ARROW)){
    craft.x = craft.x +2
    craft.addImage(craftimg4)
  }}
  if(craft.y<=(iss.y+70)&& craft.x<=(iss.x-10)){
    hasDocked=true
    textSize(30)
    fill("white")
    text("Docked Successfully",300,450)
  }
    
  drawSprites();
}