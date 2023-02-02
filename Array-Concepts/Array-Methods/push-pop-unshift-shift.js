// push : modifies the original array
// add into right

// Return value : the new length property of the object upon which the method was called.

// push(element0)
// push(element0, element1)
// push(element0, element1, /* … ,*/ elementN)


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
// Return value : the removed element from the array; undefined if the array is empty.

// pop()

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

// Return value : The new length property of the object upon which the method was called.

// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* … ,*/ elementN)

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
// returns the removed element from the array; undefined if the array is empty.

// shift()

const arrD = ["a", "b", "c", "d"];

console.log(arrD.shift());
// "a"

arrD.shift();

console.log(arrD);
// ["c", "d"]
