"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let xuserr;
xuserr = { id: 1, name: "xx" }; // OK
// xuser = { id: 1 }; // Error (Property 'name' missing in type)
// xuser = { id: 1, name: 'xx', age: 30 };
xuserr = { id: 1, name: "xx" };
const temp = { id: 1, name: "xx", age: 30 };
xuserr = temp; // Error ({id, name, age} is not assignable to type {id,name} )
const lee = { id: 1, name: "Lee" };
const kimm = { id: 2, name: "Kim", addr: "Seoul" };
const arrr0 = [{ id: 1, name: "Hong" }];
const arrr1 = [{ id: 1, name: "Hong" }, kimm];
const arrr2 = [{ id: 2, name: "Kim", addr: "Seoul" }, kimm];
const xemp = {
    id: 1,
    name: "xxx",
    addr: "Pusan",
    road: "Sumyun",
};
