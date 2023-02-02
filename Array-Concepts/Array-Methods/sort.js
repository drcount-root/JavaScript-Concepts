// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending.

// Return value : the reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.

// Arrow function
// sort((a, b) => { /* … */ } )

const numberArray = [40, 1, 5, 200];

console.log(numberArray.sort((a, b) => a - b));
// [1, 5, 40, 200]

console.log(numberArray);
// [1, 5, 40, 200]

console.log(numberArray.sort((a, b) => b - a));
// [ 200, 40, 5, 1 ]

console.log(numberArray);
// [ 200, 40, 5, 1 ]

//
//
//

// Using sort() on sparse arrays

// Empty slots are moved to the end of the array.

// The sort() method preserves empty slots. If the source array is sparse, the empty slots are moved to the end of the array, and always come after all the undefined.

console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
