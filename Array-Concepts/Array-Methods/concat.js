// merge two or more arrays, without mutating the original array

// A new Array instance.

const arrA = ["a", "b", "c"];
const arrB = ["d", "e", "f", "g"];

const letters = arrA.concat(arrB);

console.log(letters);
// ["a", "b", "c", "d", "e", "f", "g"]

// can achieve the same using spread operator, without mutating the array

console.log([...arrA, ...arrB]);
// ["a", "b", "c", "d", "e", "f", "g"]

//
//
//

const num1 = [1, 2, 3];
const num2 = [4, 5];
const num3 = [6, 7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//
//
//

const letters2 = ["a", "b", "c"];

const alphaNumeric = letters2.concat(1, [2, 3]);

console.log(alphaNumeric);
// ['a', 'b', 'c', 1, 2, 3]

//
//
//

const numX = [[1]];
const numY = [2, [3]];

const nums = numX.concat(numY);

console.log(nums);
// results in [ [1], 2, [3] ]