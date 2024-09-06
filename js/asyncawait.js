const afterTime = (sec) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 1000, sec));
/*
const r1 = await afterTime(1);
console.log("🚀 ~ r1:", r1);

afterTime(1).then((r1) => console.log("🚀 ~ r1:", r1));

afterTime(0.5).then(console.log);

async function f() {
  // async 는 제너레이터에 promise 씌운 형태, async는 promise 를 return 해줌
  const r2 = await afterTime(1);
  console.log("🚀 ~ f ~ r2:", r2);
} */

//filter에서의 실수

const odds = [1, 2, 3].filter(async (val) => {
  const r = await afterTime(val);
  console.log(r);
  return r % 2 === 1;
});
console.log("🚀 ~ odds ~ odds:", odds);

const ps = [1, 2, 3].map(afterTime);
const rrr = (await Promise.all(ps)).filter((n) => n % 2);
console.log("🚀 ~ rrr:", rrr);

//await으로 sleep 기능 만들기

const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await res.json();

  return data.name;
};

//Promise 실수 3
