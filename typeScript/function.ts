function 함수(x:number) :number //리턴값은 여기에
{
    return x*2
}
함수(6);
//void -> return 이 없을 경우 :: 리턴쓰기 싫은 함수에 붙이면 실수로 return하는걸 막아줌
function 함수2 (x:number) :void{
    1+1;
}
//타입 지정된 파라미터 쓰면 파라미터 필수임 썡 자바스크립트에서는 함수() 이거 되는데 함수(x)에 안쓰면 에러남 그거 싫으면~

function 함수3 (x?:number) :void{
    1+1;
}
//?쓰면 파라미터가 옵션됨  파라미터변수? :타입 = undefined랑 똑같음 ? 치나 undefined 치나 똑같음

//숙제

function hi(name:string|undefined){
    if(name === null){
        console.log('이름이 없습니다.')
    }
    console.log(`안녕하세요${name}`);
}

function countNum(num:string|number):number{
    const numS = num.toString;
    const count = numS.length;
    return count;
}

function 가능한(월소득:number,집:boolean,매력:string){
    let score:number;
    if(집){
        if(매력 === '상'){
            score= 월소득+500+100;
        }
        else{
            score= 월소득+500
        }
    }
    else{
        if(매력 ==='상'){
            score= 월소득+100
        }
        else{
            score=  월소득
        }
    }
    if(score>=600){
        return '결혼가능'
    }
    
}
console.log(가능한(100,true,'상')) 

//type alias에 함수타입 저장해서 쓰는법
type 함수타입 = (a:string) => number;


let 함수333  :함수타입  = function(){
    return 10;
}
//함수 type alias부착하려면 함수 표현식 써야함

type 회원정보  ={
    name: 'kim',
    plusOne : (a:number) => number,
    changeName: ()=> void
}
type CutzeroType = (a:string) => string;

let cutZero : CutzeroType = function(a){
        let result =   a.substring(0,1);
    return result;
}

type removeType = (a:string) => number;


let removeDash :removeType = function(a){
    if(a.includes('-')){
        a.replace(/\-/g,'');
    }
    return parseInt(a);
}

function 만들함수(a:string , func1 ,func2){
    let result = func1(a)
    let result2 = func2(result);
    console.log(result2);
}