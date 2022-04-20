let 이름23;
//이 변수에는 무조건 'kim' 만 들어올수 있음 더 엄격한
let 접니다;
//literal types의 장점: 변수에 뭐가 들어올지 더 엄격하게 관리 가능
function 함수(a) {
    return 1;
}
함수('hello');
//연습용 문제
function 가위바위보(a) {
    return ['가위'];
}
//const 변수의 한계
const 변수 = {}; //오브젝트 안의 데이터는 바꿀수있음 literaltype은 두개이상 저장가능
var 자료 = {
    name: 'kim'
}; // 이 오브젝트 자료를 만들때 타입지정을 리터럴지정 알아서 해주세요
//효과: object value값을 그대로 타입으로 지정해줌
function 내함수(a) {
}
//literal type의 문제점
// 내함수(자료.name); //타입이 킴이아니라 스트링임
내함수(자료.name);
