// The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.

function logMapElements(value, key, map) {
  console.log(`${key} = ${value}`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

// "foo = 3"
// "bar = [object Object]"
// "baz = undefined"
