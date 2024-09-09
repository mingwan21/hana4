const myName: string = 'mingwan';
const myAge: number = 28;
console.log("🚀 ~ myAge:", myAge)
console.log("🚀 ~ name:", myName) // 에러나는 이유는 하나의 파일로 인식해서

let x : number | string;
x = 1;
console.log("🚀 ~ x:", x);
x = 'abc';
console.log("🚀 ~ x:", x)

const len = x.length;

let y: number | undefined = undefined;
console.log("🚀 ~ y:", y);


type Member = {
    id: string;
    name: string;
    addr: string;
    discountRate: string;
};

type Guest = {
    id: number;
    name: string;
    age: number;
};

type Customer = Member | Guest;
let customer: Customer;
let m: Member;

