const before = () => console.log("before...");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log("${greeting}, ${name}");
const someFn2 = (id, nickname, email, level) =>
  console.log("${id}/${nickname}/${email}/${level}");

const template =
  (f) =>
  (...args) => {
    before();
    const ret = f(...args);
    //after();
    setTimeout(after);
    return ret;
  };

const temp = template(someFn);
const temp2 = template(someFn);

temp("sico", "hello");
temp2(1, "sico", "sico@gmail.com", 5);
console.log("square of 7 =", template((n) => n ** 2)(7));
