// The includes() method performs a 'case-sensitive' search to determine whether one string may be found within another string, returning true or false as appropriate.

// includes(searchString)
// includes(searchString, position)

// The position within the string at which to begin searching for searchString. (Defaults to 0.)

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

// "The word "fox" is in the sentence"
