class Teacher {
  sayHello() {
    console.log("Take chances, make mistakes, get messy!");
  }
}

let teacher: Teacher;

teacher = new Teacher();
teacher.sayHello();

class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

new Greeter().greet("Miss Frizzle");
new Greeter().greet(123);

new Greeter().greet();

class Greeted {
  constructor(message: string) {
    console.log(`As I always say : ${message}`);
  }
}

new Greeted("Practice makes perfect");
