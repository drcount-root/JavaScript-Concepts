// The concat() method concatenates the string arguments to the calling string and returns a new string without modifying the originals.

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// "Hello World"

console.log(str2.concat(", ", str1));
// "World, Hello"

//
//
//

// If the arguments are not of the type string, they are converted to string values before concatenating.

const num = 25;

const str = "Total number count was : ";

console.log(`Type is : ${typeof str.concat(num)} | ` + str.concat(num));
