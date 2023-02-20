// The clear() method removes all elements from a Map object.

// Return value is undefined

const map1 = new Map();

map1.set("bar", "baz");
map1.set(1, "foo");

console.log(map1.size);
// 2

map1.clear();

console.log(map1.size);
// 0


