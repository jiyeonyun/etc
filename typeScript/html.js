let 제목 = document.querySelector('#title');
// if(제목 !== null){
//     제목.innerHTML = '반가워요'
// }
//글자 바꾸려면 narrowing 잘해야함
if (제목 instanceof Element) { // 
    제목.innerHTML = '반가워요';
}
// let 제목 = document.querySelector('#title') as Element; 
//이렇게 할수도 있음 근데 비상시 쓰거나 백퍼 확신시..
// if(제목?.innerHTML) => 조건이 붙게됨 있으면 출력해주고 없으면 undefined뱉으셈
let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
let 버튼 = document.querySelector('#button');
if (버튼 instanceof HTMLButtonElement) {
    버튼.addEventListener('click', function () {
    });
}
let img = document.querySelector('#image');
if (img instanceof HTMLImageElement) {
    img.src = 'new.jpg';
}
let naver = document.querySelectorAll('.naver');
if (naver instanceof HTMLAnchorElement) {
    naver.href = 'https://kakao.com';
}
