const hong = { id: 1, name: "hong" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "lee" };
const park = { id: 4, name: "park" };

const users = [hong, kim, lee, park];

const idxkim = users.indexOf(kim);
console.log("idxkim: ", idxkim);

const idxId2 = users.findIndex((a, i) => a.id === 3);
console.log("idxId2: ", idxId2);

const idxId1 = users.findLastIndex((a, i) => a.id === 1);
console.log("idxId2: ", idxId1);

//const find3 = (a) => a.id === 3;

const findID = (id) => (a) => a.id === id;
const idxId11 = users.findLastIndex(findID(1));
console.log("🚀 ~ idxId11:", idxId11);

console.log("--------------------");

users.forEach((a) => console.log(a.name));

const arr = [1, 2, 3, 4, 5];

const isOdd = (n) => n % 2 != 0;

arr.forEach((a) => console.log(a, isOdd(a)));

const kim2 = users.find((user) => user.name === "kim");
console.log("kim2:", kim2);

const hong2 = users.find((user) => user.name === "hong");
console.log("hong2:", hong2);

const hasIUsers = users.filter((user) => user.name.includes("i"));
console.log("🚀 ~ hasIUsers:", hasIUsers);

const names = users.map((user) => user.name);
console.log("🚀 ~ names:", names);

console.log("========================");

// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= num / 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// } //일반적으로 사용하는 소수판별법

const isPrime = (n) => {
  if (n === 1) return false;
  Array.from({ length: Math.sqrt(n) - 1 }, (_, i) => i + 2).every(
    (a) => n % a !== 0
  );
};

const hasPrime = (arr) => arr.some(isPrime);
assert.strictEqual(hasPrime([1, 2, 3]), true);

const primeNumbers = (arr) => arr.filter(isPrime);
assert.deepStrictEqual(primeNumbers(arr), [2, 3, 5]);

const arr100 = makeArray(100);
console.log("🚀  arr100:", arr100);
assert.deepStrictEqual(
  primeNumbers(arr100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]
);
