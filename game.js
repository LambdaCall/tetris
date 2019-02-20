const canvas = document.getElementById("tetris"); //Grab the canvas
const ctx = canvas.getContext("2d"); //Get the context of the canvas

//Going to be used by update
let dropCounter = 0;
let dropInterval = 1000; //This is in MS, 1000 = 1 second
let lastTime = 0;

// Tetrominos
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


// Player's Object
const player ={
    pos: { x: 5, y: 0},
    tetromino: tetrominos[Math.floor(Math.random() * 7)]
}

//Handle window resize via event listener
window.addEventListener('resize',resizeCanvas,false) 

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.scale(50,50) //Scale each pixel by 50 w/h
    update()
}


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


function tick(){
    player.pos.y++; //Increase the Y value
    //Check the bounds

    dropCounter = 0; //Reset the counter otherwise the piece will free fall
}

function draw(){
    //Draw a black canvas
    ctx.fillStyle = '#000'; 
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //Draw the current Tetromino of the player
    drawTetromino(player.tetromino,player.pos)
}


function update(time = 0){
    const deltaTime = time - lastTime;
    dropCounter += deltaTime;
    if(dropCounter > dropInterval){
        tick();
    }
    lastTime = time;
    draw()
    requestAnimationFrame(update); //Call run before next frame
}


resizeCanvas();
