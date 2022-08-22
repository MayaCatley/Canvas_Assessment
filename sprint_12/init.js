let col= [
    [ // set of original basic opaque colours
        // black (0)         grey (1)              white (2)
        "rgba(0,0,0,1)" , "rgba(150,150,150,1)" , "rgba(255,255,255,1)" ,
        // pink (3)              purple (4)             deep blue (5)
        "rgba(243,92,155,1)" , "rgba(153,19,206,1)" , "rgba(16,16,162,1)" ,
        // pale blue (6)         yellow (7)              bright yellow (8)
        "rgba(135,211,243,1)" , "rgba(246,244,193,1)" , "rgba(250,250,0,1)"
    ],
    [ // set of original basic semi-transparent colours
        // black (0)         grey (1)              white (2)
        "rgba(0,0,0,0.5)" , "rgba(150,150,150,0.5)" , "rgba(255,255,255,0.5)" ,
        // pink (3)              purple (4)             deep blue (5)
        "rgba(243,92,155,0.5)" , "rgba(153,19,206,0.5)" , "rgba(16,16,162,0.5)" ,
        // pale blue (6)         yellow (7)              bright yellow (8)
        "rgba(135,211,243,0.5)" , "rgba(246,244,193,0.5)" , "rgba(250,250,0,0.5)"
    ]
]

