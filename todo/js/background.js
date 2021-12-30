const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg"
]

const chosenImage = images[Math.floor(Math.random()*(images.length-1))];

const bgImage= document.querySelector('body');
bgImage.style.backgroundImage = `url('img/${chosenImage}')`;
