console.log("init.js is called");

let col= [
    [ // opaque
        // black (0)         grey (1)              white (2)
        "rgba(0,0,0,1)" , "rgba(150,150,150,1)" , "rgba(255,255,255,1)" ,
        // pink (3)              purple (4)             deep blue (5)
        "rgba(243,92,155,1)" , "rgba(153,19,206,1)" , "rgba(16,16,162,1)" ,
        // pale blue (6)         yellow (7)              bright yellow (8)
        "rgba(135,211,243,1)" , "rgba(246,244,193,1)" , "rgba(250,250,0,1)"
    ],
    [ // semi-transparent
        // black (0)         grey (1)              white (2)
        "rgba(0,0,0,0.5)" , "rgba(150,150,150,0.5)" , "rgba(255,255,255,0.5)" ,
        // pink (3)              purple (4)             deep blue (5)
        "rgba(243,92,155,0.5)" , "rgba(153,19,206,0.5)" , "rgba(16,16,162,0.5)" ,
        // pale blue (6)         yellow (7)              bright yellow (8)
        "rgba(135,211,243,0.5)" , "rgba(246,244,193,0.5)" , "rgba(250,250,0,0.5)"
    ]
]

let colArray= [
    [ // opaque
        // black (0)         grey (1)              white (2)
        "rgba(0,0,0,1)" , "rgba(150,150,150,1)" , "rgba(255,255,255,1)" ,
        // red (3)              orange (4)          yellow (5)
        "rgba(251, 50, 7, 1)" , "rgba(251, 143, 7, 1)" , "rgba(248, 251, 7, 1)" ,
        // green (6)           cyan (7)               blue  (8)
        "rgba(7, 251, 9, 1)" , "rgba(36, 243, 217, 1)" , "rgba(27, 45, 251, 1)",
        // pink (9)              magenta (10)              Skin1 (11)
        "rgba(251, 7, 247, 1)" , "rgba(218, 43, 254, 1)" , "rgba(255, 219, 172, 1)" ,
        // Skin2 (12)               Skin2 (13)                Skin3  (14)
        "rgba(241, 194, 125, 1)" , "rgba(224, 172, 105, 1)" , "rgba(141, 85, 36, 1)",
        // Skin4 (15)            Skin5 (16)             Skin5 (17)
        "rgba(94, 49, 35, 1)" , "rgba(94, 49, 35, 1)" , "rgba(64, 25, 12, 1)"
    ],
    [ // semi-transparent
        /// black (0)         grey (1)              white (2)
        "rgba(0,0,0,0.5)" , "rgba(150,150,150,0.5)" , "rgba(255,255,255,0.5)" ,
        // red (3)              orange (4)          yellow (5)
        "rgba(251, 50, 7, 0.5)" , "rgba(251, 143, 7, 0.5)" , "rgba(248, 251, 7, 0.5)" ,
        // green (6)           cyan (7)               blue  (8)
        "rgba(7, 251, 9, 0.5)" , "rgba(36, 243, 217, 0.5)" , "rgba(27, 45, 251, 0.5)",
        // pink (9)              magenta (10)              Skin1 (11)
        "rgba(251, 7, 247, 0.5)" , "rgba(218, 43, 254, 0.5)" , "rgba(255, 219, 172, 0.5)" ,
        // Skin2 (12)               Skin2 (13)                Skin3  (14)
        "rgba(241, 194, 125, 0.5)" , "rgba(224, 172, 105, 0.5)" , "rgba(141, 85, 36, 0.5)",
        // Skin4 (15)            Skin5 (16)                  Skin5 (17)
        "rgba(94, 49, 35, 0.5)" , "rgba(94, 49, 35, 0.5)" , "rgba(64, 25, 12, 0.5)"
    ]
]


