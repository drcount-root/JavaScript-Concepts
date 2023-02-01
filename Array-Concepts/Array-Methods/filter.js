// The filter method
// returns a new array, which have filtered elements based on the callback funcction

// filter(function (item, index, array) { /* … */ }, thisArg)

// filter((item, index, array) => { /* … */ })

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const result = movements.filter((item) => item > 500);

console.log(result);
// [ 3000, 1300 ]

//
//
//

const filteredElems = movements.filter((item, _, arr) => item !== arr.at(2));

console.log(filteredElems);
// [ 200,  450, 3000, -650, -130, 70, 1300 ]

//
//
//
//

// Searching in array

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

//
//
//
//

// Using filter() on sparse arrays

// filter() will skip empty slots.

console.log([1, , undefined].filter((x) => x === undefined)); 
// [undefined]

console.log([1, , undefined].filter((x) => x !== '')); 
// [1, undefined]

//
//
//
//

// Affecting Initial Array (modifying, appending and deleting)

// Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
