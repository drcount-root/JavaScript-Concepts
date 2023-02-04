// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// Return value: The target object

// Object.assign(target, ...sources)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//
//

// Cloning an object

// Shallow Clone

const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// Deep Clone

const obj3 = { a: 0, b: { c: 0 } };
const obj4 = JSON.parse(JSON.stringify(obj3));

obj3.a = 4;
obj3.b.c = 4;

console.log(obj4); // { a: 0, b: { c: 0 } }
console.log(obj3); // { a: 4, b: { c: 4 } }

//
//

// Merging objects

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj5 = Object.assign(o1, o2, o3);
console.log(obj5); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

//
//

// Merging objects with same properties

const o4 = { a: 1, b: 1, c: 1 };
const o5 = { b: 2, c: 2 };
const o6 = { c: 3 };

const obj6 = Object.assign({}, o4, o5, o6);
console.log(obj6); // { a: 1, b: 2, c: 3 }

//
//

// Primitives will be wrapped to objects

const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj7 = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj7); // { "0": "a", "1": "b", "2": "c" }
