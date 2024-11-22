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

destructuring_ex1();

function destructuring_ex2() {
  const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
  const { passwd, ...userinfo } = user; // 일반적 정답
  //const userinfo = {...user};
  //delete user.passwd; //다른 정답
  console.log(userinfo);
}
destructuring_ex2();

function destructuring_ex3() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log(id1, id2, id3);
}
destructuring_ex3();

function destructuring_ex4() {
  const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
  function getValueExceptInitial(k) {
    const { [k]: val } = user;
    const [, ...ret] = val;
    return ret.join("");
  }
  console.log(getValueExceptInitial("name")); // 'ong'
  console.log(getValueExceptInitial("passwd")); // 'yz'
  console.log(getValueExceptInitial("addr")); // 'eoul'
}
destructuring_ex4();

function destructuring_ex5() {
  const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
  user.f = function () {
    console.log("fff", this.name);
  };
  console.log("user :", user);
  const { f: xf } = user;
  xf();

  function getDiffMillis(dt1, dt2) {
    const d1 = new Date(dt1);
    const d2 = new Date(destructuring_ex2);
    const { getTime: getTime1 } = d1;
    const { getTime: getTime2 } = d2;
    return getTime1.bind(d1)() - getTime2.bind(d2)();
  }
  getDiffMillis("2021-01-01", "2021-01-02");
}
destructuring_ex5();
