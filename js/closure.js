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

console.log("TCO==============");

function addTo100TCO(a, sum = 0) {
  if (a == 100) return sum + 100;
  return addTo100(a + 1, sum + a);
}

console.log(addTo100TCO(1));

console.log("makeArray=======");

function makeArray(a) {
  if (a == 1) return [a];
  return;
}

console.log(makeArray(3));

console.log("makeReverseArray===");

function makeReverseArray(a) {
  if (a == 1) return [1];
  return;
}

console.log("makeArrayTCO======");

function makeArrayTCO1(n, acc = []) {
  if (n == 1) return [1, ...acc];

  return makeArrayTCO1(n - 1, [n, ...acc]);
}

function makeArrayTCO2(n, acc = []) {
  // 엄격하게 TCO 따져보면
  const t = [n, ...acc];
  if (n == 1) return [1, ...acc];
  return makeArrayTCO2(n - 1, t);
}
