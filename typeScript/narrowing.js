function 내함수(x) {
    let array = [];
    if (typeof x === 'string') {
        return x + 1;
    }
    if (typeof x === 'number') {
        array[0] = x;
    }
}
내함수(123);
//type이 하나로 확정되지 ㅇ낳았을 경우 type narrowin 써야함
//if문 썼으면 끝까지 써야 안전 else문 확실하게 넣어주셈
//narrowing 으로 판정해주는 문법 1.typeof변수 2. 속성명 in 오브젝트 자료 3.인스턴스 instanceof부모
function 내함수2(x) {
    let array = [];
    array[0] = x; //이렇게 해주면 assertion 타입 덮어쓰기 임
}
//assertion문법의 용도
//1. Narrowing 할때 씁니다 타입을 a에서 b로 바꿔주는게 아님
//2. 무슨타입이 들어올지 100% 확실할때 쓰셈 걍 if문 쓰세요.. 버그 추적 못합니다..
//3. 남의 코드 수정할때 비상용으로 쓰십시오..
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
//숙제
function clean(x) {
    let newArr = [];
    if (typeof x === 'string') {
        newArr.push(Number(x));
    }
}
function subjec(x) {
    if (Array.isArray(x)) {
        return x[x.length - 1];
    }
    else if (typeof x === 'string') {
        return x;
    }
}
console.log(subjec(철수쌤));
