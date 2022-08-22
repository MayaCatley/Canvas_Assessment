console.log("control.js is called");

class ControlObject extends InteractiveObject{
    constructor(canvas, dx, dy, dw, dh) {
        super();
        this.w = 0;
        this.h = 0;
        this.objectSet = [];
        this.dx = 250;
        this.dy = 10;
        this.dw = 630;
        this.dh = 580;

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
    }

    mDown(e)
    {
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        console.log(this.inBounds(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.dw, this.dh))

        if (this.inBounds(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.dw, this.dh)){
            //this.mouseIsDown = true;
            this.mouseDown = true;
        }

    }


    mUp(e) {
        super.mUp(e);
        let name = "";
        if (this.mouseDown) {
            this.w = this.xMouse - this.xMouseStart
            this.h = this.yMouse - this.yMouseStart
            name = InteractiveButton.selected.text;
            let colourname = SwatchButton.colour;

            if (name === "rectangle") {
                let temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                this.objectSet.push(temp);
            } else if (name === "ellipse") {
                let temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                this.objectSet.push(temp);
            } else if (name === "triangle") {
                let temp = new Triangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                this.objectSet.push(temp);
            } else if (name === "circle") {
                let temp = new Circle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                this.objectSet.push(temp);
            }

            this.mouseDown = false;
        }
    }


    inBounds(xMouse, yMouse, x, y, w, h){

        if(xMouse > x && xMouse < x+w && yMouse > y && yMouse < y+h){
            return true;
        }else{
            return false;
        }

    }


    update(){
        this.drawingArea(this.dx, this.dy, this.dw, this.dh)
        if(this.xMouse < this.dx ){
            this.xMouse = this.dx }

        else if(this.xMouse > this.dx + this.dw){
            this.xMouse = this.dx + this.dw }

        if(this.yMouse < this.dy){
            this.yMouse = this.dy }

        else if(this.yMouse > this.dy + this.dh){
            this.yMouse =this.dy + this.dh }

        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        for(let i = 0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
        if (this.mouseDown) {

            this.drawGuide();
        }

        name = InteractiveButton.selected.text;
        console.log(name)
        if(name === "undo"){
            this.objectSet.pop()
            InteractiveButton.selected = ""
        }
        else if(name === "clear"){
            this.objectSet = []

        }
    }


    drawGuide(){
        let x = this.xMouseStart;
        let y = this.yMouseStart;
        let w = this.w;
        let h = this.h;
        this.strokeRect(x,y,w,h,col[1][6]);
        this.drawLine(x,y,x+w, y+h, col[0][5]);
        this.drawLine(x,y+h,x+w,y, col[0][5]);
        this.drawStrokeCircle(x+ w/2, y +h/2, Math.abs(w/10), col[0][5]);
    }

    drawingArea(x,y,w,h,dFill)
    {
        ctx.beginPath();
        ctx.fillStyle= 'white'
        ctx.rect(x,y,w,h);
        ctx.fill();
    }
}


ControlObject.prototype.strokeRect = strokeRect;
ControlObject.prototype.drawLine = drawLine;
ControlObject.prototype.drawStrokeCircle = drawStrokeCircle;