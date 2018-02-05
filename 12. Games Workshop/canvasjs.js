let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

ctx.fillStyle = 'black';
ctx.fillRect(30, 30, 200, 40);
ctx.fillStyle = 'white';
ctx.font = "24px monospace";
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText("Submit", 130, 50);

