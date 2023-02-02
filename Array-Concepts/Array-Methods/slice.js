// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// Return value : a new array containing the extracted elements.

// slice()
// slice(start)
// slice(start, end)

let arr = ["a", "b", "c", "d", "e", "f"];

const arrA = arr.slice(3);
console.log(arrA); // [ "d", "e", "f" ]

const arrB = arr.slice(2, 4);
console.log(arrB); // [ 'c', 'd' ]

console.log(arr); // ["a", "b", "c", "d", "e", "f"]

const arrC = arr.slice(-2);
console.log(arrC); // ["e", "f"]

console.log(arr.slice(-1)); // ["f"]

console.log(arr.slice(1, -1)); // ["b", "c", "d", "e"]

// shallow copy of the array
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Using slice() on sparse arrays

// The array returned from slice() may be sparse if the source is sparse.

console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
