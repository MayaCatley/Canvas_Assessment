/**
 * Control Class
 * Calculate guides of the shapes
 */

class ControlObject extends InteractiveObject{
    constructor(canvas, dx, dy, dw, dh) {
        super();
        this.w = 0;
        this.h = 0;
        this.objectSet = [];
        this.name = ""
        this.removedSet = [];
        this.dx = 250;
        this.dy = 10;
        this.dw = 630;
        this.dh = 580;

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        this.pen_id = null;
        this.undoId = null

    }

    mMove(e) {
        let prevX = this.xMouse
        let prevY = this.yMouse
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        // if pen is selected they will be created here everytime the mouse moves.
        if(this.isDrawing && this.inBounds(this.xMouse, this.yMouse, this.dx, this.dy, this.dw, this.dh)) {
            let temp = new Pen(prevX, prevY, this.xMouse, this.yMouse, SwatchButton.colour, this.pen_id);
            this.objectSet.push(temp)
            for(let i = 0; i<this.objectSet.length; i++){
                this.objectSet[i].update();
            }
        }
        // eraser is just a white pen, does the same as regular pen but with fixed color variable
        if(this.isErasing && this.inBounds(this.xMouse, this.yMouse, this.dx, this.dy, this.dw, this.dh)) {
            let temp = new Pen(prevX, prevY, this.xMouse, this.yMouse, 'white', this.pen_id);
            this.objectSet.push(temp)
            for(let i = 0; i<this.objectSet.length; i++){
                this.objectSet[i].update();
            }
        }
    }

    mDown(e)
    {
        // this will get a random number that we can use to identify pen objects from one line
        // from other pen objects. there is a 1 in a million chance that the pen_ids will duplicate, in which case 
        // both pens will redo/undo. 
        this.pen_id = Math.floor(Math.random() * 1000000);
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;

        if (this.inBounds(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.dw, this.dh)){
            this.mouseDown = true;
            if(InteractiveButton.selected.text === "pen") {
                this.isDrawing = true
            }
            if(InteractiveButton.selected.text === "eraser") {
                this.isErasing = true
            }
        }

    }


    mUp(e) {
        super.mUp(e);
        let name = ""
        // check shape is being drawn in bounds.
        if (this.mouseDown && this.inBounds(this.xMouse, this.yMouse, this.dx, this.dy, this.dw, this.dh)) {
            this.w = this.xMouse - this.xMouseStart
            this.h = this.yMouse - this.yMouseStart
            name = InteractiveButton.selected.text;
            let colourname = SwatchButton.colour;

            // creates new shape object depending on selected button name and push new shape to objectSet
            // even if the user just clicks the canvas a small shape is created which we have to remove later
            // note this excludes the pen/eraser objects as they're created in mMove()

            // ------- Rectangle created using initial mouse start position then mouse up position -------
            if (name === "rectangle") {
                let temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);

            // ------- Ellipse created using initial mouse start position then mouse up position -------
            } else if (name === "ellipse") {
                let temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);

            // ------- Triangle created using initial mouse start position then mouse up position -------
            } else if (name === "triangle") {
                let temp = new Triangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);

