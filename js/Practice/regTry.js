const assert = require("assert");
//ex1)
/* const total = { price: 45000, vat: 4500 };

function fmt(tmplstrs, ...args) {
  //   console.log("🚀  templstrs:", tmplstrs);
  //   console.log("🚀  args:", args);
  let ret = tmplstrs[0];

  for (let i = 0; i < tmplstrs.length - 1; i += 1) {
    ret +=
      args[i].toLocaleString("en-GB", { timeZone: "UTC" }) + tmplstrs[i + 1];
    // console.log("🚀 ~ fmt ~ tmplstrs:", tmplstrs[i + 1]);
    // console.log("🚀 ~ fmt ~ args:", args[i]);
  }

  return ret;
}

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);
 */
console.log("===============================");

/* const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

const fmt = [lable];

function fmt([lable, unit], price) {
  return `${lable} ${price.toLocalString().padStart(9)}${unit}`;
}
 */
//ex2)
for (let i = "가".charCodeAt(); i <= "거".charCodeAt(); i++) {
  if ((i - 44032) % 28 === 0)
    console.log(i - 44032, (i - 44032) % 28, String.fromCharCode(i));
}

const ㄱ = "ㄱ".charCodeAt();
const ㅎ = "ㅎ".charCodeAt();
const 가 = "가".charCodeAt();
const 자음알파벳 = [..."LMNRlmnr"].map((a) => a.charCodeAt());
const 자음숫자 = [..."136780"].map((n) => n.charCodeAt());

function isEndJaum(str) {
  const s = str.charCodeAt(str.length - 1);
  return (s - 가) % 28 !== 0 || (s >= ㄱ && ㄴ <= ㅎ) || 자음알파벳.includes(s);
}
/* function isEndJaum(word) {
  let lastLetter = word[word.length - 1];
  let uni = lastLetter.charCodeAt(0);
  if (uni < 44032 || uni > 55203) return false;
  else if (uni === "l" || uni === "m") return true;
  return (uni - 44032) % 28 != 0;
}

console.log(isEndJaum("강원도")); // false
console.log(isEndJaum("바라당")); // true
console.log(isEndJaum("ㅜㅜ")); // false
console.log(isEndJaum("케잌")); // true
console.log(isEndJaum("점수 ")); // false lmnr   cf. isEndJaum('알파벳L')은 true
console.log(isEndJaum("24")); // false   cf. isEndJaum('23')은 true 136780 */

//ex3

// s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];

// searchByKoreanInitialSound(s, "ㄱㅅㄱ");
// searchByKoreanInitialSound(s, "ㅌㅅㅁ");
// searchByKoreanInitialSound(s, "ㅂㅁ");
// searchByKoreanInitialSound(s, "ㅍㅁ");
// searchByKoreanInitialSound(s, "ㄱ1ㅅ");

/* assert.equal(isEndJaum("아지오"), false);
assert.equal(isEndJaum("북한강"), true);
assert.equal(isEndJaum("뷁"), true);
assert.equal(isEndJaum("강원도"), false);
assert.equal(isEndJaum("바라당"), true);
assert.equal(isEndJaum("ㅜㅜ"), false);
assert.equal(isEndJaum("케잌"), true);
assert.equal(isEndJaum("점수 A"), false);
assert.equal(isEndJaum("알파벳L"), true);
assert.equal(isEndJaum("24"), false);
assert.equal(isEndJaum("23"), true);

assert.strictEqual(`고성군${iga("고성군")}`, "고성군이");
assert.strictEqual(`고성군${eunun("고성군")}`, "고성군은");
assert.strictEqual(`고성군${eulul("고성군")}`, "고성군을");
assert.strictEqual(`성동구${iga("성동구")}`, "성동구가");
assert.strictEqual(`성동구${eunun("성동구")}`, "성동구는");
assert.strictEqual(`성동구${eulul("성동구")}`, "성동구를"); */

//ex4
//1)
function upperToLower(str) {
  return str.replace(/[A-Z]/g);
}

upperToLower("Senior Coding Learning JS");
// ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

//2)
const swapCase = (str) =>
  str.replace(/([A-Z]*)([a-z]*)/g, (...args) => {
    console.log(args);
    return "X";
  });

assert.equal(
  swapCase("Senior Coding Learning JS"), // 대문자 그룹과 소문자 그룹으로 나눔
  "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 4 Class"), "hANARO 4 cLASS");
assert.equal(swapCase("HeLLo WoRLd"), "hEllO wOrlD");
