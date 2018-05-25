let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

//width="500" height="500"

let circle = {
    x: 250,
    y: 250,
    r: Math.PI*2,
    sAngle: circle,
    eAngle: 0,
    ccw: true
};

ctx.strokeStyle = 'black';
ctx.arc(circle.x, circle.y, circle.r, circle.sAngle, circle.eAngle, circle.ccw);
ctx.stroke();
ctx.fill();

circle.x = 32 + (Math.random() * (canvas.width - 64));
circle.y = 32 + (Math.random() * (canvas.height - 64));