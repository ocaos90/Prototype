var canvas = document.createElement( "canvas" );
var keyStates = [];
document.getElementById( "game" ).appendChild( canvas );
canvas.style.backgroundColor = "black";
canvas.width = WIDTH;
canvas.height = HEIGHT;
var context = canvas.getContext("2d");
context.strokeStyle = "white";
context.fillStyle = "white";
document.addEventListener( "keydown", function( key ) {
    keyStates[ key.keyCode ] = true;
 });
 document.addEventListener( "keyup", function( key ) {
    keyStates[ key.keyCode ] = false;
 });
var level = new Level( );
setInterval( gameLoop, MILISECONDS_PER_FRAME );



function gameLoop() {
    processInput();
    update();
    render();
}

function processInput() {
   level.processInput( );
}

function update() {
   level.update( );
}

function render( ) {
    context.clearRect( 0, 0, WIDTH, HEIGHT );
    level.render( );
}
