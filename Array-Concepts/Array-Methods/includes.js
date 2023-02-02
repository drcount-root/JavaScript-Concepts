// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// includes(searchElement)
// includes(searchElement, fromIndex)

// searchElement : The value to search for.

//
//
//

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

//

console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // true
console.log(["1", "2", "3"].includes(3)); // false

//
//

// Using includes() on sparse arrays

// You can search for undefined in a sparse array and get true.

console.log([1, , 3].includes(undefined)); // true