// 다음 arr2를 이용하여 차례로 수행하시오.
const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3);
console.log("🚀  ex1:", ex1, arr2);

// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2);
console.log("🚀  ex2:", ex2, arr2);

// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
console.log("🚀  ex3:", ex3, arr2);

// ex4) 복원하기
const ex4 = arr2.splice(1, 0, ...ex3);
console.log("🚀  ex4:", arr2);

// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice(2);
console.log("🚀  ex5:", ex5, arr2);

// ex6) 복원하기
const ex6 = arr2.splice(2, 0, ...ex5);
console.log("🚀  ex6:", ex6, arr2);

// ex7) [1, 2, 'X', 'Y', 'Z', 4, 5] 만들기
// const ex7 = arr2.splice(2, Infinity, 'X', 'Y', 'Z', 4, 5);
const ex7 = arr2.splice(2, arr2.length, "X", "Y", "Z", 4, 5);
console.log("🚀  ex7:", ex7, arr2);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const ex8 = arr2.splice(2, Infinity, ...ex7);
console.log("🚀  ex8:", ex8, arr2);
