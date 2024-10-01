//==============함수타입=============
function add(a: number, b: string) {
  return a + b;
}
add(1, "abc");

/* const introduce = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
}; */

const introduce = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  if (typeof height === "number") {
    console.log(`키 : ${height + 10}`);
  }
};

introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 170); // OK

const introduce2 = (name: string, height: number | undefined) => {
  console.log(`이름 : ${name}`);
  if (typeof height === "number") {
    console.log(`키 : ${height + 10}`);
  }
};

const introduce3 = (name: string, age: number, height?: number) => {
  console.log(`이름 : ${name}`);
  console.log(`나이 : ${age} 살`);
  if (height) {
    return console.log(`키 ${height + 10}cm`);
  }
};

const introduce4 = (name: string, height = 0) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
};

introduce4("김현준"); // OK
introduce4("김현준", undefined);
introduce4("김현준", 170);
//introduce4("김현준", "홍길동");

f(1, undefined);
function f(x?: number, y = 1) {
  console.log(x, y);
  //y = undefined;
}

const getSum = (...rest: number[]) => {
  let sum = 0;
  rest.forEach((el) => (sum += el));
  return console.log(sum);
};

getSum(1);
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
getSum(); // OK -> []

const getSum2 = (a: number, ...rest: [number, number]) => {
  let sum = 0;
  rest.forEach((el) => (sum += el));
  return console.log(sum);
};

getSum2(3, 2, 1); // OK
//getSum2(1, 2, 3, 4, 5);

function singSong(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}

function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}
