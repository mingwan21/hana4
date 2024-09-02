const assert = require("assert");
const arr = [1, 2, 3, 4];

const push = ({ a, b }) => {
  a.splice(a.end(-1), b.length(), b);
};

const pop = ({ a, b }) => {};

//push
assert.deepStrictEqual(push(arr, 5, 6));
//pop
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr), 2);
//unshift
assert.deepStrictEqual(unshift(arr), 0);
assert.deepstrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
//shift
assert.deepstrictEqual(shift(arr), [2, 3, 4]);
assert.deepstrictEqual(shift(arr, 2), [3, 4]);
//
assert.deepstrictEqual(arr, [1, 2, 3, 4]);
pstrictEqual(shift(arr), [2, 3, 4]);
