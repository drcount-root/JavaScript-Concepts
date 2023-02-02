// splice method mutates the original array

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// Return value : An array containing the deleted elements.

// 2 params - 1. starting index, 2. The number of elements to remove.

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

let arr = ["a", "b", "c", "d", "e", "f", "g"];

// console.log(arr.splice(4));
// [ 'e', 'f', 'g' ]

// console.log(arr);
// [ 'a', 'b', 'c', 'd' ]

// console.log(arr.splice(2, 3));
// ["c", "d", "e"]

// console.log(arr);
// ["a", "b", "f", "g"]

// console.log(arr.splice(-2));
// ["f", "g"]

// console.log(arr);
// ["a", "b", "c", "d", "e"]

// console.log(arr.splice(-1));
// ["g"]

// console.log(arr);
// ["a", "b", "c", "d", "e", "f"]

console.log(arr.splice());
// []

console.log(arr);
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

//
//
//

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// ["Jan", "Feb", "March", "April", "May"]

//
//
//

// Using splice() on sparse arrays

// The splice() method preserves the array's sparseness.

const arr1 = [1, , 3, 4, , 6];
console.log(arr1.splice(1, 2)); // [empty, 3]
console.log(arr1); // [1, 4, empty, 6]
