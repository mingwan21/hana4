const ㄱ = "ㄱ".charCodeAt();
const ㅎ = "ㅎ".charCodeAt();
const 가 = "가".charCodeAt();
const 힣 = "힣".charCodeAt();
const 자음알파벳 = [..."LMNRlmnr"].map((a) => a.charCodeAt());
const 자음숫자 = [..."136780"].map((n) => n.charCodeAt());

function isEndJaum(str) {
  const s = str.charCodeAt(str.length - 1);
  return (
    (s >= ㄱ && ㄴ <= ㅎ) || 자음알파벳.includes(s) || 자음숫자.includes(n)
  );
}

const josa = (str,)

const iga = str => josa(str, '이/가');
const eunun = str => josa(str, '은/는');
const eulul = str => josa(str, '을/를');
const eyuya = str => josa(str, '이어야');

export {josa, eunun, eulul, eyuya};