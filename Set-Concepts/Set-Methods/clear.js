// The clear() method removes all elements from a Set object.

// clear()

// Return value : undefined

const set1 = new Set();
set1.add(1);
set1.add("foo");

console.log(set1.size);
// 2

set1.clear();

// console.log(set1.clear());
// undefined

console.log(set1.size);
// 0
