// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Returns a new array with the sub-array elements concatenated into it.

// flat()
// flat(depth)

// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
//  [0, 1, 2, 3, 4]

//
//

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
//  [0, 1, 2, [3, 4]]

//
//

const arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log(arr3.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//
//

// The flat() method removes empty slots in sparse arrays

const arr5 = [1, 2, , 4, , 5, 6, , , 9];

console.log(arr5.flat());
// [1, 2, 4, 5, 6, 9]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];

console.log(array2.flat(Infinity)); 
// [ 1, 3, "a", "d", "e" ]

//
//
//
//

const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested));

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
