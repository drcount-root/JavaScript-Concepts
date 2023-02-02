// What are sparse arrays?

// A sparse array is one in which the elements are not sequential, and they don't always start at 0.

// They are essentially Arrays with "holes", or gaps in the sequence of their indices.

// Example:

let array = [];

array[100] = "Holes now exist";

console.log(array.length);

// 101, but only 1 element

//
//
//
//

// Using concat() on sparse arrays

// If any of the source arrays is sparse, the resulting array will also be sparse

console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

//
//
//
//

// Using fill() to populate an empty array

const names = Array(5);

names.fill("Akash", 0);

console.log(names);
// [ 'Akash', 'Akash', 'Akash', 'Akash', 'Akash' ]

//
//
//
//

// Using filter() on sparse arrays

// filter() will skip empty slots.

console.log([1, , undefined].filter((x) => x === undefined));
// [undefined]

console.log([1, , undefined].filter((x) => x !== ""));
// [1, undefined]

//
//
//
//

// using find() on sparse array

// Declare array with no elements at indexes 2, 3, and 4
const array2 = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array2.find((value, index) => {
  console.log("Visited index ", index, " with value ", value);
});
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6

// Shows all indexes, including deleted
array2.find((value, index) => {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log("Deleting array[5] with value ", array2[5]);
    delete array2[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index ", index, " with value ", value);
});
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6

//
//
//
//

// Using findIndex() on sparse arrays

// You can search for undefined in a sparse array and get the index of an empty slot.

console.log([1, , 3].findIndex((x) => x === undefined));
// 1

//
//
//
//

// The flat() method removes empty slots in sparse arrays

const arr5 = [1, 2, , 4, , 5, 6, , , 9];

console.log(arr5.flat());
// [1, 2, 4, 5, 6, 9]

const array3 = [1, , 3, ["a", , ["d", , "e"]]];

console.log(array3.flat(Infinity));
// [ 1, 3, "a", "d", "e" ]

//
//
//
//

// Using forEach() on sparse arrays

// callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

const arraySparse = [1, 3 /* empty */, , 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }

//
//
//
//

// Array.from() never creates a sparse array. If the arrayLike object is missing some index properties, they become undefined in the new array.

//
//
//
//

// Using includes() on sparse arrays

// You can search for undefined in a sparse array and get true.

console.log([1, , 3].includes(undefined)); // true

//
//
//
//

// The indexOf() method skips empty slots in sparse arrays.
// You cannot use indexOf() to search for empty slots in sparse arrays.

console.log([1, , 3].indexOf(undefined));
// -1

//
//
//
//

// When used on sparse arrays, the keys() method iterates empty slots as if they have the value undefined.

const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

//
//
//
//

// A sparse array remains sparse after map(). The indices of empty slots are still empty in the returned array, and the callback function won't be called on them.

console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  })
);

// Visit 0
// Visit 2
// [2, empty, 6]

//
//
//
//

//
//
//
//

//
//
//
//

//
//
//
//
