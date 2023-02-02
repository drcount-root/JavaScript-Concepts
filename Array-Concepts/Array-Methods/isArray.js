// The Array.isArray() static method determines whether the passed value is an Array.

// true if value is an Array; otherwise, false.

// Array.isArray(value)

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

//
//
//

// all following calls return true

console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array("a", "b", "c", "d")));
console.log(Array.isArray(new Array(3)));

// Little known fact: Array.prototype itself is an array:
console.log(Array.isArray(Array.prototype));

// all following calls return false

console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
