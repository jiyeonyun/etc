const resultNum = document.querySelector('.resultNum');
const ac = document.querySelector('.Ac');
const enter = document.querySelector('.Enter');
const number = document.querySelector('.numbers');
const operator = document.querySelector('.operator');
let values = [];
function allClear(){
    resultNum.innerHTML = '0';
}

function setNumber(e){
    if(e.target.className === 'number'){
        resultNum.innerHTML= (e.target.textContent);
    }
    else{
        calculate(operator);
    }
}

function calculate(n1, operator, n2) {
    let result = 0;
    if(operator === '+') {
        result = Number(n1) + Number(n2); 
    }
    else if(operator === '-') {
        result = Number(n1) - Number(n2); 
    }
    else if(operator === '*') {
       result = Number(n1) * Number(n2);  
    }
    if(operator === '/') {
        result = Number(n1) / Number(n2); 
    }
    return String(result);
    }

ac.addEventListener('click',allClear);
enter.addEventListener('clcik',calculate);
number.addEventListener('click',setNumber);

