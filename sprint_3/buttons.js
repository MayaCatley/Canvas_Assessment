class InteractiveButton extends InteractiveObject{
    constructor(x, y, w, h, fill, over, selected, stroke, text, textColour) {
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
    mClick(e){
        // check mouse in bounds
        super.mClick(e);
        if(this.inBounds) {
            InteractiveButton.selected = this;
        }
    }
    getBoundary(x, y, w, h, x_m, y_m){
        if(x_m > x && x_m < x + w && y_m > y && y_m < y + h) {
            return true
        } else {
            return false
        }
    }
    draw(x, y , w, h, c, s, txt, txtColour){
        ctx.beginPath()
        ctx.rect(x, y, w, h);
        ctx.lineWidth = 5;
        ctx.strokeStyle = s;
        ctx.fillStyle = c;
        ctx.fill();
        ctx.stroke();

    }
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



class SwatchButton extends InteractiveButton{
    constructor(x, y, w, h, fill, over, selected, stroke, text, textColour) {
        super(x, y, w, h, fill, over, selected, stroke, text, textColour);
        this.inBounds = false;
    }

    update(){
        this.inBounds = this.getBoundary(this.x, this.y, this.w, this.h, this.xMouse, this.yMouse)
     let fill = this.fill
        ctx.lineWidth = 6;

        if(SwatchButton.selected === this){
            fill = this.selected }
        else if(this.inBounds){
            fill = this.over
        }
        this.draw(this.x, this.y, this.w, this.h, fill, this.stroke, this.text, this.textColour)

    }


    mClick(e){
        // check mouse in bounds

        if(this.inBounds) {
           SwatchButton.selected = this;
            SwatchButton.colour = this.fill
        }
        console.log(SwatchButton.colour)


    }
}
SwatchButton.selected = ""
SwatchButton.colour = "rgb(0,0,0)"