var keys=[];
var darkness=0;
var savedDarkness=0;
var mainActive=false;
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function keyPressed(){
  keys[keyCode]=true;
  if(keyCode===13){
    layer++;
  }
}
function keyReleased(){keys[keyCode]=false;}
var P=-1;
var E=11;
var player;
var blocks1=[];
var blocks2=[];
var push1=[];
var push2=[];
var portals1=[];
var portals2=[];
var orbs1=[];
var orbs2=[];
var layer=1;
var maxLayers=2;
var minLayers=1;
var Optionss;
var upButton, leftButton, rightButton, layerButton;
var cam={
  x:0,
  y:0
};
function setup() {
  createCanvas(windowWidth, windowHeight);
  upButton=new MobileButton(0,height-100,"up");
  rightButton=new MobileButton(width-100,height-100,"right");
  leftButton=new MobileButton(width-200,height-100,"left");
  layerButton=new MobileButton(100,height-100,"layer");
  Optionss=new Options(0,0,width/8,300,50);
  player=new Player(550,380,"cube");
  Load(blocks1,worldMap1);
  Load(blocks2,worldMap2);
  LoadPush(push1,worldMap1);
  LoadPush(push2,worldMap2);
  LoadOrbs(orbs1,worldMap1);
  LoadOrbs(orbs2,worldMap2);
  //LoadPortals(portals1,worldMap1);
  //LoadPortals(portals2,worldMap2);
}
function game(){
  {cam.x=lerp(cam.x, width/2-player.x, 0.05);
  cam.y=lerp(cam.y, height/2-player.y, 0.05);
  background(50-darkness);
  leftButton.update();
  upButton.update();
  rightButton.update();
  layerButton.update();
  upButton.show();
  rightButton.show();
  leftButton.show();
  layerButton.show();
  push();
  translate(width/2,height/2);
  scale((width+height)/(2300+(player.w+player.h)*4));
  translate(-width/2,-height/2);
  translate(cam.x,cam.y);
  if(layer===1){
  player.update(blocks1,push1,orbs1);
  }else if(layer===2){
    player.update(blocks2,push2,orbs2);
  }
  player.show();
  
  if(layer===1){
    for(var i=0; i<blocks1.length;i++){
      if(dist(player.x,0,blocks1[i].x,0)<renderDistance*50){
        blocks1[i].show();
      }
    }
    for(var i=0;i<push1.length;i++){
      push1[i].update(blocks1,player);
      if(dist(player.x,0,push1[i].x,0)<renderDistance*50){
      push1[i].show();}
    }
    for(var i=0;i<orbs1.length;i++){
      if(dist(player.x,0,orbs1[i].x,0)<renderDistance*50){
      orbs1[i].show();
    }
    }
  }else if(layer===2){
    for(var i=0; i<blocks2.length;i++){
      if(dist(player.x,0,blocks2[i].x,0)<renderDistance*50){
        blocks2[i].show();
      }
    }
    for(var i=0;i<push2.length;i++){
      push2[i].update(blocks2,player);
      if(dist(player.x,0,push2[i].x,0)<renderDistance*50){
        push2[i].show();}
    }
  }
  if(layer>maxLayers){
    layer=minLayers;
  }
  pop();
  fill(255);
  textSize(20);
  text("Deaths:"+ deaths, width/2-30,20);
  text("Render Distance:"+renderDistance+" Blocks",width/2-30,40);
  text(round(frameCount/60)+" Seconds",width/2-30,60);
  Optionss.update();
  Optionss.show();
  //console.log(player.mode);
}
}
function mouseClicked(){
  if(layerButton.clicked){
    layer++;
  }
}
var deaths=0;
var fps=60;
function draw() {
  frameRate(fps);
  game();
}
