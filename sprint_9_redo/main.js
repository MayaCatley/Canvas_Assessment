console.log("main.js is called")

// let G = new Grid(width,height, 25, col[0][2],0.3);

let swatch_set = []
for(let i = 0; i<colArray.length; i++) {
    for (let j = 0; j < colArray[i].length; j++) {
        let temp = new SwatchButton( 33.33* i, 33.33 * j, 33.33, 33.33, colArray[i][j],colArray[0][0],colArray[0][0],colArray[0][2],  '', col[0][2])
        swatch_set.push(temp);
    }
}

let R = new InteractiveButton(110, 13, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'rectangle', col[0][2])
let E = new InteractiveButton(110, 63, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'ellipse', col[0][2])
let T = new InteractiveButton(110, 113, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'triangle', col[0][2])
let CC = new InteractiveButton(110, 163, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'circle', col[0][2])
let ST = new InteractiveButton(110, 213, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'star', col[0][2])
let LI = new InteractiveButton(110, 263, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'line', col[0][2])
let DI = new InteractiveButton(110, 313, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'diamond', col[0][2])
let HE = new InteractiveButton(110, 363, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'heart', col[0][2])
let PE = new InteractiveButton(110, 413, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'pen', col[0][2])
let Un = new InteractiveButton(75, 500, 50, 30, col[0][1], "rgba(255,255,255,0.25)", col[1][4], 'white', 'eraser', col[0][2])
let Er = new InteractiveButton(75, 550, 50, 30, col[0][1], "rgba(255,255,255,0.25)", col[1][4], 'white', 'undo', col[0][2])
let Re = new InteractiveButton(135, 550, 50, 30, col[0][1], "rgba(255,255,255,0.25)", col[1][4], 'white', 'redo', col[0][2])
let Cl = new InteractiveButton(195, 550, 50, 30, col[0][1], "rgba(255,255,255,0.25)", col[1][6], 'white', 'clear', col[0][2])
InteractiveButton.selected = R

let buttonSet = [R, E, T, CC, ST, LI, DI, HE, PE, Un, Er, Re, Cl]
let C = new ControlObject(canvas);
function animate(){
    ctx.clearRect(0,0, width, height);
    // G.update();
    C.update();

    for(let i=0; i<buttonSet.length; i++){
        buttonSet[i].update();
    }
    for(let i = 0; i<swatch_set.length; i++){
        swatch_set[i].update()
    }

    window.requestAnimationFrame(animate);
}
animate();