let colArray= [
    [ // opaque colours for drawing
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
    [ // semi-transparent colours for drawing
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

let canvas = document.querySelector('#myCanvas');
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

/**
 * Parent class that all child classes inherit from for all shared functions
 */

class InteractiveObject{
    constructor(){
        // waits for certain events on the mouse to occur before acting
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseleave', this.mLeave.bind(this));
        canvas.addEventListener('click', this.mClick.bind(this));
        // initial starting point for variables
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.xMouse = 0;
        this.yMouse = 0;
        this.mouseIsDown = false;
        this.isDrawing = false
    }
    mDown(e){
        if(InteractiveButton.selected.text === "pen") {
            this.isDrawing = true;
        }
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseIsDown = true;
        // console log to test if the mouse is down
        // let output = "This mouse went down at x = " + e.offsetX + "and y = " + e.offsetY;
        //console.log (output)
    }
    mUp(e){
        this.isDrawing = false;
        this.mouseIsDown = false;
        // console log to test if the mouse is up
        // let output = "This mouse went up at x = " + e.offsetX + "and y = " + e.offsetY;
        //console.log(output)
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
    }

    mLeave(e){
    }

    mClick(e){
    }
}

/**
 * Rectangle
 * @param {integer} x1 x position
 * @param {integer} y1 y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */

class Rectangle{
    // constructor uses x and y coordinates, the width and height, as well as colour (colArray string)
    constructor(x,y,w,h,fill){
        // defining variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
            // draw the rectangle
            this.draw();
    }

    draw(){
        // variables for the rectangle's appearance
        // size determined by the users mouse movement
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
    }

}

/**
 * Ellipse
 * @param {integer} x1 x position
 * @param {integer} y1 y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */

class Ellipse {
    // constructor uses x and y coordinates, the width and height, as well as colour (colArray string)
    constructor(x, y, w, h, fill) {
        // defining variables
        // x centre
        this.x = x + w / 2;
        // y centre
        this.y = y + h / 2;
        // radius of x
        this.w = Math.abs(w / 2);
        // radius of y
        this.h = Math.abs(h / 2);
        this.fill = fill;
    }

    update() {
            // draw the ellipse
            this.draw();
    }

    // variables for the ellipse's appearance
    // size determined by the users mouse movement
    draw() {
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.w, this.h, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}

/**
 * Triangle
 * @param {integer} x1 x position
 * @param {integer} y1 y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */
class Triangle {
    // constructor uses x and y coordinates, the width and height, as well as colour (colArray string)
    constructor(xM, yM, w, h, fill) {
        // defining variables
        this.x = xM;
        this.y = yM;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update() {
            // draw the triangle
            this.draw();
    }

    // variables for the triangle's appearance
    // size determined by the users mouse movement
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

/**
 * Circle
 * @param {integer} x1 x position
 * @param {integer} y1 y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */

class Circle {
    // constructor uses x and y coordinates, the width and height, as well as colour (colArray string)
    constructor(x, y, w, h, fill) {
        // defining variables
        this.x = x + w / 2;
        this.y = y + h / 2;
        // ensures all the radius are equal
        if(Math.abs(w) < Math.abs(h)){
            this.r = Math.abs(w)/2
        }else{
            this.r = Math.abs(h)/2
        }
        this.fill = fill;
    }

    update() {
            // draw the circle
            this.draw();
    }

    // variables for the circle's appearance
    // size determined by the users mouse movement
    draw() {
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}

/**
 * Star
 * @param {integer} x1 x position
 * @param {integer} y1 y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */

class Star {
    // constructor uses x and y coordinates, the width and height, as well as colour (colArray string)
    constructor(x, y, w, h, fill) {
        // defining variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update() {
            // draw the star
            this.draw();
    }

    // variables for the star's appearance
    // size determined by the users mouse movement
    draw() {
        ctx.beginPath();
        // creates 5 points for the star, could be adjustable in a later development
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * this.w / 2 + this.x + this.w / 2, Math.sin((18 + i * 72) / 180 * Math.PI) * this.h / 2 + this.y + this.h / 2)
            ctx.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * this.w / 6 + this.x + this.w / 2, Math.sin((54 + i * 72) / 180 * Math.PI) * this.h / 6 + this.y + this.h / 2)
        }
        ctx.lineTo(this.x + this.w / 1.015, this.y + this.h / 1.54)
        ctx.fillStyle = this.fill;
        ctx.fill()
    }
}

/**
 * Line
 * @param {integer} x1 x position
 * @param {integer} y1 y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */

class Line{
    // constructor uses staring x and y coordinates, the width and height (as end coordinates)
    // as well as colour (colArray string)
    constructor(x,y,w,h,fill){
        // defining variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
            // draw the line
            this.draw();
    }

    // variables for the line's appearance
    // size determined by the users mouse movement
    draw(){
        // draws the line from start and end point
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+this.w, this.y+this.h);
        ctx.lineWidth = 5
        // rounds the end of the line
        ctx.lineCap = "round";
        ctx.strokeStyle = this.fill
        ctx.stroke()
    }

}

/**
 * Pen
 * @param {integer} x1 x position
 * @param {integer} y1 y position
 * @param {integer}  x2 end point
 * @param {integer} y2 end point
 * @param {string} fill fills shape
 * @param {integer} id pen id
 */

class Pen{
    // constructor uses starting x and y coordinates, ending x and y coordinates
    // as well as colour (colArray string)
    constructor(x1,y1,x2,y2,fill,id){
        // defining variables
        this.x = x1;
        this.y = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.fill = fill;
        // uses the html slider to change the with of the pen
        this.sliderValue = document.getElementById("myRange").value;
        this.id = id;
    }

    update(){
            // draw pen
            this.draw();
    }

    // variables for the pen's appearance
    // pen determined by the users mouse movement
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineWidth = this.sliderValue
        ctx.strokeStyle = this.fill
        ctx.stroke()
    }

}

/**
 * Diamond
 * @param {integer} x x position
 * @param {integer} y y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */

class Diamond{
    // constructor uses x and y coordinates, the width and height, as well as colour (colArray string)
    constructor(x, y, w, h, fill){
        // defining variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
            // draw the diamond
            this.draw()
    }

    // variables for the diamond's appearance
    // size determined by the users mouse movement
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

/**
 * Heart
 * @param {integer} x x position
 * @param {integer} y y position
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 */

class Heart{
    // constructor uses x and y coordinates, the width and height, as well as colour (colArray string)
    constructor(x, y, w, h, fill){
        // defining variables
        // x+w/2 centers the heart and avoids border issues (previously the border on applied to half the heart)
        this.x = x + w/2;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
            // draw the heart
            this.draw();
    }

    // variables for the heart's appearance
    // size determined by the users mouse movement
    draw(){
        ctx.beginPath();
        ctx.moveTo(75,40);
        let topCurveHeight = this.h * 0.3;
        ctx.moveTo(this.x, this.y + topCurveHeight);

        // creates the top left curve
        ctx.bezierCurveTo(
            this.x, this.y, 
            this.x - this.w / 2, this.y, 
            this.x - this.w / 2, this.y + topCurveHeight
        );
          // creates the bottom left curve
        ctx.bezierCurveTo(
            this.x - this.w / 2, this.y + (this.h + topCurveHeight) / 2, 
            this.x, this.y + (this.h + topCurveHeight) / 2, 
            this.x, this.y + this.h
        );
          // creates the bottom right curve
        ctx.bezierCurveTo(
            this.x, this.y + (this.h + topCurveHeight) / 2, 
            this.x + this.w / 2, this.y + (this.h + topCurveHeight) / 2, 
            this.x + this.w / 2, this.y + topCurveHeight
        );
        // creates the top right curve
        ctx.bezierCurveTo(
            this.x + this.w / 2, this.y, 
            this.x, this.y, 
            this.x, this.y + topCurveHeight
          );
        ctx.closePath();
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore()
    }
}

// checks values are in bounds to prevents shapes/drawguide out of bounds.
function checkBounds() {
    if(this.x > 250 && this.y < 250+540 && this.y > 10 && this.y < 10+580) {
        //if(xMouse > x && yMouse < x+w && yMouse > y && yMouse < y+h){
        return true;
    }else{
        return false;
    }
}

// creates boarder rectangle for the guide
function strokeRect(x,y,w,h,colour, l=1){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.lineWidth = l;
    ctx.strokeStyle = colour;
    ctx.stroke();
}

// creates diagonal lines for the guide
function drawLine(x_1, y_1, x_2, y_2, strokeColour, strokeWidth=1, ct =ctx){
    ct.beginPath();
    ct.moveTo(x_1,y_1);
    ct.lineTo(x_2,y_2);
    ct.lineCap = "round";
    ct.strokeStyle = strokeColour;
    ct.lineWidth = strokeWidth;
    ct.stroke();
}

// creates center circle  for the guide
function drawStrokeCircle(x,y,r, strokeC, strokeW = 1){
    ctx.beginPath();
    ctx.arc(x,y, r, 0, 2*Math.PI);
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = strokeW;
    ctx.stroke();
}