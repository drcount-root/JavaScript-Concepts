// splice method mutates the original array

// 2 params - 1. starting index, 2. The number of elements to remove.

let arr = ["a", "b", "c", "d", "e", "f", "g"];

// console.log(arr.splice(4));
// [ 'e', 'f', 'g' ]

// console.log(arr);
// [ 'a', 'b', 'c', 'd' ]

// console.log(arr.splice(2, 3));
// ["c", "d", "e"]

// console.log(arr);
// ["a", "b", "f", "g"]

// console.log(arr.splice(-2));
// ["f", "g"]

// console.log(arr);
// ["a", "b", "c", "d", "e"]

// console.log(arr.splice(-1));
// ["g"]

// console.log(arr);
// ["a", "b", "c", "d", "e", "f"]

console.log(arr.splice());
// []

console.log(arr);
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
