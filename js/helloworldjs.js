function ex1() {
  for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(+i.toFixed(1));
  }
}
//ex1();

function old_swap() {
  let a = 1;
  let b = 2;
  let t = a;
  a = b;
  b = t;
  console.log(a, b);
}

function new_swap() {
  a = 1;
  b = 2;
  [b, a] = [a, b];
  console.log(a, b);
}

function arr_swap() {
  const arr = [1, 2];
  [arr[0], arr[1]] = [arr[1], arr[0]];
  console.log(arr);
}
//arr_swap();

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
