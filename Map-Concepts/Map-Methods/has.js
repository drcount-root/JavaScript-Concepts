// The has() method returns a boolean indicating whether an element with the specified key exists or not.

// has(key)

// Return value
// true if an element with the specified key exists in the Map object; otherwise false.

const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.has("bar"));
// true

console.log(map1.has("baz"));
// false

