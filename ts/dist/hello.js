"use strict";
const myName = "mingwan";
console.log("🚀 ~ myName:", myName);
const myAge = 33;
console.log("🚀 ~ myAge:", myAge);
let x;
x = 1;
x = "abc";
const len = x.length;
var y;
console.log("🚀 ~ y:", y);
let john = {
    firstName: "John",
    lastName: "ahn",
};
/* 인터페이스랑 타입 뭐 쓸지 고민되면 타입 쓰면 됨
interface User  {
  id: number;
  name: string;
  age: number;
  address: string;
};
*/
let kong;
const something = ({ id, name, age, address }) => {
    // Do something...
    kong = { id, name, age, address };
};
const sltr = "LITERAL";
let nltr = 100;
let literal;
literal = sltr;
let str;
str = "xxxx";
str = sltr;
let grade;
grade = "A";
let customer;
let m;
let g;
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
if ("age" in xx)
    g = xx; // g에는 있고 m에는 없는
else
    m = xx;
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];
const result1 = nums1.concat(nums2);
// 당연히 result1은 number[]
const strings1 = ["lim", "eun", "ha"];
const result2 = strings1.concat(strings1);
console.log("🚀 ~ result2:", result2);
