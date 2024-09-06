export function isObject(obj) {
  return obj && typeof obj === "object";
}

export function deepCopy(obj) {
  if (!isObject(obj)) return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = deepCopy(obj[k]);
  }

  return newer;
}
