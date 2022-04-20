class Person {
    constructor(a) {
        this.name = a;
    }
    함수(a) {
        console.log('hi' + a);
    }
}
let 사람1 = new Person('kim');
let 사람2 = new Person('park');
사람1.함수('안녕');
//숙제
class Car {
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    tax() {
        let result = this.price / 10;
        return result;
    }
}
//숙제 2
class Word {
    constructor(...param) {
        param.forEach((a) => {
            if (typeof a == 'string') {
                this.str.push(a);
            }
            else if (typeof a == 'number') {
                this.num.push(a);
            }
        });
    }
}
