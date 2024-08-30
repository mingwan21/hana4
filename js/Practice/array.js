//push pop shift unshift
const assert = require("assert");
// function push(array, …args) {}
let arr = [1, 2, 3, 4];

const push = (arr, ...args) => [...arr, ...args];

const pop = (arr, idx = 1) =>
  idx === 1 ? arr.slice(-idx)[0] : arr.slice(-idx);
const pop1 = (arr, idx = -1) => {
  const result = arr.slice(idx);
  if (result.length === 1) return result[0];
  return result;
};

const unshift = (arr, ...args) => [...args, ...arr];

const shift = (arr, idx = 1) => arr.slice(idx);
const shift2 = (arr, idx = 1) => [arr.slice(0, idx), arr.slice(idx)];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

//return;

//========================
//deleteArray

// const deleteArray = (arr, start, end = Infinity) =>
//     arr.filter((a, i) =>
//         i< start || i >= end);

const deleteArray = (arr, start, end = Infinity) => {
  if (typeof start === "number")
    return arr.filter((a, i) => i < start || i >= end);

  return arr.filter((a) => a[start] !== end);
};

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
let users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);

//========================

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
users = [kim, lee, park]; // 오염되면 안됨!!

users.addUser = function (newer) {
  return [...this, newer];
};

users.removeUser = function (toRemoveUser) {
  return this.filter((user) => user.id !== toRemoveUser.id);
};

users.changeUser = function (fromUser, toUser) {
  return users.map((user) => (user.id === fromUser.id ? toUser : user));
};

["addUser", "removeUser", "changeUser"].forEach((fn) =>
  Object.defineProperty(users, fn, {
    enumerable: false,
  })
);
// Object.defineProperty(users, 'addUser', {
//   enumerable: false,
// });

users.addUser(hong); // [kim, lee, park, hong]
users.removeUser(lee); // [kim, park]
users.changeUser(kim, choi); // [choi, lee, park]

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

users.changeUser(kim, choi);
assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

//======================

arr = [1, 2, 3, true];
const ret1 = arr.map(String);
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);
const classNames1 = (...args) =>
  args.reduce((acc, a) => `${acc}${acc && a ? " " : ""}${a ? a : ""}`, "");
const classNames2 = (...args) => args.filter(Boolean).join(" ");
const classNames = (...args) =>
  args
    .map((a) => a.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s{2,}/g, " ");
// .replaceAll('  ', ' ');

const ret2 = classNames("", " a  b    c ", " d", " ", "e"); // cf. clsx
// console.log('🚀  ret2:', ret2);
assert.strictEqual(ret2, "a b c d e");

//======================
// my own reduce function

const reduce = (arr, fn, initValue) => {
  if (!arr || !Array.isArray(arr)) return [];

  let i = 0;
  let acc = initValue ?? ((i = 1), arr[0]);
  //   let acc = initValue;
  //   if (!initValue) {
  //     acc = arr[0];
  //     i = 1;
  //   }
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  return acc;
};

const r1 = reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
const r2 = reduce([1, 2, 3], (a, b) => a + b); // 6이면 통과!

console.log("🚀  r:", r1, r2);

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
// cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0);
reduce(users, (acc, user) => acc + user.name); // [object Object]LeePar

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

//=======================
//functions with reduce

const square = (a) => a ** 2;
const sqrt = (a) => Math.sqrt(a);
const cube = (a) => a ** 3;

arr = [1, 2, 3, 4, 5];

const r5 = arr.map(square).map(sqrt).map(cube);
console.log("🚀 ~ r5:", r5);

const basejob = [square, sqrt, cube];
const r6 = arr.map((a) => basejob.reduce((acc, job) => job(acc), a));
console.log("🚀 ~ r6:", r6);

//TryThis

const aJobs = [square, sqrt, cube];
const bJobs = [cube, square, sqrt];

const robot = (arr, jobs) => {
  const r7 = arr.map((a) => jobs.reduce((acc, job) => job(acc), a));
  return r7;
};

const t1 = robot(arr, aJobs);
console.log("🚀 ~ t1:", t1);
const t2 = robot(arr, bJobs);
console.log("🚀 ~ t2:", t2);

//assert.deepStrictEqual(robot(arr, aJobs), [1, 8, 27, 64, 125]);
//assert.deepStrictEqual(robot(arr, bJobs), [1, 64, 729, 4096, 15625]);

//============================
// range 평가문제
// const range = (start, end, gap) => {};

//============================
//keypair

const keyPairN2 = (arr, n) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
};

const keyPair = (arr, n) => {
  const cache = {}; // {짝이되는 값: 짝의 index}
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (val in cache) return [cache[val], i];
    cache[n - val] = i;
  }
};
keyPair([1, 3, 4, 5], 7); // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9); // [3, 4]  or [1, 5]
// cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4] || [1, 5]);

//============================
//range 과제 git clone 받아서 pr 날리는 방법으로 추석전에
/* rule f(s, e, step)
 - step 기본값 = s > e ? -1 : 1
 - step === 0 || s === e ? [s]
 - e 가 없다면,
  ⇒ s > 0 ? e = s, s = 1
  ⇒ s < 0 ? e = -1
  ⇒ s === 0 ? [0]
- 비정상
  ⇒ s > e && step > 0 ? []
  ⇒ s < e && setp < 0 ? []
  즉, (s - e) * step > 0
*/

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  // (start - end) * step > 0
  if ((start > end && step > 0) || (start < end && step < 0)) return [];

  //   if (end === undefined) {
  //     if (start > 0) {
  //       end = start;
  //       start = 1;
  //     } else if (start < 0) {
  //       end = -1;
  //     } else {
  //       // start가 0일 때
  //       end = 0;
  //     }
  //   }

  let tmp = start;
  end = end ?? (start > 0 ? ((start = 1), tmp) : start < 0 ? -1 : 0);

  const results = [];
  for (let i = start; i > end ? i >= end : i <= end; i++) {
    results.push(i);
  }

  return results;
};

const rng1 = range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log("🚀 ~ rng1:", rng1);

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
