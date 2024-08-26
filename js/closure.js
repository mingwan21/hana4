function counter() {
  let count = 0;
  return function X() {
    count += 1;
    return count;
  };
}
const counter1 = counter();
const counter2 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1

//--------------------------
console.log("=================");

let sum = 0;
for (let i = 1; i <= 100; i += 1) {
  sum += i;
}
console.log(sum);

console.log("recursion========");

function addTo100(a) {
  if (a == 100) return a;
  return a + addTo100(a + 1);
}
console.log(addTo100(1));

console.log("=================");

function makeArray(a) {
  let arr = new Array();
  let count = 0;
  count++;
  if (count == a) return arr;
  return a + makeArray(count);
}

console.log(makeArray(3));

function makeReverseArray(a) {
  let arr = new Array();
  let count = a;
  count--;
  if (count == 0) return arr;
  return a + makeArray(count);
}
