// type Square = {color : string ,width: number}
interface Square{
    color: string;
    width: number;
}
let 네모 = {color :'red' , width :100}

interface Info extends Square{
    name : string;
    age :number;
}
//interface 장점: extends로 복사 가능
//& 기호는 두 타입을 전부 만족하는~~  extends는 복사
//interfaces는 타입이름 중복 선언이 가능하다 type은 중복선언이 불가능하다.

//숙제1
interface Product {
    brand: string;
    serialNumber : number;
    model :string[];
}
let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

let 장바구니:Bascket[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

interface Bascket {
    product : string, 
    price: number
}
interface card extends Bascket{
    card:boolean
}

interface obg{
    plus : (a:number , b:number) => number,
    minus : (a:number , b:number) => number,
}

let object:obg = {
    plus(a,b){
        return a+b
    },
    minus(a,b){
        return a-b
    }
}