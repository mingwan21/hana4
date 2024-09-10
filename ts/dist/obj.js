"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let xuser;
xuser = { id: 1, name: "xx" }; // OK
/*
xuser = { id: 1 }; // Error (Property 'name' missing in type)
xuser = { id: 1, name: "xx", age: 30 }; // Error ({id, name, age} is not assignable to type {id,name} )
*/
const tmp = { id: 1, name: "xx", age: 30 }; // 할당하게되면 꺼지게 됨.
xuser = tmp;
let hong;
hong = { id: 1, name: "Hong" }; // OK
//hong = {id: 1}; // Error (name property missing)
//hong = {id: 1, name: 'Hong', addr: 'Pusan'}; // Error(not assignable)  Freshness!
hong = { id: 1, name: "Hong", addr: "Pusan" }; // OK (turn-off Freshness!)
const kim = { id: 2, name: "kim", addr: "seoul" }; //freshness 가 꺼짐
const arr = [
    { id: 1, name: "hong" },
    { id: 1, name: "hong", addr: "seoul" }, // 이건 왜? 뒤에 kim이 있음 너네 전부 addr 갖고 있구나 라고 판단
    kim,
];
const arr1 = [
    { id: 1, name: "hong" },
    //{ id: 1, name: "hong", addr: "seoul" } // 이건 실수했다고 판단 하고 오류 날림
];
const xempp = {
    id: 1,
    name: "xxx",
    addr: "Pusan",
    road: "Sumyun",
};
