function MobileButton(x,y,type){
    this.x=x;
    this.y=y;
    this.Sz=100;
    this.type=type;
    this.clicked=false;
    this.show=function(){
        switch(this.type){
            case "up":
                noStroke();
                fill(255, 123, 123);
                rect(this.x,this.y,this.Sz,this.Sz);
                fill(190, 91, 91);
                beginShape();
                vertex(this.x+this.Sz/2,this.y+this.Sz/10);
                vertex(this.x+this.Sz/10,this.y+this.Sz/2);
                vertex(this.x+(9*(this.Sz/10)),this.y+this.Sz/2);
                endShape();
            break;
            case "left":
                noStroke();
                fill(158, 253, 179);
                rect(this.x,this.y,this.Sz,this.Sz);
                fill(113, 182, 128);
                beginShape();
                vertex(this.x+this.Sz/2,this.y+this.Sz/10);
                vertex(this.x+this.Sz/10,this.y+this.Sz/2);
                vertex(this.x+this.Sz/2,this.y+9*(this.Sz/10));
                endShape();
            break;
            case "right":
                noStroke();
                fill(158, 210, 253);
                rect(this.x,this.y,this.Sz,this.Sz);
                fill(114, 150, 180);
                beginShape();
                vertex(this.x+this.Sz/2,this.y+this.Sz/10);
                vertex(this.x+(9*(this.Sz/10)),this.y+this.Sz/2);
                vertex(this.x+this.Sz/2,this.y+9*(this.Sz/10));
                endShape();
            break;
            case "layer":
                noStroke();
                fill(187, 158, 253);
                rect(this.x,this.y,this.Sz,this.Sz);
                fill(139, 118, 187);
                beginShape();
                vertex(this.x+this.Sz/2,this.y+this.Sz/10);
                vertex(this.x+this.Sz/10,this.y+this.Sz/2);
                vertex(this.x+(9*(this.Sz/10)),this.y+this.Sz/2);
                vertex(this.x+this.Sz/2,this.y+(9*(this.Sz/10)));
                endShape();
            break;
        }
    };
    this.update=function(){
        if(mouseIsPressed){
            if(mouseX>this.x&&mouseX<this.x+this.Sz&&mouseY>this.y&&mouseY<this.y+this.Sz){
                this.clicked=true;
            }
        }else if(!mouseIsPressed){
            this.clicked=false;
        }
    };
}