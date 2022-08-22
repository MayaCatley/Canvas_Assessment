console.log("main.js is called")

let G = new Grid(width,height, 25, col[0][2],0.3);
let C = new ControlObject(canvas);
let R = new InteractiveButton(40, 50, 100, 40, col[0][4], col[0][3], col[0][0], col[0][1], 'rectangle', col[0][2])
let E = new InteractiveButton(40, 100, 100, 40, col[0][6], col[0][3], col[0][0], col[0][1], 'ellipse', col[0][2])
let P = new InteractiveButton(40, 150, 100, 40, col[0][6], col[0][3], col[0][0], col[0][1], 'pen', col[0][2])

let buttonSet = [R, E, P]

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