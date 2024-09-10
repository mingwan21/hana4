let xuserr: { id: number; name: string };
xuserr = { id: 1, name: "xx" }; // OK
// xuser = { id: 1 }; // Error (Property 'name' missing in type)
// xuser = { id: 1, name: 'xx', age: 30 };
xuserr = { id: 1, name: "xx" };
const temp = { id: 1, name: "xx", age: 30 };
xuserr = temp; // Error ({id, name, age} is not assignable to type {id,name} )

type Empp = { id: number; name: string };
const lee: Empp = { id: 1, name: "Lee" };
const kimm = { id: 2, name: "Kim", addr: "Seoul" };

const arrr0: Empp[] = [{ id: 1, name: "Hong" }];
const arrr1: Empp[] = [{ id: 1, name: "Hong" }, kimm];
const arrr2: Empp[] = [{ id: 2, name: "Kim", addr: "Seoul" }, kimm];
//const arrr3: Empp[] = [{ id: 2, name: "Kim", addr: "Seoul" }, lee];

//const arrr4: [Userr, Empp] = [{ id: 2, name: "Kim", addr: "Seoul" }, kim];

type Empp2 = { id: number; name: string; addr: string };
type Empp3 = { id: number; name: string; road: string };

const xemp: Empp | Empp2 | Empp3 = {
  id: 1,
  name: "xxx",
  addr: "Pusan",
  road: "Sumyun",
};

export {};
