// The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.

// new Set()

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
//  true

console.log(set1.has(5));
//  true

console.log(set1.has(6));
//  false

