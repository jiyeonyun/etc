//위의 코드처럼 사람.sayHi()라고 작성하면 콘솔창에 '안녕 나는 손흥민' 이라는 글자가 나와야합니다. 

//'손흥민'이라고 이름을 하드코딩해서 출력하기보다는 실제 내 오브젝트에 있는 name에 해당하는 값이 출력되면 참 좋을 것 같군요. 

//Q. sayHi()라는 함수를 어디서 어떻게 만들면 될까요? 

// var 사람 = {
//     name: '손흥민',
//     sayHi: () => {
//         console.log(`안녕 나는 ${사람.name}`);
//     }
//   }
  

  // 사람.sayHi(); //안녕 나는 손흥민 

//위처럼 자료.전부더하기()라고 쓰면 자료.data 안에 있는 모든 숫자를 더해서 콘솔창에 출력해주어야합니다. 

//(아마 15가 뜨게 되겠죠?)

//Q. 어떻게 코드를 짜면 될까요? 

//조건) 위에있는 자료라는 object 중괄호 {} 내에 코드 작성 금지 

  var 자료 = { 
    data : [1,2,3,4,5] 
  }

자료.전부더하기 = function(){
    var sum = 0;
    this.data.forEach((a)=>{
        sum = sum+a;
    });
    console.log(sum);
}

    자료.전부더하기();


// var pants = 20;
// var socks = 100;
// `바지${pants} 양말${socks}`;

// function 해체분석기(문자,변수,변수2){
//   console.log(문자[1]+변수+문자[0]+변수2);
// };
// 해체분석기`바지${pants} 양말${socks}`; 

var pants = 0;
var socks = 100;
`바지${pants} 양말${socks}`;

  // function 해체분석기(문자,변수,변수2){
  //   if(pants == 0){
  //     console.log(문자[0]+'다팔렸어요'+문자[1]+변수2);
  //   }
  //   else{
  //     console.log(문자[0]+변수+문자[1]+변수2);
  //   }
  // };
  // 해체분석기`바지${pants} 양말${socks}`;

  function getFinalString(s) {
    // Write your code here
    
  }
  // console.log(getFinalString('GAWSREDWAWS'));

  function longestChain(words) {
    // Write your code here

}

function maxLength(a, k) {
  // Write your code here
  const newArr = [];
  for(let i = 0 ; i<a.length ; i++){
      newArr.push(a[i]);
  }
  
}

console.log(maxLength([1,2,3],3));