// The delete() method removes the specified element from a Map object by key.

// delete(key)

// Return value

// true if an element in the Map object existed and has been removed, or false if the element does not exist.

const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// true
// True indicates successful removal

console.log(map1.has("bar"));
// false

console.log(map1);
// Map(0) {}

console.log(map1.delete());
// false

console.log(map1.delete("mango"));
// false