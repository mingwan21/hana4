//============mapBy==========
interface Array<T> {
  mapBy<K extends keyof T>(prop: K): T[K][];
}

Array.prototype.mapBy = function <T, K extends keyof T>(
  this: T[],
  prop: K
): T[K][] {
  return this.map((a) => a[prop]);
};

//============filterBy========

interface Array<T> {}

/* 
Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};
Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => a[prop]?.includes(value)
    : (a) => a[prop] === value;

  return this.filter(cb);
};
Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => !a[prop]?.includes(value)
    : (a) => a[prop] !== value;

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
 */
//export {};
