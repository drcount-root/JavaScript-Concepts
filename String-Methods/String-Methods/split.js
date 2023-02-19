// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// split(separator)
// split(separator, limit)

// Return value

// An Array of strings, split at each point where the separator occurs in the given string.

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");

console.log(words[3]);
// "fox"

const chars = str.split("");

console.log(chars[8]);
// "k"

const strCopy = str.split();

console.log(strCopy);
// ["The quick brown fox jumps over the lazy dog."]

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
