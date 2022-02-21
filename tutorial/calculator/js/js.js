const resultNum = document.querySelector('.resultNum');
const ac = document.querySelector('.Ac');
const enter = document.querySelector('.Enter');
const numbers = document.querySelector('.numbers');
const operator = document.querySelector('.operator');
let firstNum = '';
let operatorForAdvanced = '';
let previousKey = '';
let previousNum = '';
let arr = [];
ac.addEventListener('click',allClear);
enter.addEventListener('click',Enter);

function allClear(){
    arr = [];
    resultNum.innerHTML = '0';
    firstNum = '';
    previousNum = '';
    operatorForAdvanced = '';
    previousKey = '';
}

numbers.addEventListener('click',function(e){
    const action = e.target.className;
    const demical = e.target.idName;
    const buttonContent = e.target.textContent; 
    if(action === 'number'){
        if(resultNum.innerHTML === '0' && operatorForAdvanced === ''){
            resultNum.innerHTML = buttonContent;
            firstNum = resultNum.innerHTML
        }
        else if(resultNum.innerHTML !== '0' && operatorForAdvanced === ''){
            if(demical === 'demical'){
                resultNum.innerHTML = resultNum.innerHTML +'.'+ buttonContent;
                firstNum = resultNum.innerHTML; 
            }
            else{
                resultNum.innerHTML = resultNum.innerHTML + buttonContent;
                firstNum = resultNum.innerHTML;
            }
        }
        else{//둘다 아닐때
            if(previousKey === operatorForAdvanced ){
                arr.push(firstNum);
                console.log(arr);
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
        arr = [];
        arr.push(result);
    }
    else if(operator === '-') {
       result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
        arr = [];
        arr.push(result);
    }
    else if(operator === '*') {
       result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
        arr = [];
        arr.push(result);
    }
    if(operator === '/') {
       result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
        arr = [];
        arr.push(result);
    }
    resultNum.innerHTML = result
    
    }

function Enter(){
    arr.push(previousNum);
    calculate(arr[0],operatorForAdvanced,arr[arr.length-1]);
}
