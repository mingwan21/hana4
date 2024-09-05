import defCC from "./C.js";
const DEPTH = " → ";
console.log("🚀  b.DEPTH:", DEPTH);
export function callDepth(depth = 0) {
  return DEPTH.repeat(depth);
}
console.log("BBB");
export function b(depth = 0) {
  console.log(`${callDepth(depth)}B-b`);
  defCC(depth + 1);
}
