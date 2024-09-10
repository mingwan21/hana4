let xuser: { id: number; name: string };
xuser = { id: 1, name: "xx" }; // OK
/* 
xuser = { id: 1 }; // Error (Property 'name' missing in type)
xuser = { id: 1, name: "xx", age: 30 }; // Error ({id, name, age} is not assignable to type {id,name} ) 
*/
const tmp = { id: 1, name: "xx", age: 30 }; // 할당하게되면 꺼지게 됨.
xuser = tmp;

// 타입 별칭(type alias)
type TUser = {
  id: number;
  name: string;
};

let hong: TUser;
hong = { id: 1, name: "Hong" }; // OK
//hong = {id: 1}; // Error (name property missing)
//hong = {id: 1, name: 'Hong', addr: 'Pusan'}; // Error(not assignable)  Freshness!
hong = { id: 1, name: "Hong", addr: "Pusan" } as TUser; // OK (turn-off Freshness!)

type Emp = { id: number; name: string };
const kim = { id: 2, name: "kim", addr: "seoul" }; //freshness 가 꺼짐

const arr: Emp[] = [
  { id: 1, name: "hong" },
  { id: 1, name: "hong", addr: "seoul" }, // 이건 왜? 뒤에 kim이 있음 너네 전부 addr 갖고 있구나 라고 판단
  kim,
];

const arr1: Emp[] = [
  { id: 1, name: "hong" },
  //{ id: 1, name: "hong", addr: "seoul" } // 이건 실수했다고 판단 하고 오류 날림
];

//-------------------튜플

/* 
const arr4: [Emp, Emp] = [
  { id: 1, name: "hong", addr: "seoul" }, // kim을 써도 오류 생김, 자리에 고정하면서 두개의 관계 끊어버림. 첫번째 emp에 id: 1, name: "hong", addr: "seoul", 두번째 emp에 kim 넣어버림
  kim,
];
 */

type Emp2 = { id: number; name: string; addr: string };
type Emp3 = { id: number; name: string; road: string };

const xempp: Emp | Emp2 | Emp3 = {
  id: 1,
  name: "xxx",
  addr: "Pusan",
  road: "Sumyun",
};
/* 
const arr5: Emp[] | Emp2[] = [
  { id: 1, name: "hong", addr: "seoul" },
  { id: 2, name: "kim" },
];
 */

export {};