            // ------- Circle created using initial mouse start position then mouse up position -------
            } else if (name === "circle") {
                let temp = new Circle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);

            // ------- Star created using initial mouse start position then mouse up position -------
            } else if (name === "star") {
                let temp = new Star(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);

            // ------- Line created using initial mouse start position then mouse up position -------
            } else if (name === "line") {
                let temp = new Line(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);

            // ------- Diamond created using initial mouse start position then mouse up position -------
            } else if (name === "diamond") {
                let temp = new Diamond(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);

            // ------- Heart created using initial mouse start position then mouse up position -------
            } else if (name === "heart") {
                let temp = new Heart(this.xMouseStart, this.yMouseStart, this.w, this.h, colourname);
                // adds shape to object list
                this.objectSet.push(temp);
            }

            // if user just clicks shape won't add to object set
            if (this.w === 0 || this.h === 0 ) {
                this.objectSet.pop();
            }

            // these function when mouse is down so, therefore, when mouse is up they are false
            this.isDrawing = false

            this.isErasing = false

            this.mouseDown = false;
        }
    }

    // check boundaries
    inBounds(xMouse, yMouse, x, y, w, h){
        // return true if inside the bounds, otherwise return false
        if(xMouse > x && xMouse < x+w && yMouse > y && yMouse < y+h){
            return true;
        }else{
            return false;
        }
    }


    update(){
        this.drawingArea(this.dx, this.dy, this.dw, this.dh)
        // sets x and y mouse to be the borders if the mouse is out of bounds
        // makes sure the guide won't leave the box
        // guide also cannot touch the drawing area boarder
        if(this.xMouse < this.dx ){
            this.xMouse = this.dx }

        else if(this.xMouse > this.dx + this.dw){
            this.xMouse = this.dx + this.dw }

        if(this.yMouse < this.dy){
            this.yMouse = this.dy }

        else if(this.yMouse > this.dy + this.dh){
            this.yMouse =this.dy + this.dh }

        // sets width and height to be the change between the current x-y coords and where they started on mouseDown
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        for(let i = 0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
        // draw guide only if not in pen/eraser mode and only if was clicked in bounds and is still in bounds.
        if (this.mouseDown && InteractiveButton.selected.text != "pen" && InteractiveButton.selected.text != "eraser" && this.inBounds(this.xMouse, this.yMouse, this.dx, this.dy, this.dw, this.dh) && this.inBounds(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.dw, this.dh)) {
            this.drawGuide();
        }

        // ------- undo button -------
        if(InteractiveButton.selected.text === "undo"){
            let isPen = false

            // this is needed for pen and eraser objects as multiple objects in objectSet connected by an ID
            // if the latest object is a pen, get its ID and remove all objects with same ID from object set
            // all must be added to removed set so same can be done on redo
            if (this.objectSet.length > 0) {
                if(this.objectSet[this.objectSet.length - 1].hasOwnProperty("id")){
                    isPen = true
                    this.undoId = this.objectSet[this.objectSet.length - 1]["id"]
                    let penSet = this.objectSet.filter(obj => obj["id"] == this.undoId);
                    penSet.forEach(pen => this.removedSet.push(pen))
                }
                else {
                    this.removedSet.push(this.objectSet[this.objectSet.length - 1])
                }

                if(isPen) {
                    this.objectSet = this.objectSet.filter(obj => obj["id"] != this.undoId)
                }
                else {
                    this.objectSet.pop()
                }
            }

            InteractiveButton.selected = ""

        }
        // ------- clear button -------
        else if(InteractiveButton.selected.text === "clear"){
            this.objectSet.forEach(obj => this.removedSet.push(obj))
            this.objectSet = []
            InteractiveButton.selected = ""
        }

        // ------- redo button -------
        // if removed object has an ID that means it is a pen object so we have to go through the list and bring back
        // all the removed pen objects with the same ID
        else if (InteractiveButton.selected.text === "redo"){
            if (this.removedSet.length > 0) {
                if(this.removedSet[this.removedSet.length - 1].hasOwnProperty("id")) {
                    let redoId = this.removedSet[this.removedSet.length - 1]["id"]
                    let redoPenSet = this.removedSet.filter(obj => obj.id == redoId);
                    // console.log(redoPenSet) (it worked)
                    redoPenSet.forEach(pen => this.objectSet.push(pen))
                    this.removedSet = this.removedSet.filter(obj => obj.id != redoId)
                }
                else {
                    this.objectSet.push(this.removedSet[this.removedSet.length - 1])
                    this.removedSet.pop()
                }
            }
            // deselecting the button, so it won't keep doing the action
            InteractiveButton.selected = ""
        }
    }

// decided to keep drawing guide the same and simple for all shapes (excluding pen/eraser)
// maintains simplicity
    drawGuide(){
        // varriables for the drawing guide
        let x = this.xMouseStart;
        let y = this.yMouseStart;
        let w = this.w;
        let h = this.h;
        // colours for the drawing guide
        this.strokeRect(x,y,w,h,col[1][3]);
        this.drawLine(x,y,x+w, y+h, col[1][4]);
        this.drawLine(x,y+h,x+w,y, col[1][4]);
        this.drawStrokeCircle(x+ w/2, y +h/2, Math.abs(w/10), col[1][6]);
    }

    drawingArea(x,y,w,h)
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