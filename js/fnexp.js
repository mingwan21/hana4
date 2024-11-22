const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName, 1000);
  },
  whatsYourName1() {
    setTimeout(() => this.showMyName(), 1000);
    //setTimeout(() => this.showMyName(), 1000); //위의 함수를 생략한 형태
  },
  whatsYourName2() {
    setTimeout(this.showMyName(), 1000);
  },
  whatsYourName3() {
    var self = this; // old 코드
    setTimeout(function () {
      self.showMyName();
    }, 1000);
  },
  whatsYourName4() {
    setTimeout(this.showMyName, 1000);
  },
};

dog.whatsYourName3();

const obj = {
  id: 123,
  a: function () {},
  af: () => console.log("obj > af =", this.id),

  subObj: {
    id: 999,
    f: function () {
      console.log("obj > subObj > f =", this.id);
    },
    af: function () {
      console.log("obj > subObj > f =", this.id);
    },
  },
};

//----------------------------
