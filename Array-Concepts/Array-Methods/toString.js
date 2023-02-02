// The toString() method returns a string representing the specified array and its elements.

// toString()

// Return value : A string representing the elements of the array.

const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"

//
//
//

// Using toString() on sparse arrays

// Following the behavior of join(), toString() treats empty slots the same as undefined and produces an extra separator:

console.log([1, , 3].toString()); // '1,,3'
