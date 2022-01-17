const Btn = document.querySelector('button');
const NumberResult = document.querySelector('.resultnum');
const GameResult = document.querySelector('.gameresult');
const GenerateNum = document.querySelector('#Gnumber');
const GuessNum = document.querySelector('#Gusessnum');


function randomNum(min, max){
    var randNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randNum;
}
function RandomNumGame(event){
    event.preventDefault()
    let randNum = randomNum(0,GenerateNum.value);    
    NumberResult.innerHTML = `You chose : ${GuessNum.value} , the machine chose: ${randNum}`
        if(randNum == GuessNum.value){
            GameResult.innerText = 'you win!';
        }
        else{
            GameResult.innerText = 'you lose!';
        }
}

Btn.addEventListener('click',RandomNumGame);