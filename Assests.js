function Block(x,y, type,type2){
    this.x=x;
    this.y=y;
    this.type=type;
    this.type2=type2;
    this.Sz=50;
    this.col=100;
    this.show=function(){
      switch(this.type){
        case 1:
          //Normal Block
          noStroke();
          fill(0);
          rect(this.x, this.y, this.Sz, this.Sz);
          break;
        case 2:
            //Death Block
            fill(255, 74, 74);
            noStroke();
            beginShape();
            vertex(this.x,this.y);
            vertex(this.x, this.y+this.Sz);
            vertex(this.x+this.Sz,this.y+this.Sz);
            vertex(this.x+this.Sz,this.y);
            vertex(this.x+this.Sz-5,this.y-5);
            vertex(this.x+this.Sz-10,this.y);
            vertex(this.x+this.Sz-15,this.y-5);
            vertex(this.x+this.Sz-20,this.y);
            vertex(this.x+this.Sz-25,this.y-5);
            vertex(this.x+this.Sz-30,this.y);
            vertex(this.x+this.Sz-35,this.y-5);
            vertex(this.x+this.Sz-40,this.y);
            vertex(this.x+this.Sz-45,this.y-5);
            endShape(CLOSE);
        break;
        case 3:
          //Trampoline
          fill(37,186,0);
          noStroke();
          rect(this.x, this.y, this.Sz, 10);
          rect(this.x, this.y+this.Sz-10, this.Sz, 10);
          stroke(125);
          strokeWeight(2);
          line(this.x, this.y+10, this.x+this.Sz, this.y+this.Sz-10);
          line(this.x+this.Sz, this.y+10, this.x, this.y+this.Sz-10);
          break;
        case 4:
            //Checkpoint
            noStroke();
            fill(45, 161, 145,this.col); 
            rect(this.x, this.y, this.Sz, this.Sz);
            fill(30, 110, 99,this.col+10);
            triangle(this.x+10,this.y+10,this.x+this.Sz-10,this.y+this.Sz/2,this.x+10,this.y+this.Sz-10);
            break;
        case 5:
              //Sticky Block
              noStroke();
              fill(163, 133, 0);
              rect(this.x,this.y, this.Sz,this.Sz);
              fill(194, 158, 0);
              rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
        break;
        case 6:
                //Slippy block
                noStroke();
                fill(83, 45, 168);
                rect(this.x,this.y, this.Sz, this.Sz);
                fill(120, 66, 245);  
                rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
                break;
        case 7:
          //Water
          fill(0, 243, 255,80);
          noStroke();
          rect(this.x,this.y, this.Sz, this.Sz);
        break;
        case 8:
          switch(this.type2){
            case 1:
          //Slow Speed
          fill(37, 201, 34,this.col);
          noStroke();
          rect(this.x,this.y, this.Sz, this.Sz);
          stroke(37, 201, 34,190);
          beginShape();
          vertex(this.x+10,this.y+10);
          vertex(this.x+this.Sz/2,this.y+this.Sz/2);
          vertex(this.x+10,this.y+this.Sz-10);
          endShape();
        break;
        case 2:
          //Normal Speed
          fill(37, 201, 34,this.col);
          noStroke();
          rect(this.x,this.y, this.Sz, this.Sz);
          fill(37, 201, 34,250);
          beginShape();
          vertex(this.x+10,this.y+10);
          vertex(this.x+this.Sz/2,this.y+this.Sz/2);
          vertex(this.x+10,this.y+this.Sz-10);
          endShape();
          beginShape();
          vertex(this.x+20,this.y+10);
          vertex(this.x+this.Sz/2+10,this.y+this.Sz/2);
          vertex(this.x+20,this.y+this.Sz-10);
          endShape();
        break;
        case 3:
          //Fast Speed
          fill(37, 201, 34,this.col);
          noStroke();
          rect(this.x,this.y, this.Sz, this.Sz);
          fill(37, 201, 34,250);
          beginShape();
          vertex(this.x+10,this.y+10);
          vertex(this.x+this.Sz/2,this.y+this.Sz/2);
          vertex(this.x+10,this.y+this.Sz-10);
          endShape();
          beginShape();
          vertex(this.x+20,this.y+10);
          vertex(this.x+this.Sz/2+10,this.y+this.Sz/2);
          vertex(this.x+20,this.y+this.Sz-10);
          endShape();
          beginShape();
          vertex(this.x+30,this.y+10);
          vertex(this.x+this.Sz/2+20,this.y+this.Sz/2);
          vertex(this.x+30,this.y+this.Sz-10);
          endShape();
        break;
          }
        break;
        case 9:
          switch(this.type2){
            case 1:
              //UP gravity
              fill(255, 51, 51,this.col);
              noStroke();
              rect(this.x,this.y,this.Sz,this.Sz);
              stroke(255, 51, 51);
              noFill();
              rect(this.x+this.Sz/2-5,this.y+this.Sz-15,10,10);
              line(this.x+this.Sz/2,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz/2-15);
              fill(255, 51, 51);
              triangle(this.x+this.Sz/2,this.y+this.Sz/2-15,this.x+this.Sz/2-5,this.y+this.Sz/2-7,this.x+this.Sz/2+5,this.y+this.Sz/2-7);
            break;
            case 2:
              //Down Gravity
              fill(0, 98, 255,this.col);
              noStroke();
              rect(this.x,this.y,this.Sz,this.Sz);
              stroke(66, 139, 255);
              noFill();
              rect(this.x+this.Sz/2-5,this.y+5,10,10);
              line(this.x+this.Sz/2,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz/2+15);
              fill(66, 139, 255);
              triangle(this.x+this.Sz/2,this.y+this.Sz/2+15,this.x+this.Sz/2-5,this.y+this.Sz/2+5,this.x+this.Sz/2+5,this.y+this.Sz/2+5);
            break;
          }
        break;
        case 10:
          switch(this.type2){
            case 1:
              //Low grav
              noStroke();
              fill(255, 187, 0,this.col);
              rect(this.x,this.y,this.Sz,this.Sz);
              stroke(255,187,0);
              strokeWeight(2);
              noFill();
              rect(this.x+this.Sz/2-5,this.y+this.Sz/2,10,10);
              line(this.x+this.Sz/2,this.y+this.Sz/2-10,this.x+this.Sz/2,this.y+this.Sz/2-5);
              line(this.x+this.Sz/2-4,this.y+this.Sz/2-10,this.x+this.Sz/2-4,this.y+this.Sz/2-5);
              line(this.x+this.Sz/2+4,this.y+this.Sz/2-10,this.x+this.Sz/2+4,this.y+this.Sz/2-5);
            break;
            case 2:
              // mid grav
              noStroke();
              fill(68, 207, 80,this.col);
              rect(this.x,this.y,this.Sz,this.Sz);
              stroke(68, 207, 80);
              strokeWeight(2);
              noFill();
              rect(this.x+this.Sz/2-5,this.y+this.Sz/2+5,10,10);
              line(this.x+this.Sz/2,this.y+this.Sz/2-10,this.x+this.Sz/2,this.y+this.Sz/2);
              line(this.x+this.Sz/2-4,this.y+this.Sz/2-10,this.x+this.Sz/2-4,this.y+this.Sz/2);
              line(this.x+this.Sz/2+4,this.y+this.Sz/2-10,this.x+this.Sz/2+4,this.y+this.Sz/2);
            break;
            case 3:
              //high grav
              noStroke();
              fill(56, 165, 171,this.col);
              rect(this.x,this.y,this.Sz,this.Sz);
              stroke(56, 165, 171);
              strokeWeight(2);
              noFill();
              rect(this.x+this.Sz/2-5,this.y+this.Sz/2+5,10,10);
              line(this.x+this.Sz/2,this.y+this.Sz/2-15,this.x+this.Sz/2,this.y+this.Sz/2);
              line(this.x+this.Sz/2-4,this.y+this.Sz/2-15,this.x+this.Sz/2-4,this.y+this.Sz/2);
              line(this.x+this.Sz/2+4,this.y+this.Sz/2-15,this.x+this.Sz/2+4,this.y+this.Sz/2);
            break;
          }
        break;
        case 11:
          noStroke();
          fill(131);
          rect(this.x,this.y,this.Sz,this.Sz);
          fill(200,200,200);
          stroke(131);
          strokeWeight(2);
          rect(this.x,this.y,3*this.Sz/5,this.Sz/4);
          rect(this.x+3*this.Sz/5,this.y,1.89*this.Sz/5,this.Sz/4);
          rect(this.x+1.89*this.Sz/5,this.y+this.Sz/4,3*this.Sz/5,this.Sz/4);
          rect(this.x,this.y+this.Sz/4,1.89*this.Sz/5,this.Sz/4);
          rect(this.x,this.y+1.02*this.Sz/2,3*this.Sz/5,this.Sz/4);
          rect(this.x+3*this.Sz/5,this.y+1.02*this.Sz/2,1.89*this.Sz/5,this.Sz/4);
          rect(this.x+1.89*this.Sz/5,this.y+3.1*this.Sz/4,3*this.Sz/5,this.Sz/4);
          rect(this.x,this.y+3.1*this.Sz/4,1.89*this.Sz/5,this.Sz/4);
        break;
        case 12:
            //noStroke();
            //fill(0, 65, 156);
            //rect(this.x-3,this.y-3,this.Sz+6,this.Sz+6);
            switch(this.type2){
              case 1:
                for(var i=0;i<50;i++){
                  var colorA=color(128, 0, 255);
                  var colorB=color(255, 0, 255);
                  var c=lerpColor(colorA,colorB,i/100);
                  c.setAlpha(50);
                  stroke(c);
                  line(this.x,this.y+i,this.x+this.Sz-1,this.y+i);
              }
              break;
              case 2:
                for(var i=0;i<50;i++){
                  var colorA=color(255, 230, 0);
                  var colorB=color(255, 0, 255);
                  var c=lerpColor(colorA,colorB,i/100);
                  c.setAlpha(50);
                  stroke(c);
                  line(this.x,this.y+i,this.x+this.Sz-1,this.y+i);
              }
              break;
            }
        break;
        case 13:
          switch(this.type2){
                    case 1:
                        fill(130, 207, 255,100);
                        noStroke();
                        rect(this.x,this.y,this.Sz,this.Sz);
                        fill(89, 191, 255);
                        rect(this.x+5-2,this.y+20,this.Sz/5,this.Sz/5);
                        beginShape();
                        vertex(this.x+this.Sz/2-7,this.y+20);
                        vertex(this.x+this.Sz/2+10-7,this.y+this.Sz/2);
                        vertex(this.x+this.Sz/2-7,this.y+this.Sz-20);
                        endShape(CLOSE);
                        rect(this.x+30-2,this.y+15,20,20);
                    break;
                    case 2:
                        fill(130, 207, 255,100);
                        noStroke();
                        rect(this.x,this.y,this.Sz,this.Sz);
                        fill(89, 191, 255);
                        rect(this.x+41-2,this.y+20,this.Sz/5,this.Sz/5);
                        beginShape();
                        vertex(this.x+this.Sz/2-1,this.y+20);
                        vertex(this.x+this.Sz/2+10-1,this.y+this.Sz/2);
                        vertex(this.x+this.Sz/2-1,this.y+this.Sz-20);
                        endShape(CLOSE);
                        rect(this.x+29-30,this.y+15,20,20);
                    break;
          }
        break;
        case 14:
          switch(this.type2){
            case 1:
              var a=color(238, 0, 255);
                var b=color(135, 0, 145);
              for(var i=0;i<50;i++){
                var c=lerpColor(a,b,i/150);
                stroke(c);
                line(this.x,this.y+i,this.x+this.Sz,this.y+i);
            }
            break;
            case 2:
              var a=color(41, 255, 105);
                var b=color(26, 161, 66);
              for(var i=0;i<50;i++){
                var c=lerpColor(a,b,i/150);
                stroke(c);
                line(this.x,this.y+i,this.x+this.Sz,this.y+i);
              }
            break;
            case 3:
            break;
          }
        break;
      }
    };
}
function PushableBlock(x,y){
  this.x=x;
  this.y=y;
  this.Sz=50;
  this.yvel=0;
  this.gravity=0.8;
  this.update=function(blocks,player){
    //this.collideWithBlock(player.speed,0,blocks);
    //this.y+=this.yvel;
    //this.yvel+=this.gravity;
    //this.collideWithBlock(0,this.yvel,blocks);
  };
  /*this.collideWithBlock=function(xv,yv,blocks){
    for(var i=0;i<blocks.length;i++){
      var b=blocks[i];
      if(this.y+this.Sz > b.y &&
        this.y        < b.y+b.Sz &&
        this.x+this.Sz > b.x &&
        this.x        < b.x+b.Sz){
          if(yv>0) {
            this.yvel = 0;
            this.y = b.y-this.Sz;
            this.falling = false;
          }
          // TOP
          if(yv<0) {
            this.yvel = 0;
            this.falling = true;
            this.y = b.y+b.Sz;
          }
          // RIGHT
          if(xv>0) {
            this.speed = 0;
            this.x = b.x-this.Sz;
          }
          // LEFT
          if(xv<0) {
            this.speed = 0;
            this.x = b.x+b.Sz;
          }
        }
      }
  };*/
  this.show=function(){
    strokeWeight(2);
    fill(252, 186, 3);
    stroke(201, 141, 0);
    rect(this.x,this.y,this.Sz,this.Sz);
  };
}
function Portal(x,y,type){
  this.x=x;
  this.y=y;
  this.type=type;
  this.w=20;
  this.h=150;
  this.show=function(){
    switch(this.type){
      case 1:
                var a=color(238, 0, 255);
                var b=color(135, 0, 145);
                //translate(this.x,this.y);
                //rect(0,0,this.w,this.h);
                noStroke();
                fill(0);
                rect(this.x+30,this.y,this.w,15);
                rect(this.x+30,this.y+30,this.w*2,15);
                rect(this.x+30,this.y+60,this.w*3,15);
                rect(this.x+30,this.y+75,this.w*3,15);
                rect(this.x+30,this.y+105,this.w*2,15);
                rect(this.x+30,this.y+135,this.w,15);
                for(var i=0;i<150;i++){
                    var c=lerpColor(a,b,i/150);
                    stroke(c);
                    line(this.x,this.y+i,this.x+this.w,this.y+i);
                }
                //rect(this.x,this.y,this.w,this.h);
                
            break;
    }
  };
}
function Orb(x,y,type){
  this.x=x;
  this.y=y;
  this.type=type;
  this.Sz=50;
  this.useful=true;
  this.show=function(){
    switch(this.type){
      case 1:
          noFill();
          stroke(255);
          strokeWeight(2);
          ellipse(this.x,this.y,this.Sz,this.Sz);
          fill(255, 238, 0);
          ellipse(this.x,this.y,this.Sz/2,this.Sz/2);
      break;
      case 2:
          noFill();
          stroke(255);
          strokeWeight(2);
          ellipse(this.x,this.y,this.Sz,this.Sz);
          fill(0, 242, 255);
          ellipse(this.x,this.y,this.Sz/1.5,this.Sz/1.5);
      break;
      case 3:
          noFill();
          stroke(255);
          strokeWeight(2);
          ellipse(this.x,this.y,2*this.Sz/3,2*this.Sz/3);
          fill(255, 0, 242);
          ellipse(this.x,this.y,this.Sz/3,this.Sz/3);
      break;
      case 4:
          noFill();
          stroke(255);
          strokeWeight(2);
          //ellipse(this.x,this.y,this.Sz,this.Sz);
          arc(this.x,this.y,this.Sz,this.Sz,20,70);
          arc(this.x,this.y,this.Sz,this.Sz,110,160);
          arc(this.x,this.y,this.Sz,this.Sz,200,250);
          arc(this.x,this.y,this.Sz,this.Sz,290,340);
          fill(0, 255, 106);
          ellipse(this.x,this.y,this.Sz/1.5,this.Sz/1.5);
      break;
      case 5:
          noFill();
          stroke(255);
          strokeWeight(2);
          ellipse(this.x,this.y,this.Sz,this.Sz);
          
          fill(255, 0, 68);
          ellipse(this.x,this.y,this.Sz/1.5,this.Sz/1.5);
      break;
      case 6:
          noFill();
          stroke(255);
          strokeWeight(2);
          //ellipse(this.x,this.y,this.Sz,this.Sz);
          arc(this.x,this.y,this.Sz,this.Sz,10,35);
          arc(this.x,this.y,this.Sz,this.Sz,55,80);
          arc(this.x,this.y,this.Sz,this.Sz,100,125);
          arc(this.x,this.y,this.Sz,this.Sz,145,170);
          arc(this.x,this.y,this.Sz,this.Sz,190,215);
          arc(this.x,this.y,this.Sz,this.Sz,235,260);
          arc(this.x,this.y,this.Sz,this.Sz,280,305);
          arc(this.x,this.y,this.Sz,this.Sz,325,350);
          fill(28, 28, 28);
          ellipse(this.x,this.y,this.Sz/1.5,this.Sz/1.5);
      break;
  }
  };
}