function Options(x,y,w,h,col){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.col=col;
    var RenderSlider=createSlider(2,30,8,1);
    var RedSlider=createSlider(0,255,0);
    var BlueSlider=createSlider(0,255,100);
    var GreenSlider=createSlider(0,255,255);
    this.show=function(){
        RenderSlider.position(this.x,this.y+50);
        RedSlider.position(this.x,this.y+110);
        GreenSlider.position(this.x,this.y+155);
        BlueSlider.position(this.x,this.y+200);
        RenderSlider.style('this.w','80px');
        RedSlider.style('this.w','80px');
        GreenSlider.style('this.w','80px');
        BlueSlider.style('this.w','80px');
        strokeWeight(3);
        fill(255, 237, 199,this.col);
        rect(this.x,this.y,this.w,this.h);
        fill(0);
        textSize(20);
        text("Options",this.x,this.y+20);
        text("Render Dist:",this.x,this.y+40);
        text("Color:", this.x,this.y+90);
        text("RED:",this.x+3,this.y+110);
        text("GREEN:",this.x+3,this.y+150);
        text("BLUE:",this.x+3,this.y+190);
        fill(r,g,b);
        rect(this.x+this.w/4,this.y+220,50,50);
    };
    this.update=function(){
        renderDistance=RenderSlider.value();
        r=RedSlider.value();
        b=BlueSlider.value();
        g=GreenSlider.value();
        if(mouseX>this.x&&mouseX<this.x+this.w&&mouseY<this.y+this.h&&mouseY>this.y){
            if(this.col<255){
                this.col+=4;
            }
        }else{
            if(this.col>50){
                this.col-=4;
            }
        }
    };
}