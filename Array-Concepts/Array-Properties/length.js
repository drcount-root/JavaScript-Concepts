// The length data property of an Array instance represents the number of elements in that array.

// A non-negative integer less than 2^32 .

const clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// 4

//
//
//

const arrA = new Array(6);

console.log(arrA.length);
// 6

console.log(arrA);
// [ <6 empty items> ]

//
//
//

const arrB = [1, 2];

arrB.length = 25;
// can fix length of the array after defining

arrB.push(3);
arrB.unshift(4);

console.log(arrB);
// [ 4, 1, 2, <23 empty items>, 3 ]

arrB.length = 80;
// [ 4, 1, 2, <23 empty items>, 3, <53 empty items> ]

console.log(arrB);

arrB.length = 2 ** 32;
// RangeError: Invalid array length

const arrC = new Array(-100); 
// Negative numbers are not allowed
// RangeError: Invalid array length