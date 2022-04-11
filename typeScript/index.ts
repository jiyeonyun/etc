let names :string | number = 'kim';
let array:string[] = ['kim','lee'];
let obj:{name:string} = {name :'kim'};

type ma = string | number;
let numm: ma = '123';

function 함수(x:number) :number{
    return x *2
}

type Member = [number,boolean];
let john:Member = [123,false];