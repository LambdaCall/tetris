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




// Tetromino related
const tetrominos = [
     { //I Shape
        shape : [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        color : "skyblue"
    },
    { //L Shape
        shape : [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ],
        color : "orange"
    },
    { //J Shape
        shape : [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ],
        color : "pink"
    },
    { //O Shape
        shape : [
            [4, 4],
            [4, 4],
        ],
        color : "yellow"
    },
    { //Z Shape
        shape : [ 
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ],
        color : "red"
    },
    
    { //S Shape
        shape : [ 
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ],
        color : "green"
    },
    { //T Shape
            shape : [
                [7,7,7],
                [0,7,0],
                [0,0,0]
            ],
            color : "purple"
        }
]

function drawTetromino(tetromino,offset){
    tetromino.shape.forEach((row,y)=>{
        row.forEach((value,x)=>{
            if(value){ //Check if we have a non-0 value at this position
                ctx.fillStyle = tetromino.color;
                ctx.fillRect(x+offset.x,y+offset.y,1,1);
            
            }
        })
    })
}






// Player's Object
const player ={
    pos: { x: 5, y: 0},
    tetromino: tetrominos[Math.floor(Math.random() * 7)]
}



function tick(){

}

function draw(){
    console.log(player.tetromino)
    drawTetromino(player.tetromino,{x:5,y:0})
}


resizeCanvas();