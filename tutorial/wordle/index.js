const answers =['apple','happy','house','maple'];
const EnterBtn = document.querySelector('button');
const modalTitle = document.querySelector('.modal_title');
const modal = document.querySelector('.modal');
const nullModal =document.querySelector('.null_modal')
const resultModal = document.querySelector('.result_modal');
const resultModalResult = document.querySelector('.result_modal_result');
const resultmodalTitle = document.querySelector('.resultmodal_title');
const game = document.querySelector('.game');



let times = 0;
let answer = '';



function reload(){
    location.reload();
}

//랜덤 숫자 생성 
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 플레이 버튼
function play(){
    let randnum = rand(0,answers.length-1);
        answer = answers[randnum];
        console.log(answer);
        
    modal.setAttribute('class','modal hide')
    game.setAttribute('class','game')
}



function answerCheck(){
    let input = document.querySelectorAll('.answer'); 
    let realAnswer = input[0].value+input[1].value+input[2].value+input[3].value+input[4].value; 
    if(times < 5){
        if(input[0].value == '',input[1].value == '', input[2].value == '',input[3].value == '' ,input[4].value == ''){
            nullModal.setAttribute('class','.null_modal');
        }
        else{
            if(realAnswer == answer){
                game.setAttribute('class','game hide')
                resultModal.setAttribute('class','result_modal')
            }
            else{
                nullModal.setAttribute('class','.null_modal hide');
            for(let i = 0; i < 5; i++){
                if(input[i].value == answer[i]){
                    input[i].style.background = 'rgb(150 227 0)';
                }
                else if(answer.includes(input[i].value)){
                    input[i].style.background = 'rgb(255 207 34)';
                }
                else{
                    input[i].style.background = '#ff3b00';
                }
                input[i].classList.remove('answer');
            }
        
            const template = `<div>
            <input type="text" id="n1" maxlength="1" class="answer">
            <input type="text" id="n2" maxlength="1" class="answer">
            <input type="text" id="n3" maxlength="1" class="answer">
            <input type="text" id="n4" maxlength="1" class="answer">
            <input type="text" id="n5" maxlength="1" class="answer">
            </div>`;
            document.querySelector('.game').insertAdjacentHTML('beforeend',template);
            
            times= times+1;
            }
        }
    }
    else{
        game.setAttribute('class','game hide');
        resultModal.setAttribute('class','result_modal');
        resultModalResult.innerText = `you lose 👻`
    }
}


EnterBtn.addEventListener('click',answerCheck);
modalTitle.addEventListener('click',play);
resultmodalTitle.addEventListener('click',reload)
