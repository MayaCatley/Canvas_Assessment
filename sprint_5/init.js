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


class Grid{
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
    }
    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseIsDown = true;
        let output = "This mouse went down at x = " + e.offsetX + "and y = " + e.offsetY;
        //console.log (output)
    }
    mUp(e){
        this.mouseIsDown = false;
        let output = "This mouse went up at x = " + e.offsetX + "and y = " + e.offsetY;
        //console.log(output)
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log("moving")
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