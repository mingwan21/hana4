const obj = { id: 1, name: "Hong" };
// cf. obj = {..., __proto__: { x: 11 }};

console.log(obj.toString);
class Animal {
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  constructor(name) {
    // {name: …}
    this.name = name || super.constructor.name;
  }

  static ID = 1;
  static isDog(ani) {
    return ani.name === "Dog";
  }
}
const dog = new Animal("Dog");
console.log("ok=", Object.keys(obj));
console.log("ak=", Object.keys(dog));
for (let k in dog) console.log("k=", k);
console.log("oh=", obj.hasOwnProperty("id"));
console.log("dh=", dog.hasOwnProperty("id"));

class Cat extends Animal {
  static ID = 2;
  kukuki() {
    console.log("Kooookkk");
  }
}

const cat = new Cat("Happy");
console.log("static>>", Cat.ID);

const proxyObj = new Proxy(hong, {
  get(target, prop, receiver) {
    // receiver: this binding object
    console.log("proxy.get>>", target, prop);
    if (prop === "fullName") {
      return `${target.firstName} ${target.lastName}`;
    } else {
      return target[prop]?.toUpperCase();
    } // return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    console.log("proxy.set>>", target, prop, value);
    if (prop === "fullName") {
      const [f, l] = value.split(" ");
      target.firstName = f;
      target.lastName = l;
    } else {
      target[prop] = value;
    } // target[prop]이 함수라면??
    // return Reflect.set(target, prop, value, receiver);
    return target;
  },
});

proxyObj.fullName = "Nanda Kim";
console.log("proxy>>", proxyObj.fullName);
console.log("proxy>>", proxyObj);
console.log("instance>>", proxyObj instanceof Emp);

class Emp {
  //firstName;
  //lastName;

  firstName = hong.fullName.split(" ");
  lastName = hong.fullName.split(" ", 1);

  //get fullName() {}
  //set fullName() {} 쓰지말고
}

const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
