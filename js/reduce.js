import assert from "assert";

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log("🚀 ~ result:", result);

const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
const obj = objs.reduce((acc, o) => ({ ...acc, ...o }));
assert.deepStrictEqual(obj, { id: 5, name: "Hong", addr: "Seoul" });
