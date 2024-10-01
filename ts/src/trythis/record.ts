//type R = Record<string, number>;

// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

type Users = typeof users;

// type FullUser = Record<string, string | number>; // 무성의해 보여
type FullUser = Record<keyof Users, string | number>;
const ret: FullUser = users.reduce((acc, user) => ({ ...acc, ...user }), {});

export {};
