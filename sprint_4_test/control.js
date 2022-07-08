console.log("control.js is called");

class ControlObject extends InteractiveObject{
    constructor(canvas, dx, dy, dw, dh, dFill) {
        super();
        this.w = 0;
        this.h = 0;
        this.objectSet = [];
        this.dx = 250;
        this.dy = 10;
        this.dw = 540;
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

        if (this.inBounds(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.dw, this.dh)){
            this.mouseIsDown = true;
            this.mouseDown = true;
        }

    }

    mUp(e)
        {
        super.mUp(e);
        let temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[0][5]);
        this.objectSet.push(temp);
    }

    inBounds(xMouse, yMouse, x, y, w, h)
        if(xMouse > 250 && yMouse < 250+540 && yMouse > 10 && yMouse < 10+580) {
        //if(xMouse > x && yMouse < x+w && yMouse > y && yMouse < y+h){
           // console.log('its true')
            return true;
        }else{
            return false;
        }

    }


    update()
        {
        this.drawingArea(250, 10, 540, 580, 'red')
    //    if(this.xMouse < this.dx ){
    //        this.xMouse = this.dx }

    //    else if(this.xMouse > this.dx + this.dw){
    //        this.xMouse = this.dx + this.dw }

    //    if(this.yMouse < this.dy){
    //        this.yMouse = this.dy }

    //    else if(this.yMouse > this.dy + this.dh){
    //        this.yMouse = this.dy + this.dh }
            if(this.xMouse < 250 ){
                this.xMouse = 250 }

            else if(this.xMouse > 250 + 540){
                this.xMouse = 250 + 540 }

            if(this.yMouse < 10){
                this.yMouse = 10 }

            else if(this.yMouse > 10 + 580){
                this.yMouse = 10 + 580 }

        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        for(let i = 0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
        if (this.mouseIsDown) {
            console.log("mouse is down");
            this.drawGuide();
        }
    }

    drawGuide()
        {
        let x = this.xMouseStart;
        let y = this.yMouseStart;
        let w = this.w;
        let h = this.h;
        this.strokeRect(x,y,w,h,colArray[2][5]);
        this.drawLine(x,y,x+w, y+h, colArray[0][5]);
        this.drawLine(x,y+h,x+w,y, colArray[0][2]);
        this.drawStrokeCircle(x+ w/2, y +h/2, Math.abs(w/10), colArray[0][2]);
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