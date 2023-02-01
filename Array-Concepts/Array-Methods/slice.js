// slice method doesn't mutate the original array

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
