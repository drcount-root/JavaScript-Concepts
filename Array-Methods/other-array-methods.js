// push : modifies the original array
// add into right

const arrA = ["a", "b", "c", "d"];

console.log(arrA.push("e"));
// 5, total num of items in the array after push

arrA.push("f");

console.log(arrA);
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//
//
//
//

// pop
// remove from right

const arrB = ["a", "b", "c", "d"];

console.log(arrB.pop());
// d

arrB.pop();

console.log(arrB);
// [ 'a', 'b' ]

//
//
//

// unshift
// add to left

const arrC = ["a", "b", "c", "d"];

console.log(arrC.unshift("1"));
// 5

arrC.unshift("2");

console.log(arrC);
// [ '2', '1', 'a', 'b', 'c', 'd' ]

//
//
//

// shift
// remove from left

const arrD = ["a", "b", "c", "d"];

console.log(arrD.shift());
// "a"

arrD.shift();

console.log(arrD);
// ["c", "d"]

//
//
//

// indexOf

// includes

//
//
//

// at

const arr = [23, 15, 67, 9];

console.log(arr.at(-1));
// 9, get the last element of the array

console.log(arr.at(2));
// 67, get the element which index is 2

//
//
//

// find

// findIndex

// flat

// keys

// values

// sort

// some

// Array.of()

// Array.from()

// fill
