const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("xx");
    reject("error");
    resolve("ok");
  }, 1000);
});

console.log("p = ", p);

p.then((succResult) => {
  console.log("🚀 ~ succResult:", succResult);
}).catch((error) => {
  console.log("🚀 ~ error:", error);
});

const ppp = p.then((succResult) => {
  console.log("🚀 ~ ppp ~ succResult:", succResult, p);
  return new Promise((resolve) => resolve("OKPPP"));
});

ppp.then((x) => console.log("ppp.x = ", x));
p.then((x) => console.log("p.x = ", x));
