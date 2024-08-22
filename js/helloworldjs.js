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

function destructuring_ex1() {
  const hong = { id: 1, name: "Hong" };
  const lee = { id: 2, name: "Lee" };

  function f1(user) {
    console.log(user.id, user.name);
  }

  function f2({ id, name }) {
    console.log(id, name);
  }

  const f3 = ({ id, name }) => {
    console.log(id, name);
  };
}

// let rr = qq * 10;
// let qq = 1;

function destructuring_ex2() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const id1 = arr[0][0].id;
}

function destructuring_ex3() {
  const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
  function getValueExceptInitial(k) {
    // if (k == "name") {
    //   const temp = user.name;
    // } else if (k == "passwd") {
    //   const temp = user.passwd;
    // } else if (k == "addr") {
    //   const temp = user.addr;
    // }
    // const = user;
    // const = [...val];
    return;
  }
}
