// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).

// It returns the modified array.

// fill(value_to_fill_with)
// fill(value_to_fill_with, start_index)
// fill(value_to_fill_with, start_index, end_index)

//
//
//

const array1 = [1, 2, 3, 4];

// Fill every position with 6
console.log(array1.fill(6));
// [ 6, 6, 6, 6 ]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// [ 6, 5, 5, 5 ]

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// [ 6, 5, 0, 0 ]

//
//
//
//

// Using fill() to populate an empty array

const names = Array(5);

names.fill("Akash", 0);

console.log(names);
// [ 'Akash', 'Akash', 'Akash', 'Akash', 'Akash' ]
