const canvas = document.getElementById("tetris"); //Grab the canvas
const ctx = canvas.getContext("2d"); //Get the context of the canvas


// Direct Canvas Functions
function drawCanvas(){
    ctx.fillStyle = '#000'; 
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

//Handle window resize via event listener
window.addEventListener('resize',resizeCanvas,false) 

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.scale(50,50) //Scale each pixel by 50 w/h
    drawCanvas();
    draw();
}

function draw(){
    drawTetromino(T,{x:5,y:0})
}




// Tetromino related

const T = {
    shape : [
        [0,0,0],
        [0,1,0],
        [1,1,1]
    ],
    color : "red"
}

function drawTetromino(tetromino,offset){
    tetromino.shape.forEach((row,y)=>{
        row.forEach((value,x)=>{
            if(value){ //Check if we have a non-0 value at this position
                ctx.fillStyle = tetromino.color;
                ctx.fillRect(x+offset.x,y+offset.y,1,1);
                ctx.stroke();
            }
        })
    })
}



// Player's Object
const player ={
    pos: { x: 5, y: 0},
    piece: T
}


resizeCanvas()