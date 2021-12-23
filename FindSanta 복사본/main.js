'use strict';

const santa_SIZE = 80;
const santa_COUNT = 5;
const person1_COUNT = 10;
const person2_COUNT = 10;
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


let started = false;
let score = 0;
let timer = undefined;


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
    }
  } else if (target.matches('.person')) {
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
  const x2 = fieldRect.width - santa_SIZE;
  const y2 = fieldRect.height - santa_SIZE;
  let stepSize = 4;
  let stepX = stepSize;
  let stepY = stepSize;
  let gameId = 0;
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
   
    if(gameId === 0){
      gameId = setInterval(startMove,20);
    }
    function startMove(){
        x += stepX;
        y += stepY;
        if(x>x2){stepX =- stepSize};
        if(x<0){stepX = stepSize};
        if(y>y2){stepY =- stepSize};
        if(y<0){stepY = stepSize};
        item.style.left =`${x}px`;
        item.style.top = `${y}px`;
      }
      }
     
      
  }
  




function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