/*class Grid{
    constructor(dw,dh,intervalWidth,strokeColour, strokeWidth) {
        this.dw = dw;
        this.dh = dh;
        this.intervalWidth = intervalWidth;
        this.strokeColour = strokeColour;
        this.strokeWidth = strokeWidth;
    }
    update(){
        this.draw()
    }
    draw(){
        for(let i = -this.dw; i <= this.dw; i+=
            this.intervalWidth){
            this.drawLine(i, -this.dh, i,
                this.dh, this.strokeColour,
                this.strokeWidth);
        }
        for(let j = -this.dh; j <= this.dh; j +=
            this.intervalWidth){
            this.drawLine(-this.dw,j, this.dw,
                j, this.strokeColour,
                this.strokeWidth);
        }
    }

    drawLine(x_1,y_1,x_2,y_2,strokeColour,strokeWidth){
        ctx.beginPath();
        ctx.moveTo(x_1,y_1);
        ctx.lineTo(x_2,y_2);
        ctx.lineCap = "round";
        ctx.strokeStyle = strokeColour;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
    }

}
 */

canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');

// define height and width
let width = 900;
let height = 600;

// define scale of 1
let scale = 2;

// set the canvas width and height
canvas.width = width*scale;
canvas.height = height*scale;

//scale the canvas
ctx.scale(scale, scale);

// get the canvas element
// style here for consistency

let my_c = document.getElementById('myCanvas');
my_c.style.backgroundColor = "rgb(200, 162, 200)";
my_c.style.width = width+"px";
my_c.style.height = height+"px";
my_c.style.border = "10px solid rgba(255, 255, 255)";
my_c.style.display = "block";
my_c.style.margin = "auto";
document.body.style.backgroundColor = "rgb(157,193,131)";

class InteractiveObject{
    constructor(){
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseleave', this.mLeave.bind(this));
        canvas.addEventListener('click', this.mClick.bind(this));
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.xMouse = 0;
        this.yMouse = 0;
        this.mouseIsDown = false;
        this.isDrawing = false
    }
    mDown(e){
        if(InteractiveButton.selected.text == "pen") {
            this.isDrawing = true;
        }
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseIsDown = true;
        let output = "This mouse went down at x = " + e.offsetX + "and y = " + e.offsetY;
        //console.log (output)
    }
    mUp(e){
        this.isDrawing = false;
        this.mouseIsDown = false;
        let output = "This mouse went up at x = " + e.offsetX + "and y = " + e.offsetY;
        //console.log(output)
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log("moving")
        // if (this.mouseIsDown === true && name === "Pen" && this.inBoundsCheck(this.xMouse, this.Ax, this.Ay, this.Aw, this.Ah)){
        //     if (size === "S"){
        //         let temp = new Pen(this.xMouse, this.yMouse, 5, colourname)
        //         this.objectSet.push(temp)
        //     }
        //     else if (size === "M"){
        //         let temp = new Pen(this.xMouse, this.yMouse, 20, colourname)
        //         this.objectSet.push(temp)
        //     }
    }

    mLeave(e){
        console.log("Mouse has left the canvas")
    }

    mClick(e){
        //console.log("click");
    }
}

class Rectangle{
    constructor(x,y,w,h,fill){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw(){
        console.log(this.fill)
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
    }

}
Rectangle.prototype.checkBounds = checkBounds

class Ellipse {
    constructor(x, y, w, h, fill) {
        this.x = x + w / 2;
        this.y = y + h / 2;
        this.w = Math.abs(w / 2);
        this.h = Math.abs(h / 2);
        this.fill = fill;
    }

