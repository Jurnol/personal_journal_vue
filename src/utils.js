export function toSnakeCase(obj) {
  let newObj = {};
  for (let key in obj) {
    let newKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    newObj[newKey] = obj[key];
  }
  return newObj
}