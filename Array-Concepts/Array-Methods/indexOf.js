// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// The indexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator)

// The indexOf() method skips empty slots in sparse arrays.

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

//
//
//
//

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// The indexOf() method skips empty slots in sparse arrays.

//
//
//

// Finding all the occurrences of an element

const indices = [];
const array1 = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array1.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array1.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

//
//
//

// Using indexOf() on sparse arrays

// You cannot use indexOf() to search for empty slots in sparse arrays.

console.log([1, , 3].indexOf(undefined)); 
// -1