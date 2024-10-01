/* interface User {
  id: number;
  name: string;
} */

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

type X = "id" | "name" | "dname" | "captain";
type Y = keyof User | keyof Dept;
interface Ud2 {
  [k: string]: number | string;
  id: number;
  addr: string;
}

type Ud = (User | Dept) & { addr: string };

const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
