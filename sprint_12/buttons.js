/**
 * Class Button
 * @param {integer} x1 x position of button
 * @param {integer} y1 y position of button
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 * @param {string} over hover over colour
 * @param {string} selected selected colour
 * @param {string}  stroke button stroke
 * @param {string} text button text
 * @param {string} text colour button text colour
 */

class InteractiveButton extends InteractiveObject{
    constructor(x, y, w, h, fill, over, selected, stroke, text, textColour) {
        // list of variables required
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.over = over;
        this.selected = selected;
        this.stroke = stroke;
        this.text = text;
        this.textColour = textColour;
        this.inBounds = false
    }
    // updates selected button values and does boundary check
    update(){
        this.inBounds = this.getBoundary(this.x, this.y, this.w, this.h, this.xMouse, this.yMouse)
        let fill = this.fill
        if(InteractiveButton.selected === this){
            fill = this.selected
        }else if(this.inBounds){
            fill = this.over
        }
        this.draw(this.x, this.y, this.w, this.h, fill, this.stroke, this.text, this.textColour)
        this.drawText(this.x, this.y, this.w, this.h, fill, this.stroke, this.text, this.textColour)
    }
    // sets selected button on click
    mClick(e){
        // if clicked and mouse in bounds has been checked
        super.mClick(e);
        if(this.inBounds) {
            InteractiveButton.selected = this;
        }
    }
    // checks mouse in bounds
    getBoundary(x, y, w, h, x_m, y_m){
        if(x_m > x && x_m < x + w && y_m > y && y_m < y + h) {
            return true
        } else {
            return false
        }
    }
    // draws the button
    draw(x, y , w, h, c, s, txt, txtColour){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.lineWidth = 5;
        ctx.strokeStyle = s;
        ctx.fillStyle = c;
        ctx.fill();
        ctx.stroke();

    }
    // formats the text on the buttons
    drawText(x, y , w, h, c, s, txt, txtColour){
        let myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif ";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = myFont;
        ctx.fillStyle = txtColour;
        ctx.fillText(txt, x+ w/2, y+h/2);
    }

}
InteractiveButton.selected = "placeholder";


/**
 * @param {integer} x1 x position of button
 * @param {integer} y1 y position of button
 * @param {integer}  w width
 * @param {integer} h height
 * @param {string} fill fills shape
 * @param {string} over hover over colour
 * @param {string} selected selected colour
 * @param {string}  stroke button stroke
 * @param {string} text button text
 * @param {string} text colour button text colour
 */

class SwatchButton extends InteractiveButton{
    constructor(x, y, w, h, fill, over, selected, stroke, text, textColour) {
        super(x, y, w, h, fill, over, selected, stroke, text, textColour);
        this.inBounds = false;
    }
    // updates selected color buttons
    update(){
        this.inBounds = this.getBoundary(this.x, this.y, this.w, this.h, this.xMouse, this.yMouse)
     let stroke = this.stroke
        ctx.lineWidth = 6;

        if(SwatchButton.selected === this){
            stroke = this.selected }
        else if(this.inBounds){
            stroke = this.over
        }
        this.draw(this.x, this.y, this.w, this.h, this.fill, stroke, this.text, this.textColour)

    }

    // sets selected color on click
    mClick(e){
        // check mouse in bounds
        if(this.inBounds) {
           SwatchButton.selected = this;
           SwatchButton.colour = this.fill
        }


    }
}
SwatchButton.selected = ""
SwatchButton.colour = "rgb(0,0,0)"

