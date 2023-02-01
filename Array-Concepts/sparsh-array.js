// What are sparse arrays?

// A sparse array is one in which the elements are not sequential, and they don't always start at 0.

// They are essentially Arrays with "holes", or gaps in the sequence of their indices.

// Example:

let array = [];

array[100] = "Holes now exist";

console.log(array.length);

// 101, but only 1 element
