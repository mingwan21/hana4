function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id : ${this.id}`;
}
const fn = once(fivePart.bind({ id: 33 }));
console.log(fn.bind({ id: 11 })(1, 6));

const fn1 = once((x, y)) = {

}

console.log(fn(1, 6));
console.log(fn(2, 7));
console.log(fn(3, 8));

//----------------------------

const before = () => console.log("before...");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log("${greeting}, ${name}");
const someFn2 = (id, nickname, email, level) =>
  console.log("${id}/${nickname}/${email}/${level}");

// const template = ()

// const temp = template(someFn);
// const temp2 = template(someFn);

temp("sico", "hello");
temp2(1, "sico", "sico@gmail.com", 5);

//----------------------------

const weeks = ["일", "월", "화", "수", "목", "금", "토"];
let widx = -1;
const getNextWeek = () => {
  widx += 1;
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; //side-effect!
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);

//----------------------------

function getDiffMillis(dt1, dt2){
    const { getTime: getTime1 } = new Date(dt1);
    const { getTime: getTime2 } = new Date(dt2);
    return getTime1() - getTime2;
}

getDiffMillis('2021-01-01', '2021-01-02');

//----------------------------

class Dog {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
    fn(){
        return 'FN';
    }
    static sfn() {
        return 'SFN';
    }
}
const lucy = new Dog ('Lucy');
const { sfn } = Dog;
const { name: aa, fn: fnnn, getName } = lucy;

console.log(aa, sfn(), fnnn(), getName);
getName();