import assert from "assert";

const KIM = { nid: 3, nm: "Kim", addr: { city: "Pusan" }, [Symbol()]: "sym" };

const newKim = deepCopy(KIM);
assert.deepStrictEqual(KIM, newKim);
newKim.addr.city = "Daegu";
assert.notDeepStrictEqual(KIM, newKim);
console.log("shallow>>", KIM.addr.city !== newKim.addr.city); // true면 통과!
console.log("🚀  kim newKim:", KIM, newKim);