    update() {
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw() {
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.w, this.h, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}
Ellipse.prototype.checkBounds = checkBounds

class Triangle {
    constructor(xM, yM, w, h, fill) {
        this.x = xM;
        this.y = yM;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update() {
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw() {
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.moveTo(this.x + this.w/2, this.y);
        ctx.lineTo(this.x +this.w, this.y +this.h);
        ctx.lineTo(this.x, this.y+this.h);
        ctx.closePath();
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}
Triangle.prototype.checkBounds = checkBounds


class Circle {
    constructor(x, y, w, h, fill) {
        this.x = x + w / 2;
        this.y = y + h / 2;
        if(Math.abs(w) < Math.abs(h)){
            this.r = Math.abs(w)/2
        }else{
            this.r = Math.abs(h)/2
        }
        this.fill = fill;
    }

    update() {
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw() {
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}
Circle.prototype.checkBounds = checkBounds


class Star {
    constructor(x, y, w, h, fill) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update() {
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw() {
        ctx.beginPath();
        // to draw the lines 5 times for an adjustable pointed star for later
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * this.w / 2 + this.x + this.w / 2, Math.sin((18 + i * 72) / 180 * Math.PI) * this.h / 2 + this.y + this.h / 2)
            ctx.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * this.w / 6 + this.x + this.w / 2, Math.sin((54 + i * 72) / 180 * Math.PI) * this.h / 6 + this.y + this.h / 2)
        }
        ctx.lineTo(this.x + this.w / 1.015, this.y + this.h / 1.54)
        ctx.fillStyle = this.fill;
        ctx.fill()
    }
}
Star.prototype.checkBounds = checkBounds



class Line{
    constructor(x,y,w,h,fill){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw(){
        console.log('made it')
        ctx.beginPath();
        //ctx.lineTo(320, 200);
        //ctx.lineTo(270, 300);
        console.log(this.x, this.y, this.w, this.h)
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+this.w, this.y+this.h);
        ctx.lineWidth = 5
        ctx.strokeStyle = this.fill
        ctx.stroke()
    }

}
Line.prototype.checkBounds = checkBounds

class Pen{
    constructor(x1,y1,x2,y2,fill){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.fill = fill;
    }

    update(){
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw(){
        console.log('made it not actually')
        ctx.beginPath();
        //ctx.lineTo(320, 200);
        //ctx.lineTo(270, 300);
        console.log(this.x1, this.y1, this.x2, this.y2)
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineWidth = 5
        ctx.strokeStyle = this.fill
        ctx.stroke()
    }

}
Pen.prototype.checkBounds = checkBounds


class Diamond{
    constructor(x, y, w, h, fill){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x + this.w/2, this.y);
        ctx.lineTo(this.x + this.w, this.y + this.h/2);
        ctx.lineTo(this.x + this.w/2, this.y + this.h);
        ctx.lineTo(this.x, this.y + this.h/2);
        ctx.closePath();
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}
Diamond.prototype.checkBounds = checkBounds


class Heart{
    constructor(x, y, w, h, fill, k , d){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.k = k;
        this.d = d;
    }

    update(){
        if(this.checkBounds() === true) {
            this.draw();
        }
    }

    draw(){
        let k = 0
        let d =

        ctx.beginPath();

        ctx.moveTo(k, k + d / 4);
        ctx.quadraticCurveTo(k, k, k + d / 4, k);
        ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
        ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
        ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
        ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
        ctx.lineTo(k + d / 2, k + d);
        ctx.lineTo(k + d / 4, k + d * 3/4);
        ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);

        ctx.closePath();
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}
Heart.prototype.checkBounds = checkBounds


function checkBounds() {
    if(this.x > 250 && this.y < 250+540 && this.y > 10 && this.y < 10+580) {
        //if(xMouse > x && yMouse < x+w && yMouse > y && yMouse < y+h){
        return true;
    }else{
        return false;
    }
}


function strokeRect(x,y,w,h,colour = "rgb(255,255,255,500", l=1){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.lineWidth = l;
    ctx.strokeStyle = colour;
    ctx.stroke();
}


function drawLine(x_1, y_1, x_2, y_2, strokeColour, strokeWidth=1, ct =ctx){
    ct.beginPath();
    ct.moveTo(x_1,y_1);
    ct.lineTo(x_2,y_2);
    ct.lineCap = "round";
    ct.strokeStyle = strokeColour;
    ct.lineWidth = strokeWidth;
    ct.stroke();
}

function drawStrokeCircle(x,y,r, strokeC, strokeW = 1){
    ctx.beginPath();
    ctx.arc(x,y, r, 0, 2*Math.PI);
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = strokeW;
    ctx.stroke();
}