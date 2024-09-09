const myName: string = "mingwan";
console.log("🚀 ~ myName:", myName);
const myAge: number = 33;
console.log("🚀 ~ myAge:", myAge);

let x: number | string;
x = 1;
x = "abc";
const len = x.length;

var y: number | undefined;
console.log("🚀 ~ y:", y);

let john = {
  firstName: "John",
  lastName: "ahn",
};

//john.middleName;

type User = {
  id: number;
  name: string;
  age: number;
  address: string;
};
/* 인터페이스랑 타입 뭐 쓸지 고민되면 타입 쓰면 됨
interface User  {
  id: number;
  name: string;
  age: number;
  address: string;
}; 
*/

let kong: User;

const something = ({ id, name, age, address }: User) => {
  // Do something...
  kong = { id, name, age, address };
};

const sltr = "LITERAL";
let nltr = 100;
let literal: "LITERAL";
literal = sltr;
let str: string;
str = "xxxx";
str = sltr;

let grade: "S" | "A" | "B" | "D";
grade = "A";

//------------------------------
type Member = {
  name: string;
  addr: string;
  discountRate: number;
  //discountRate?: number; ? 붙여주면 옵션으로 있어도 없어도
};
type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;

let customer: Customer;
let m: Member;
let g: Guest;

customer = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};

customer = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
  age: 26,
};

console.log("🚀 ~ customer:", customer);

const xx = {
  name: "홍길동",
  age: 26,
  addr: "용산구",
};
g = xx;
//m = xx; 오류, 타입에 discountrate가 있어야 하는데 xx 에 없음

if ("age" in xx) g = xx; // g에는 있고 m에는 없는
else m = xx;
