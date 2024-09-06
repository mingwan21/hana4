// const onceV1 = (f, rebirthDelay = 1000) => {
//   let done = false;
//   // return (...args) => !done && ((done = true), f(...args));
//   return (...args) =>
//     !done &&
//     setTimeout(() => (done = !done), rebirthDelay) &&
//     ((done = true), f(...args));
// };

const fnx = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fnx(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fnx(2, 7)); // undefined
console.log(fnx(3, 8)); // undefined

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
  r;
}
const fn = once(fivePart.bind({ id: 11 }));
console.log(fn(1, 2));
const fn2 = once(fivePart);
console.log(fn2.bind({ id: 22 })(3, 4));

function once(f, rebirthDelay = 1000) {
  let done = false;
  return function (...args) {
    if (done) return;
    done = true;
    setTimeout(() => (done = !done), rebirthDelay);
    // return f.bind(this)(...args);
    return f.apply(this, args);
    // return f.call(this, ...args);
  };
}

function test() {
  const maxRunCnt = 20;
  let runCnt = 0;
  const intl = setInterval(() => {
    console.log(fn(3, 8));
    if (++runCnt >= maxRunCnt) clearInterval(intl);
  }, 100);
}
