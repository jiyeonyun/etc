'use strict';

const santa_SIZE = 100;
const santa_COUNT = 1;
const person1_COUNT = 6;
const person2_COUNT = 8;
const GAME_DURATION_SEC = 20;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const timerIndicator = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');
const SantaPopup = document.querySelector('.findSanta');

const santaSound = new Audio('./sound/Bell.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const personSound = new Audio('./sound/Cartoon.mp3');
const winSound = new Audio('./sound/xmas.mp3');

let stepSize = 4;
let stepX = stepSize;
let stepY = stepSize;
const x2 = fieldRect.width - santa_SIZE;
const y2 = fieldRect.height - santa_SIZE;

let moveKey2 = undefined;
let started = false;
let score = 0;
let timer = undefined;
let gameId=0;

field.addEventListener('click', onFieldClick);
gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});
popUpRefresh.addEventListener('click', () => {
  startGame();
  hidePopUp();
});

function startGame() {
  started = true;
  hideFindSantaPopup();
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
  gameId = 0;
  } 


function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  showPopUpWithText('REPLAY❓');
  playSound(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  started = false;
  hideGameButton();
  if (win) {
    playSound(winSound);
  } else {
    playSound(personSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  showPopUpWithText(win ? '🎅🏻Merry christmas~~⛄️' : '👻one more?');
}

function showStopButton() {
  const icon = gameBtn.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
  gameBtn.style.visibility = 'visible';
}

function hideGameButton() {
  gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
  timerIndicator.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(score === santa_COUNT);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerIndicator.innerHTML = `🎄${minutes}:${seconds}🎅🏻`;
}

function showPopUpWithText(text) {
  popUpText.innerText = text;
  popUp.classList.remove('pop-up--hide');
}

function hidePopUp() {
  popUp.classList.add('pop-up--hide');
}
function hideFindSantaPopup(){
  SantaPopup.classList.add('pop-up--hide');
}
function showFindSantaPopup(){
  SantaPopup.classList.remove('pop-up--hide');
}
function initGame() {
  score = 0;
  field.innerHTML = '';
  gameScore.innerText = santa_COUNT;
  addItem('santa', santa_COUNT, 'img/santa.png');
  addItem('person', person1_COUNT, 'img/person1.png');
  addItem('person2', person2_COUNT, 'img/person2.png');
  moveKey('santa');
  // moveKey('person2');
}

function onFieldClick(event) {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches('.santa')) {
    target.remove();
    score++;
    playSound(santaSound);
    updateScoreBoard();
    if (score === santa_COUNT) {
      finishGame(true);
      gameId =1;
      moveKey('santa');
    }
  } else if (target.matches('.person')) {
    finishGame(false);
  }
  else if (target.matches('.person2')) {
  finishGame(false);
}
}


function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScoreBoard() {
  gameScore.innerText = santa_COUNT - score;
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  for (let i = 0; i < count; i++){
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    let x = randomNumber(x1, x2);
    let y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item); 
  }
}
function startMove(className){
  let randoms = document.querySelector(`.${className}`);
        let randomX = parseFloat(randoms.style.left);
        let randomY = parseFloat(randoms.style.top);
        console.log(randomX);
        console.log(randomY);
          randomX += stepX;
          randomY += stepY;
          if(randomX>x2){stepX -= stepSize};
          if(randomX<0){stepX = stepSize};
          if(randomY>y2){stepY -= stepSize};
          if(randomY<0){stepY = stepSize};
          randoms.style.position = 'absolute';
          randoms.style.left =`${randomX}px`;
          randoms.style.top =`${randomY}px`;
}    
function moveKey(className){
 
  // if(gameId === 0){
  //   gameId =setInterval(startMove,20,className);
  // }
  // else if(gameId === 1){
  //   clearInterval(gameId)
  // }

  moveKey2 = setInterval(() => {
    if (gameId === 1) {
      clearInterval(moveKey2);
      return;
    }
    startMove(className);
  }, 20);
}


function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
