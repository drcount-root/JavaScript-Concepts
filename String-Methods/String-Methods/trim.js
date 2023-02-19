// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

const greeting = "   Hello          world!   ";

console.log(greeting);
// "   Hello          world!   "

console.log(greeting.trim());
// "Hello          world!"

//
//
//
//

// trimStart()

// The trimStart() method removes whitespace from the beginning of a string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

const gree = "   Hello world!   ";

console.log(gree);
// "   Hello world!   "

console.log(gree.trimStart());
// "Hello world!   "

//
//
//
//

// trimEnd()

// The trimEnd() method removes whitespace from the end of a string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

const greet = "   Hello world!   ";

console.log(greet);
// "   Hello world!   "

console.log(greet.trimEnd());
// "   Hello world!"
