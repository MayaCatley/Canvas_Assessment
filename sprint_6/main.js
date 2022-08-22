console.log("main.js is called")

let G = new Grid(width,height, 25, col[0][2],0.3);

let R = new InteractiveButton(20, 50, 100, 40, col[0][4], "rgba(255,255,255,0.5)", col[0][0], 'white', 'rectangle', col[0][2])
let E = new InteractiveButton(20, 100, 100, 40, col[0][6], "rgba(255,255,255,0.5)", col[0][0], 'white', 'ellipse', col[0][2])
let T = new InteractiveButton(130, 50, 100, 40, col[0][6], "rgba(255,255,255,0.5)", col[0][0], 'white', 'triangle', col[0][2])
let CC = new InteractiveButton(130, 100, 100, 40, col[0][4], "rgba(255,255,255,0.5)", col[0][0], 'white', 'circle', col[0][2])
let Un = new InteractiveButton(20, 550, 50, 30, col[0][4], "rgba(255,255,255,0.25)", col[1][4], 'white', 'undo', col[0][2])
let Cl = new InteractiveButton(150, 550, 50, 30, col[0][6], "rgba(255,255,255,0.25)", col[1][6], 'white', 'clear', col[0][2])
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
let WHI = new SwatchButton(40, 200, 20, 20, "rgba(255, 255, 255)", "rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0.5)", 'white', '', col[0][2])
let SK1 = new SwatchButton(60, 200, 20, 20, "rgba(255, 219, 172)", "rgba(255, 219, 172, 0.25)", "rgba(255, 219, 172, 0.5)", 'white', '', col[0][2])
let SK2 = new SwatchButton(80, 200, 20, 20, "rgba(255, 195, 170)", "rgba(255, 195, 170, 0.25)", "rgba(255, 195, 170, 0.5)", 'white', '', col[0][2])
let SK3 = new SwatchButton(100, 200, 20, 20, "rgba(241, 194, 125)", "rgba(241, 194, 125, 0.25)", "rgba(241, 194, 125, 0.5)", 'white', '', col[0][2])
let SK4 = new SwatchButton(120, 200, 20, 20, "rgba(224, 172, 105)", "rgba(224, 172, 105, 0.25)", "rgba(224, 172, 105, 0.5)", 'white', '', col[0][2])
let SK5 = new SwatchButton(40, 220, 20, 20, "rgba(0, 0, 0)", "rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0.5)", 'white', '', col[0][2])
let SK6 = new SwatchButton(60, 220, 20, 20, "rgba(64, 25, 12)", "rgba(64, 25, 12, 0.25)", "rgba(64, 25, 12, 0.5)", 'white', '', col[0][2])
let SK7 = new SwatchButton(80, 220, 20, 20, "rgba(94, 49, 35)", "rgba(94, 49, 35, 0.25)", "rgba(94, 49, 35, 0.5)", 'white', '', col[0][2])
let SK8 = new SwatchButton(100, 220, 20, 20, "rgba(116, 61, 43)", "rgba(116, 61, 43, 0.25)", "rgba(116, 61, 43, 0.5)", 'white', '', col[0][2])
let BL = new SwatchButton(120, 220, 20, 20, "rgba(141, 85, 36)", "rgba(141, 85, 36, 0.25)", "rgba(141, 85, 36, 0.5)", 'white', '', col[0][2])

let buttonSet = [R, E, T, CC, Un, Cl, RED, ORA, YEL, GRE, BLU, PIN, MAG, TEA, PUR, CYA, WHI, SK1, SK2, SK3, SK4, SK5, SK6, SK7, SK8, BL]
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