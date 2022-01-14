const body = document.querySelector('body');


const width = window.outerWidth;
if(width>=1100){
    body.style.backgroundColor = '#FFCD00';
}
else if(width>=700){
    body.style.backgroundColor = '#C08EF2';
}
else{
    body.style.backgroundColor = '#70A9F3';
}


function changeBgColors(){
    const width = window.outerWidth;
    if(width>=1100){
        body.style.backgroundColor = '#FFCD00';
    }
    else if(width>=700){
        body.style.backgroundColor = '#C08EF2';
    }
    else{
        body.style.backgroundColor = '#70A9F3';
    }
}

window.addEventListener('resize',changeBgColors);