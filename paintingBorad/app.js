const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDouwn(event){
    painting = true;
}

function onMouseup(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',onMouseDouwn);
    canvas.addEventListener('mouseup',onMouseup);
    canvas.addEventListener('mouseleave',stopPainting);
}