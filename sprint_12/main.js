// decided to remove the grid for aesthetic reasons
// let G = new Grid(width,height, 25, col[0][2],0.3);

// defining the swatches
let swatch_set = []
for(let i = 0; i<colArray.length; i++) {
    for (let j = 0; j < colArray[i].length; j++) {
        let temp = new SwatchButton( 33.33* i, 33.33 * j, 33.33, 33.33, colArray[i][j],colArray[0][0],colArray[0][0],colArray[0][2],  '', col[0][2])
        swatch_set.push(temp);
    }
}

// defining shape buttons
let R = new InteractiveButton(110, 13, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'rectangle', col[0][2])
let E = new InteractiveButton(110, 63, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'ellipse', col[0][2])
let T = new InteractiveButton(110, 113, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'triangle', col[0][2])
let CC = new InteractiveButton(110, 163, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'circle', col[0][2])
let ST = new InteractiveButton(110, 213, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'star', col[0][2])
let LI = new InteractiveButton(110, 263, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'line', col[0][2])
let DI = new InteractiveButton(110, 313, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'diamond', col[0][2])
let HE = new InteractiveButton(110, 363, 100, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'heart', col[0][2])

//defining brush buttons
let PE = new InteractiveButton(80, 435, 70, 40, col[0][1], "rgba(255,255,255,0.5)", col[0][0], 'white', 'pen', col[0][2])
let Un = new InteractiveButton(170, 435, 70, 40, col[0][1], "rgba(255,255,255,0.25)", col[1][4], 'white', 'eraser', col[0][2])

// defining clear, undo and redo
let Er = new InteractiveButton(75, 550, 50, 30, col[0][1], "rgba(255,255,255,0.25)", col[1][4], 'white', 'undo', col[0][2])
let Re = new InteractiveButton(135, 550, 50, 30, col[0][1], "rgba(255,255,255,0.25)", col[1][4], 'white', 'redo', col[0][2])
let Cl = new InteractiveButton(195, 550, 50, 30, col[0][1], "rgba(255,255,255,0.25)", col[1][6], 'white', 'clear', col[0][2])

// automatically selects the rectangle
InteractiveButton.selected = R

// calls defined buttons
let buttonSet = [R, E, T, CC, ST, LI, DI, HE, PE, Un, Er, Re, Cl]
let C = new ControlObject(canvas);

// clears drawing space
function animate(){
    ctx.clearRect(0,0, width, height);

    // removed the grid so no longer is needed
    // G.update();

    // keeps the canvas updating
    C.update();

    for(let i=0; i<buttonSet.length; i++){
        buttonSet[i].update();
    }
    // update the elements within the button list
    for(let i = 0; i<swatch_set.length; i++){
        swatch_set[i].update()
    }

    window.requestAnimationFrame(animate);
}
animate();