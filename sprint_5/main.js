console.log("main.js is called")

let G = new Grid(width,height, 25, col[0][2],0.3);

let R = new InteractiveButton(40, 50, 100, 40, col[0][4], "rgba(255,255,255,0.5)", col[0][0], 'white', 'rectangle', col[0][2])
let E = new InteractiveButton(40, 100, 100, 40, col[0][6], "rgba(255,255,255,0.5)", col[0][0], 'white', 'ellipse', col[0][2])
let Un = new InteractiveButton(20, 550, 50, 30, col[0][4], "rgba(255,255,255,0.25)", col[1][4], 'white', 'undo', col[0][2])
let Re = new InteractiveButton(150, 550, 50, 30, col[0][6], "rgba(255,255,255,0.25)", col[1][6], 'white', 'clear', col[0][2])
InteractiveButton.selected = R
let RED = new SwatchButton(40, 150, 20, 20, "rgba(251, 50, 7)", "rgba(251, 50, 7, 0.25)", "rgba(251, 50, 7, 0.5)", 'white', '', col[0][2])
let ORA = new SwatchButton(60, 150, 20, 20, "rgba(251, 143, 7 )", "rgba(251, 143, 7, 0.25)", "rgba(251, 143, 7, 0.5)", 'white', '', col[0][2])
let YEL = new SwatchButton(80, 150, 20, 20, "rgba(248, 251, 7)", "rgba(248, 251, 7, 0.25)", "rgba(248, 251, 7, 0.5)", 'white', '', col[0][2])
let GRE = new SwatchButton(100, 150, 20, 20, "rgba(7, 251, 9)", "rgba(7, 251, 9, 0.25)", "rgba(7, 251, 9, 0.5)", 'white', '', col[0][2])
let BLU = new SwatchButton(120, 150, 20, 20, "rgba(7, 45, 251)", "rgba(7, 45, 251, 0.25)", "rgba(7, 45, 251 0.5)", 'white', '', col[0][2])
let PIN = new SwatchButton(40, 170, 20, 20, "rgba(251, 7, 247)", "rgba(251, 7, 247, 0.25)", "rgba(251, 7, 247, 0.5)", 'white', '', col[0][2])
let MAG = new SwatchButton(60, 170, 20, 20, "rgba(218, 43, 254)", "rgba(218, 43, 254, 0.25)", "rgba(218, 43, 254, 0.5)", 'white', '', col[0][2])
let TEA = new SwatchButton(80, 170, 20, 20, "rgba(25, 168, 148)", "rgba(25, 168, 148, 0.25)", "rgba(25, 168, 148, 0.5)", 'white', '', col[0][2])
let PUR = new SwatchButton(100, 170, 20, 20, "rgba(195, 36, 243)", "rgba(195, 36, 243, 0.25)", "rgba(195, 36, 243, 0.5)", 'white', '', col[0][2])
let CYA = new SwatchButton(120, 170, 20, 20, "rgba(36, 243, 217)", "rgba(36, 243, 217, 0.25)", "rgba(36, 243, 217, 0.5)", 'white', '', col[0][2])


let buttonSet = [R, E, Un, Re, RED, ORA, YEL, GRE, BLU, PIN, MAG, TEA, PUR, CYA]
let C = new ControlObject(canvas);
function animate(){
    ctx.clearRect(0,0, width, height);
    G.update();
    C.update();

    for(let i=0; i<buttonSet.length; i++){
        buttonSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();