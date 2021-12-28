const images = [
    "01.png",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg"
]

const chosenImage = images[Math.floor(Math.random()*(images.length-1))];

const bgImage= document.createElement('img');

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);