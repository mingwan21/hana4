globalThis.name = "GlobalName";
this.name = "ModuleName";

const obj = {
  name: "ObjName",
  bark1: function () {
    console.log("1=", this.name);
    const self = this; // OLD version
    setTimeout(function () {
      console.log("11=", self.name);
      console.log("12=", this); // Timeout
    }, 1000); // .bind(this)
    console.log("xxxx");
  },
  bark2() {
    // same as bark2: function() {
    console.log("2=", this.name);
    setTimeout(() => {
      //화살표함수 쓰느냔 함수 선언 쓰느냐
      console.log("22=", this.name);
    }, 1000);
  },
  bark3() {
    // ⇐⇒ bark3: function() {
    function innerFn() {
      console.log(this); // ?
    }
    innerFn();
  },
  bark4: () => {
    console.log(this.name); // ?
  }, // bark4의 소유자(obj)의 Lexical Scope의 this
};

//rsobj.bark1(); // bark1.bind(obj)
obj.bark2();
//obj.bark3();
//obj.bark4();

// ⇔ function declareFn(name) {
const expressFn = function(name) {
  // if, 'use strict' ?
  console.log('11>>',this, new.target, this.name, name);
  this.name = name;
  console.log('22>>',this, new.target, this.name, name);
}


const arrowFn = (name) => {
  console.log('11>>',this, new.target, this.name, name);
  this.name = name;
  console.log('22>>',this, new.target, this.name, name);
}

const hong = {id: 1, name: 'Hong'};
const kim = {id: 2, name: 'Kim'};

expressFn.bind(hong)('expfn');
arrowFn.call(kim,'afn');


globalThis.name = 'Global Name';

const obj2 = {
  name: 'Obj Name',
  printName() {
    console.log(this.name);
  },
};

const printName = obj2.printName;
// obj.printName(); // printName.bind(obj)();
printName();

