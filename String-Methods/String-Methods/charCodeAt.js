// charCodeAt() method

// Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);

// "The character code 113 is equal to q"

console.log(sentence.toUpperCase().charCodeAt(index));
// 81

// As the uppercase & lowercase characters have different character code.
