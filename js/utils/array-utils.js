export const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  // if ((start > end && step > 0) || (start < end && step < 0)) return [];
  if ((start - end) * step > 0) return [];

  // if (end === undefined) {
  //   if (start > 0) {
  //     end = start;
  //     start = 1;
  //   } else if (start < 0) {
  //     end = -1;
  //   } else {
  //     return [0];
  //   }
  // }

  let tmp = start;
  // end = end ?? (start > 0 ? ((start = 1), tmp) : start % 2);
  end = end ?? (start > 0 ? ((start = 1), tmp) : start < 0 ? -1 : 0);

  const results = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }

  return results;
};

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
