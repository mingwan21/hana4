//const assert = require("require");

//template literal
const holiday = "한글날";
const month = 10,
  day = 9;

function f(tmplstrs, ...args) {
  console.log("🚀  templstrs:", tmplstrs);
  console.log("🚀  args:", args);
  let ret = tmplstrs[0];
  for (let i = 0; i < tmplstrs.length - 1; i += 1) {
    ret += args[i] + tmplstrs[i + 1];
  }

  return ret;
}

console.log(f`${holiday}은 ${month}월 ${day}입니다.`);

console.log("==========================");

regexp = /senior|coding/gi;
if (regexp.test("Junior Developer")) console.log("OK1");
if (regexp.test("Senior Developer")) console.log("OK2");
if (regexp.test("JS Coding")) console.log("OK3");
if (regexp.test("JavaScript Coding")) console.log("OK4");

regexp.exec("Senior Developer");

var s = "강원도 고성군 토성면";
console.log(s.match(/\S\S/g));

console.log("abcd-ef-g".search(/\w-\w/g));

console.log("영나수ㄴㅃㅅㄲ".match(/[시-옇]/g));

console.log("Senior Coding Learning JS".replace(/([A-Z]+)([a-z\s]*)/g, "$2-"));

console.log(
  "1234-2323-2323-2323".replace(/(\d{4})-(\d{4})-(.*)$/, "$1-####-$3")
);
console.log(
  "1234-2323-2323-2323".replace(
    /(\d{4})-(\d{4})-(.*)(\d{2})$/,
    "$1-$2-####-##$4"
  )
);

const str = "Senior Coding Learning JS";
const r = str.replace(/[A-Z]/g, (...args) => {
  console.log(args);
  return args[0].toLowerCase();
});

console.log(r);

const r2 = str.replace(/[A-Z]/g, (matchedStr, posioion, orgStrgin) => {
  return matchedStr.toUpperCase();
});

console.log(r2);
