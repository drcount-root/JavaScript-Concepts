// The length data property of a string contains the length of the string in UTF-16 code units.

// non-negative integer

const str = "Life, the universe and everything. Answer:";

console.log(`${str} ${str.length}`);

// "Life, the universe and everything. Answer: 42"

//
//
//
//

// Assigning to length

// Because string is a primitive, attempting to assign a value to a string's length property has no observable effect, and will throw in strict mode.

const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9
