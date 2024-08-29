function getDiffMillis(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);

  const { getTime: getTime1 } = new Date(dt1);
  const { getTime: getTime2 } = new Date(dt2);

  return getTime1.bind(d1) - getTime2.bind(d2)();
}

// Date.prototype.getTime = function () {
//   return this.getMilliseconds();
// };

getDiffMillis("2021-01-01", "2021-01-02");
//-------------------------

class Dog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  fn() {
    return "FN";
  }

  static sfn() {
    return "SFN";
  }
}
const lucy = new Dog("Lucy");
const { sfn } = Dog;
const { name: aa, fn: fnnn, getName } = lucy;

console.log(aa, sfn(), fnnn(), getName); // ?
getName(); // ?
