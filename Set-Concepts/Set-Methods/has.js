// The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.

// has(value)

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// true

console.log(set1.has(5));
// true

console.log(set1.has(6));
// false

//
//
//
//

const set2 = new Set();
const obj1 = { key1: 1 };
set2.add(obj1);

console.log(set2.has(obj1)); 
// true

console.log(set2.has({ key1: 1 })); 
// false, because they are different object references

console.log(set2.add({ key1: 1 })); 
// now set2 contains 2 entries
