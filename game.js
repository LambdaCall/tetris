const canvas = document.getElementById("tetris"); //Grab the canvas
const ctx = canvas.getContext("2d"); //Get the context of the canvas



function drawCanvas(){
    ctx.fillStyle = '#000'; 
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

//Handle window resize via event listener
window.addEventListener('resize',resizeCanvas,false) 

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCanvas();
    draw();
}

function draw(){
}

resizeCanvas()