// Reverses the elements of the array. It mutates the original array.

const arr = ["j", "i", "h", "g", "f", "e", "d"];

console.log(arr.reverse());
// ['d', 'e', 'f', 'g', 'h', 'i', 'j']

console.log(arr);
// ['d', 'e', 'f', 'g', 'h', 'i', 'j']

// The reverse() method preserves empty slots. If the source array is sparse, the empty slots' corresponding new indices are deleted and also become empty slots.

console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
