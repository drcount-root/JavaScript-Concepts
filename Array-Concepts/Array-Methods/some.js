// The some() method tests whether at least one element in the array passes the test implemented by the provided function.

// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// some((element, index, array) => { /* … */ })

// some(function (element, index, array) { /* … */ }, thisArg)

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// true

console.log(array.some((item) => item > 6));
// false

//
//

// Using some() on sparse arrays

// some() will not run its predicate on empty slots.

console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
