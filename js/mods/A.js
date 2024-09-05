import { b } from "./B.js";
import defC, { c } from "./C.js";
export const afn = () => console.log("a.afn!!"); // 이 위치 OK!
console.log("AAA");
b();
c();
defC();
