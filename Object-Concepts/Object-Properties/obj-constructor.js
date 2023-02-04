// The constructor data property of an Object instance returns a reference to the constructor function that created the instance object.

const o1 = {};
console.log(o1.constructor === Object); // true

const o2 = new Object();
console.log(o2.constructor === Object); // true

const a1 = [];
console.log(a1.constructor === Array); // true

const a2 = new Array();
console.log(a2.constructor === Array); // true

const n = 3;
console.log(n.constructor === Number); // true
