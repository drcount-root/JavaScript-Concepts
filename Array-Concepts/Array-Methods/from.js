// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// Returns a new Array instance.

// Array.from(arrayLike, (element, index) => { /* … */ })

// Array.from(arrayLike, function (element, index) { /* … */ }, thisArg)

// arrayLike : An iterable or array-like object to convert to an array.

//
//
//

// Array.from() lets you create Arrays from:

// iterable objects (objects such as Map and Set); or, if the object is not iterable, array-like objects (objects with a length property and indexed elements).

//
//
// Array from string

console.log(Array.from("foo"));
// ["f", "o", "o"]

//
//
// array from array
console.log(Array.from([1, 2, 3], (x) => x + x));
// [2, 4, 6]

//
//
// array from set
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

//
//
// array from map

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

//
//
// Array from an Array-like object (arguments)

function f() {
  return Array.from(arguments);
}

console.log(f(1, 2, 3));

// [ 1, 2, 3 ]

//
//

// Array.from() never creates a sparse array. If the arrayLike object is missing some index properties, they become undefined in the new array.
