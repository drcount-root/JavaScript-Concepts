// at() method

// The at() method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

// 'the string'.at(index)

// Return value

// A String consisting of the single UTF-16 code unit located at the specified position. Returns undefined if the given index can not be found.

const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(
  `Using an index of ${index} the character returned is ${sentence.at(index)}`
);

// "Using an index of 5 the character returned is u"

index = -4;

console.log(
  `Using an index of ${index} the character returned is ${sentence.at(index)}`
);

// "Using an index of -4 the character returned is d"

const newStr = "238yjdhbbbbaslhkd";

console.log(newStr.at(100));

// undefined

//
//
//

// Return the last character of a string

const str1 = "Have to find the last char";

console.log(str1.at(-1));

// r
