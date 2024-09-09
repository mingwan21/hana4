"use strict";
let userr;
xuser = { id: 1, name: "xx" }; // OK
// xuser = { id: 1 }; // Error (Property 'name' missing in type)
// xuser = { id: 1, name: 'xx', age: 30 };
xuser = { id: 1, name: "xx" };
const temp = { id: 1, name: "xx", age: 30 };
xuser = temp; // Error ({id, name, age} is not assignable to type {id,name} )
const lee = { id: 1, name: "Lee" };
const kimm = { id: 2, name: "Kim", addr: "Seoul" };
const arrr0 = [{ id: 1, name: "Hong" }];
const arrr1 = [{ id: 1, name: "Hong" }, kim];
const arrr2 = [{ id: 2, name: "Kim", addr: "Seoul" }, kim];
const xemp = {
    id: 1,
    name: "xxx",
    addr: "Pusan",
    road: "Sumyun",
};
