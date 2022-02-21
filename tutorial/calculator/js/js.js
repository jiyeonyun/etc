const resultNum = document.querySelector('.resultNum');
const ac = document.querySelector('.Ac');
const enter = document.querySelector('.Enter');
const numbers = document.querySelector('.numbers');
const operator = document.querySelector('.operator');
let firstNum = '';
let operatorForAdvanced = '';
let previousKey = '';
let previousNum = '';

ac.addEventListener('click',allClear);
enter.addEventListener('click',Enter);

function allClear(){
    resultNum.innerHTML = '0';
    firstNum = '';
    previousNum = '';
    operatorForAdvanced = '';
    previousKey = '';
}

numbers.addEventListener('click',function(e){
    const action = e.target.className; 
    const buttonContent = e.target.textContent; 
    console.log(action);
    console.log(buttonContent);
    if(action === 'number'){
        if(resultNum.innerHTML === '0' && operatorForAdvanced === ''){
            resultNum.innerHTML = buttonContent;
            firstNum = resultNum.innerHTML
        }
        else if(resultNum.innerHTML !== '0' && operatorForAdvanced === ''){
            resultNum.innerHTML = resultNum.innerHTML + buttonContent;
            firstNum = resultNum.innerHTML
        }
        else{//둘다 아닐때
            if(previousKey === operatorForAdvanced ){
                resultNum.innerHTML = buttonContent;
                previousKey = resultNum.innerHTML
                previousNum = resultNum.innerHTML;
            }
            else{
            resultNum.innerHTML = resultNum.innerHTML + buttonContent;
            previousNum = resultNum.innerHTML;
            }
        }
    }
    if(action === 'operator'){
        operatorForAdvanced = buttonContent;
        previousKey = operatorForAdvanced; 
    }

});

function calculate(n1, operator, n2) {
    let result = 0;
    if(operator === '+') {
      result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
    }
    else if(operator === '-') {
       result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
    }
    else if(operator === '*') {
       result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
    }
    if(operator === '/') {
       result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
    }
    resultNum.innerHTML = result
    
    }

function Enter(){
    calculate(firstNum,operatorForAdvanced,previousNum);
}
