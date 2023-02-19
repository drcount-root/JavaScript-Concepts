// The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

// case-sensitivity

// indexOf(searchString)
// indexOf(searchString, position)

// Return value

// The index of the first occurrence of searchString found, or -1 if not found.

const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);
//  "The index of the first "dog" from the beginning is 40"

console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);
//  "The index of the 2nd "dog" is 52"

//
//
//
//

// Checking occurrences

// When checking if a specific substring occurs within a string, the correct way to check is test whether the return value is -1:

"Blue Whale".indexOf("Blue") !== -1;
// true; found 'Blue' in 'Blue Whale'

"Blue Whale".indexOf("Bloe") !== -1;
// false; no 'Bloe' in 'Blue Whale'

//
//
//
//

// Using indexOf() to count occurrences of a letter in a string

const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 4
