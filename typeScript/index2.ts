//union type

let 회원 : (number|string) = 123;
// let 회원 : number|string = 123; =>넘버가 들어올수도있고 스트링이 들어올수도있다
let 회원들3 : (number|string)[] = [1,'2',3];
let 오브젝트 :{a:(number|string)} = {a:123};

//any type =>모든 자료형 허용해줌 근데 이거 쓰면 타입스크립트 쓰는 의미가 없음(타입실드 해제 문법임)

let name2:any;
//unknown => any랑 똑같음 조금 더 안전함 왜냐면..실드를 쓰긴함
let name3:unknown;
name3 = 123;

let 변수1:string = name3;
name3 -1 //=> 숫자끼리만 가능 unknow타입은 연산 안됨 타입 엄격하게 지켜야함

let 나이2 : string | number;
나이2+1; //타입 맞는데 왜 안되냐면... 타입스크립트는 엄격해서 +1 은 string가능 num가능 string|number 불가능


let user:string = 'kim';
let age2:(undefined|number) = undefined;
let married:boolean = false; 
let 철수:(string|undefined|number|boolean)[] = [user, age, married];

let 학교:{score:number[]|boolean,
        teacher:string,
        friend:string|string[]
    } 
    = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
    }
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]