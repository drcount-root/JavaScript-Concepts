// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// Array.of(element0)
// Array.of(element0, element1)
// Array.of(element0, element1, /* … ,*/ elementN)

// Returns a new Array instance.

console.log(Array.of("foo", 2, "bar", true));
// ["foo", 2, "bar", true]

console.log(Array.of());
// []

//
//

console.log(Array.of(7)); // [7]
console.log(Array(7)); // array of 7 empty slots
// [ <7 empty items> ]

console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array(1, 2, 3)); // [1, 2, 3]

//
//

console.log(Array.of(1));
// [1]

console.log(Array.of(1, 2, 3));
// [1, 2, 3]

console.log(Array.of(undefined));
// [undefined])
