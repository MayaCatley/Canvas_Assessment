console.log("control.js is called");

class ControlObject extends InteractiveObject{
    constructor(canvas) {
        super();
        this.w = 0;
        this.h = 0;
        this.objectSet = [];
    }


    mUp(e){
        super.mUp(e);
        this.w = this.xMouse - this.xMouseStart
        this.h = this.yMouse - this.yMouseStart
        let name = InteractiveButton.selected.text;
        let colourname = SwatchButton.colour;
        console.log(name)
            if (name === "rectangle"){
                console.log("inrectangle")
                let temp= new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                this.objectSet.push(temp);
            }else if(name === "ellipse"){
                console.log("ellipase")
                let temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                this.objectSet.push(temp);
            }
        this.mouseDown = false;
    }


    inBounds(xMouse, yMouse, x, y, w, h){
        if(xMouse > x && yMouse < x+w && yMouse > y && yMouse < y+h){
            return true;
        }else{
            return false;
        }

    }


    update(){
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        for(let i = 0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
        if (this.mouseIsDown) {
            console.log("mouse is down");
            this.draw();
        }
    }


    draw(){
        let x = this.xMouseStart;
        let y = this.yMouseStart;
        let w = this.w;
        let h = this.h;
        this.strokeRect(x,y,w,h,col[1][6]);
        this.drawLine(x,y,x+w, y+h, col[0][5]);
        this.drawLine(x,y+h,x+w,y, col[0][5]);
        this.drawStrokeCircle(x+ w/2, y +h/2, Math.abs(w/10), col[0][5]);
    }

}

ControlObject.prototype.strokeRect = strokeRect;
ControlObject.prototype.drawLine = drawLine;
ControlObject.prototype.drawStrokeCircle = drawStrokeCircle;