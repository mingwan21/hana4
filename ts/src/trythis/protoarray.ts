type Propkey = string | number | symbol;
interface Array<T> {
  firstObject: T;
  lastObject: T;
  mapBy: (prop: Propkey) => any;
  filterBy: (prop: Propkey, value : T, isIncludes : boolean) => any;
  rejectBy: (prop: Propkey, value : T, isIncludes : boolean) => any;
  findBy = (prop : Propkey, value : T) => T | undefined;
}

Array.prototype.mapBy = function (prop: Propkey) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a : any) => a[prop]?.includes(value)
    : (a : any) => a[prop] === value;

  return this.filter(cb);
};
Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a : any) => !a[prop]?.includes(value)
    : (a : any) => a[prop] !== value;

  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  // name | name:desc | name:asc
  const [key, direction = "asc"] = prop?.split(":");
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  // console.log('🚀  dir:', dir, prop);
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};

Array.prototype.groupBy = function (gfn) {
  const ret = {};
  for (const a of this) {
    const k = gfn(a);
    ret[k] ||= [];
    ret[k].push(a);
  }

  return ret;
};

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
      // this.with(0, value); // pure fn
    },
  },
  lastObject: {
    get() {
      return this.at([-1]);
    },
    set(value) {
      this[this.length - 1] = value;
      // this.with(-1, value);
    },
  },
});

const hong1 = { id: 1, name: "Hong", dept: "Server" };
const kim1 = { id: 2, name: "Kim", dept: "Server" };
const lee1 = { id: 3, name: "Lee", dept: "Client" };
const users = [hong1, lee1, kim1];

console.log(users.mapBy("id")); // [1, 3, 2];
console.log(users.mapBy("name")); // ['Hong', 'Lee', 'Kim']);
console.log(users.filterBy("id", 2)); // [kim]);
console.log(users.filterBy("name", "i", true)); // [hong, kim]
console.log(users.rejectBy("id", 2)); // [hong, lee]
console.log(users.rejectBy("name", "i", true)); // [lee]
console.log(users.findBy("name", "Kim")); //  kim;
console.log(users.sortBy("name:desc")); //  [lee, kim, hong];
console.log(users.sortBy("name")); // [hong, kim, lee]

console.log("first/last=", users.firstObject.name, users.lastObject.name); // hong
users.firstObject = kim1;
console.log("kim=", users.firstObject.name); // kim
users.lastObject = hong1;
console.log(users.lastObject, hong1);
