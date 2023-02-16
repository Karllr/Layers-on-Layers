function Player(x,y,mode){
    this.x=x;
    this.y=y;
    this.w=20;
    this.h=20;
    this.SavedW=20;
    this.SavedH=20;
    this.yvel=0;
    this.gravity=0.8;
    this.speed=0;
    this.falling=true;
    this.status=["down"/*Gravity*/, false/*Sticking*/, false/*Sliding*/, false/*Swimming*/,2/*Speed Type*/ ,"med","normal"];
    this.savedGravity="down";
    this.savedStick=false;
    this.savedSlide=false;
    this.savedSwim=false;
    this.savedSpeed=2;
    this.savedSize="normal";
    this.savedWeight="med";
    this.jumpHeight=-9.7;
    this.maxFallSpeed=8;
    this.accel=5;
    this.respawn={
      x:this.x,
      y:this.y
    };
    this.mode=mode;
    this.savedMode=this.mode;
    this.stuckAccel=this.accel*2/5;
    this.update=function(blocks,pushBlocks,orbs){
      //Main Controls
      {if(leftButton.clicked||keys[LEFT_ARROW]){
        this.speed=-this.accel;
        if(this.status[1]){
          this.speed=-this.stuckAccel;
        }
      }
      if(keys[RIGHT_ARROW]||rightButton.clicked){
        this.speed=this.accel;
        if(this.status[1]){
          this.speed=this.stuckAccel;
        }
      }
      if((!keys[RIGHT_ARROW]&&!rightButton.clicked)&&(!keys[LEFT_ARROW]&&!leftButton.clicked)&&!this.status[2]){
        this.speed=0;
      }
      this.x+=this.speed;
      this.yvel+=this.gravity;
      if((upButton.clicked||keys[UP_ARROW])) {
        switch(this.mode){
          case "cube":
            if(!this.falling){
            if(this.status[0]==="down"){
              this.yvel=this.jumpHeight;
            }
            if(this.status[0]==="up"){
              this.yvel=-this.jumpHeight;
            }
          }
          break;
          case "ship":
            if(this.status[0]==="down"){
              this.yvel=this.jumpHeight/2;
            }
            if(this.status[0]==="up"){
              this.yvel=-this.jumpHeight/2;
            }
          break;
        }
        
      }
      if(keys[82]){
        this.status[0]=this.savedGravity;
        this.status[1]=this.savedStick;
        this.status[2]=this.savedSlide;
        this.status[3]=this.savedSwim;
        this.status[4]=this.savedSpeed;
        this.x=this.respawn.x;
        this.y=this.respawn.y;
        this.yvel=0;
        Erase(push1);
        Erase(push2);
        LoadPush(push1,worldMap1);
        LoadPush(push2,worldMap2);
        Erase(blocks1);
        Erase(blocks2);
        Load(blocks1,worldMap1);
        Load(blocks2,worldMap2);
        deaths++;
        darkness=savedDarkness;
      }
      if(keys[16]&&mouseIsPressed){
        //console.log("Teleport");
        this.x=mouseX;
        this.y=mouseY+cam.y;
        this.yvel=0;
      }}
      
      /*if(this.status[0]==="down"){
        if(this.status[3]){
          this.gravity=0.2;
        }
        else{
        this.gravity=0.8;
        }
      }
      if(this.status[0]==="up"){
        if(this.status[3]){
          this.gravity=-0.2;
        }
        else{
        this.gravity=-0.8;
        }
      }*/
      if(this.status[4]===1){
        this.accel=2;
      }else if(this.status[4]===2){
        this.accel=5;
      }else if(this.status[4]===3){
        this.accel=15;
      }
      /*if(this.status[5]==="low"){
        this.maxFallSpeed=2;
        if(this.status[0]==="up"){
          this.gravity=-0.38;
        }
        if(this.status[0]==="down"){
          this.gravity=0.38;
        }
      }else if(this.status[5]==="med"){
        this.maxFallSpeed=8;
        if(this.status[0]==="up"){
          this.gravity=-0.8;
        }
        if(this.status[0]==="down"){
          this.gravity=0.8;
        }
      }else if(this.status[5]==="high"){
        this.maxFallSpeed=13;
        if(this.status[0]==="up"){
          this.gravity=-1.5;
        }
        if(this.status[0]==="down"){
          this.gravity=1.5;
        }
      }*/

      /*if(this.status[6]==="big"){
        if(this.w<40){
          this.y-=3;
          this.w+=3;
        }
        if(this.h<40){
          this.h+=3;
        }
      }else if(this.status[6]==="normal"){
        if(this.w>20){
          this.w-=3;
        }
        if(this.h>20){
          this.h-=3;
        }
      }*/
      this.falling=true;
      this.status[1]=false;
      this.status[2]=false;
      this.status[3]=false;
      this.collideWith(this.speed,0,blocks);
      this.collideWithPushableBlock(this.speed,0,pushBlocks);
      this.y+=this.yvel;
      this.collideWith(0,this.yvel,blocks);
      this.collideWithPushableBlock(0,this.yvel,pushBlocks);
      this.collideWithOrb(orbs);
      //this.collideWithPortal(portal);
      switch(this.mode){
        case "cube":
          switch(this.status[0]){
            case "up":
              switch(this.status[5]){
                case "low":
                  this.maxFallSpeed=2;
                  this.gravity=-0.38;
                break;
                case "med":
                  this.maxFallSpeed=8;
                  this.gravity=-0.8;
                break;
                case "high":
                  this.maxFallSpeed=13;
                  this.gravity=-1.5;
                break;
              }
            break;
            case "down":
              switch(this.status[5]){
                case "low":
                  this.maxFallSpeed=2;
                  this.gravity=0.38;
                break;
                case "med":
                  this.maxFallSpeed=8;
                  this.gravity=0.8;
                break;
                case "high":
                  this.maxFallSpeed=13;
                  this.gravity=1.5;
                break;
              }
            break;
          }
          switch(this.status[6]){
            case "normal":
              this.w=20;
              this.h=20;
            break;
            case "big":
              this.w=40;
              this.h=40;
            break;
          }
        break;
        case "ship":
          this.w=40;
          this.h=40;
          switch(this.status[0]){
            case "up":
              switch(this.status[5]){
                case "low":
                  this.gravity=-0.2375;
                break;
                case "med":
                  this.gravity=-0.5;
                break;
                case "high":
                  this.gravity=-0.9375;
                break;
              }
            break;
            case "down":
              switch(this.status[5]){
                case "low":
                  this.gravity=0.2375;
                break;
                case "med":
                  this.gravity=0.5;
                break;
                case "high":
                  this.gravity=0.9375;
                break;
              }
            break;
          }
        break;
      }
    };
    this.collideWith=function(xv,yv,blocks){
      for(var i=0;i<blocks.length;i++){
        var b=blocks[i];
        if(this.y+this.h > b.y &&
          this.y        < b.y+b.Sz &&
          this.x+this.w > b.x &&
          this.x        < b.x+b.Sz){
            //console.log("ouch");
            if(b.col<200){
              b.col+=5;
            }
            switch(b.type){
            case 1:
                if(this.status[0]==="down"){
                  if(yv>0) {
                    this.yvel = 0;
                    this.y = b.y-this.h;
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
                this.x = b.x-this.w;
              }
              // LEFT
              if(xv<0) {
                this.speed = 0;
                this.x = b.x+b.Sz;
              }
            }
            if(this.status[0]==="up"){
              if(yv>0) {
                this.yvel = 0;
                this.y = b.y-this.h;
                this.falling = true;
              }
              // TOP
              if(yv<0) {
                this.yvel = 0;
                this.falling = false;
                this.y = b.y+b.Sz;
              }
              // RIGHT
              if(xv>0) {
                this.speed = 0;
                this.x = b.x-this.w;
              }
              // LEFT
              if(xv<0) {
                this.speed = 0;
                this.x = b.x+b.Sz;
              }
            }
            break;
            case 2:
              this.status[0]=this.savedGravity;
              this.status[1]=this.savedStick;
              this.status[2]=this.savedSlide;
              this.status[3]=this.savedSwim;
              this.status[4]=this.savedSpeed;
              this.status[5]=this.savedWeight;
              this.w=this.SavedW;
              this.h=this.SavedH;
              this.status[6]=this.savedSize;
              this.x=this.respawn.x;
              this.y=this.respawn.y;
              this.yvel=0;
              this.mode=this.savedMode
              deaths++;
              Erase(blocks1);
              Erase(blocks2);
              Erase(orbs1);
              Erase(orbs2);
              Load(blocks1,worldMap1);
              Load(blocks2,worldMap2);
              LoadOrbs(orbs1,worldMap1);
              LoadOrbs(orbs2,worldMap2);
            break;
            case 3:
              if(yv>0) {
                this.yvel = -14;
                this.y = b.y-this.h;
                this.falling = true;
              }
              // TOP
              if(yv<0) {
                this.yvel = 14;
                this.falling = true;
                this.y = b.y+b.Sz;
              }
              // RIGHT
              if(xv>0) {
                this.speed = 0;
                this.x = b.x-this.w;
              }
              // LEFT
              if(xv<0) {
                this.speed = 0;
                this.x = b.x+b.Sz;
              }
              break;
            case 4:
                this.respawn.x=b.x+b.Sz/2-10;
                this.respawn.y=b.y+b.Sz-this.h;
                if(b.col<200){
                  b.col+=5;
                }
                this.savedGravity=this.status[0];
                this.savedStick=this.status[1];
                this.savedSlide=this.status[2];
                this.savedSwim=this.status[3];
                this.savedSpeed=this.status[4];
                this.savedWeight=this.status[5];
                savedDarkness=darkness;
                this.savedMode=this.mode;
                break;
            case 5:
                if(this.status[0]==="down"){
                  if(yv>0) {
                    this.yvel = 0;
                    this.y = b.y-this.h;
                    this.falling = true;
                    this.status[1]=true;
                  }
                  // TOP
                  if(yv<0) {
                    this.yvel = 0;
                    this.falling = false;
                    this.y = b.y+b.Sz;
                    this.status[1]=true;
                  }
                  // RIGHT
              if(xv>0) {
                  this.speed = 0;
                  this.x = b.x-this.w;
                  this.status[1]=true;
                  this.yvel=0.5;
                }
                // LEFT
                if(xv<0) {
                  this.speed = 0;
                  this.x = b.x+b.Sz;
                  this.status[1]=true;
                  this.yvel=0.5;
                }  
              }
              if(this.status[0]==="up"){
              if(yv>0) {
                this.yvel = 0;
                this.y = b.y-this.h;
                this.falling = false;
                this.status[1]=true;
              }
              // TOP
              if(yv<0) {
                this.yvel = 0;
                this.falling = true;
                this.y = b.y+b.Sz;
                this.status[1]=true;
              }
              // RIGHT
              if(xv>0) {
                this.speed = 0;
                this.x = b.x-this.w;
                this.status[1]=true;
                this.yvel=-0.5;
              }
              // LEFT
              if(xv<0) {
                this.speed = 0;
                this.x = b.x+b.Sz;
                this.status[1]=true;
                this.yvel=-0.5;
              }
            }
            break;
            case 6:
              if(this.status[0]==="down"){
                if(yv>0) {
                this.yvel = 0;
                this.y = b.y-this.h;
                this.falling = false;
                this.status[2]=true;
              }
              // TOP
              if(yv<0) {
                this.yvel = 0;
                this.falling = true;
                this.y = b.y+b.Sz;
                this.status[2]=true;
              }
              // RIGHT
              if(xv>0) {
                this.speed = 0;
                this.x = b.x-this.w;
                this.status[2]=true;
              }
              // LEFT
              if(xv<0) {
                this.speed = 0;
                this.x = b.x+b.Sz;
                this.status[2]=true;
              }
            }
            if(this.status[0]==="up"){
              if(yv>0) {
                this.yvel = 0;
                this.y = b.y-this.h;
                this.falling = true;
                this.status[2]=true;
              }
              // TOP
              if(yv<0) {
                this.yvel = 0;
                this.falling = false;
                this.y = b.y+b.Sz;
                this.status[2]=true;
              }
              // RIGHT
              if(xv>0) {
                this.speed = 0;
                this.x = b.x-this.w;
                this.status[2]=true;
              }
            // LEFT
            if(xv<0) {
                this.speed = 0;
                this.x = b.x+b.Sz;
                this.status[2]=true;
              }
            }
            break;
            case 7:
              this.falling=false;
              this.status[3]=true;
            break;
            case 8:
              switch(b.type2){
                case 1:
                  this.status[4]=1;
                break;
                case 2:
                  this.status[4]=2;
                break;
                case 3:
                  this.status[4]=3;
                break;
              }
            break;
            case 9:    
                  switch(b.type2){
                    case 1:
                      this.status[0]="up";
                    break;
                    case 2:
                      this.status[0]="down";
                    break;
                  }
            break;
            case 10:
              switch(b.type2){
                case 1:
                  this.status[5]="low";
                break;
                case 2:
                  this.status[5]="med";
                break;
                case 3:
                  this.status[5]="high";
                break;
              }
            break;
            case 11:
              if(this.status[0]==="down"){
                if(yv>0) {
                  this.yvel = 0;
                  this.y = b.y-this.h;
                this.falling = false;
            }
            // TOP
            if(yv<0) {
              blocks.splice(i,1);
            }
            // RIGHT
            if(xv>0) {
              blocks.splice(i,1);
            }
            // LEFT
            if(xv<0) {
              blocks.splice(i,1);
            }
          }
          if(this.status[0]==="up"){
            if(yv>0) {
              blocks.splice(i,1);
            }
            // TOP
            if(yv<0) {
              this.yvel = 0;
              this.falling = false;
              this.y = b.y+b.Sz;
            }
            // RIGHT
            if(xv>0) {
              blocks.splice(i,1);
            }
            // LEFT
            if(xv<0) {
              blocks.splice(i,1);
            }
            break;
          }
            break;
            case 12:
              switch(b.type2){
                case 1:
                  darkness=40;
                break;
                case 2:
                  darkness=0;
                break;
              }
            break;
            case 13:
              switch(b.type2){
                case 1:
                  this.status[6]="big";
                break;
                case 2:
                  this.status[6]="normal";
                break;
              }
            break;
            case 14:
              switch(b.type2){
                case 1:
                  this.mode="ship";
                break;
                case 2:
                  this.mode="cube";
                break;
              }
            break;
            }
      }else{
            if(b.col>100){
              b.col-=5;
            }
          }
        }
    };
    this.collideWithPushableBlock=function(xv,yv,blocks){
      for(var i=0;i<blocks.length;i++){
        var b=blocks[i];
        if(this.y+this.h > b.y &&
          this.y        < b.y+b.Sz &&
          this.x+this.w > b.x &&
          this.x        < b.x+b.Sz){
            if(yv>0) {
              this.yvel = 0;
              this.y = b.y-this.h;
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
          b.x+=this.speed;
          this.speed = 0;
          this.x = b.x-this.w;
        }
        // LEFT
        if(xv<0) {
          b.x+=this.speed;
          this.speed = 0;
          this.x = b.x+b.Sz;
        }
          }
        }
    };
    /*this.collideWithPortal=function(portal){
      for(var i=0;i<portal.length;i++){
        var b=portal[i];
        if(this.y+this.h > b.y &&
          this.y        < b.y+b.Sz &&
          this.x+this.w > b.x &&
          this.x        < b.x+b.Sz){
            switch(b.type){
              case 1:
                this.mode="ship";
              break;
            }
          }
        }
    };*/
    this.collideWithOrb=function(orbs){
      for(var i=0;i<orbs.length;i++){
        var b=orbs[i];
        if(collideRectCircle(this.x,this.y,this.w,this.h,b.x,b.y,b.Sz)){
          console.log(this.status[0]);
          if(keys[UP_ARROW]&&b.useful){
            switch(b.type){
              case 1:
                if(this.status[0]==="up"){
                  this.yvel=-this.jumpHeight;
                }
                if(this.status[0]==="down"){
                  this.yvel=this.jumpHeight;
                }
              break;
              case 2:
                //b.useful=false;
                if(this.status[0]==="up"){
                  this.status[0]="down";
                  this.yvel=5;
                }
                if(this.status[0]==="down"){
                  this.status[0]="up";
                  this.yvel=-5;
                }
              break;
              case 3:
                if(this.status[0]==="up"){
                  this.yvel=-this.jumpHeight/2.3;
                }
                if(this.status[0]==="down"){
                  this.yvel=this.jumpHeight/2.3;
                }
              break;
              case 4:
              break;
              case 5:
                if(this.status[0]==="up"){
                  this.yvel=-this.jumpHeight*2;
                }
                if(this.status[0]==="down"){
                  this.yvel=this.jumpHeight*2;
                }
              break;
              case 6:
                if(this.status[0]==="up"){
                  this.yvel=this.jumpHeight;
                }
                if(this.status[0]==="down"){
                  this.yvel=-this.jumpHeight;
                }
              break;
            }
          }
        }
      }
    };
    this.show=function(){
      switch(this.mode){
        case "cube":
          fill(r,g,b);
          noStroke();
          rect(this.x,this.y, this.w,this.h);
        break;
        case "ship":
          switch(this.status[0]){
            case "down":
              fill(75);
              noStroke();
              rect(this.x,this.y,20,40);
              fill(0);
              rect(this.x,this.y+20,40,20);
              fill(255);
              rect(this.x,this.y+20,20,20);
              fill(r,g,b);
              noStroke();
              rect(this.x+20,this.y+10,10,10);
            break;
            case "up":
              fill(75);
              noStroke();
              rect(this.x,this.y,20,40);
              fill(0);
              rect(this.x,this.y,40,20);
              fill(255);
              rect(this.x,this.y,20,20);
              fill(r,g,b);
              noStroke();
              rect(this.x+20,this.y+20,10,10);
            break;
          }
        break;
      }
    };
  }