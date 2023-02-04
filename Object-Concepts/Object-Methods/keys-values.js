// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

// Return value : An array of strings representing the given object's own enumerable string-keyed property keys.

// Object.keys(obj)

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// ["a", "b", "c"]

//
//
//

// Simple array
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  }
);

myObj.foo = 1;

console.log(Object.keys(myObj)); // ['foo']

//
//
//
//
//
//
//
//

// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

// Return value : An array containing the given object's own enumerable string-keyed property values.

// Object.values(obj)

const object2 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object2));
// ["somestring", 42, false]

//
//

const objj = { foo: "bar", baz: 42 };
console.log(Object.values(objj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myObj1 = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  }
);
myObj1.foo = "bar";
console.log(Object.values(myObj1)); // ['bar']
