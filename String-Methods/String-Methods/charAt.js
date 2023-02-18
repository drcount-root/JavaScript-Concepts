// charAt() method

// The charAt() method of a String instance returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

// 'This is a string'.charAt(index)

// If no index is provided to charAt(), the default is 0.

// Return value

// A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of range, charAt() returns an empty string.

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// "The character at index 4 is q"

console.log(sentence.charAt(100));
// empty string

console.log(sentence.charAt(-1));
// empty string