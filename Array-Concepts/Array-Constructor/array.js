// The Array() constructor is used to create Array objects.

// new Array(element0, element1, /* … ,*/ elementN)
// new Array(arrayLength)

// Array() can be called with or without new. Both create a new Array instance.

// Array(element0, element1, /* … ,*/ elementN)
// Array(arrayLength)

//
//

const arrA = new Array();
console.log(arrA);
// []

//
//

const arrB = new Array(7);
// passing single argument means setting the length
console.log(arrB);
// [ <7 empty items> ]

//
//

const arrC = new Array(2, 8, { poop: "bat" }, 6, "kl", false, {
  1: "mango",
  2: "apple",
});
// passing multiple arguments means setting the items of that array

console.log(arrC);
// [ 2, 8, { poop: 'bat' }, 6, 'kl', false, { '1': 'mango', '2': 'apple' } ]
