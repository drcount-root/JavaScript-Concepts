// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

//
//

// Arrow function

// reduce((accumulator, currentValue) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })

// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function

// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Inline callback function

// reduce(function (accumulator, currentValue) { /* … */ })
// reduce(function (accumulator, currentValue, currentIndex) { /* … */ })
// reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ })

// reduce(function (accumulator, currentValue) { /* … */ }, initialValue)
// reduce(function (accumulator, currentValue, currentIndex) { /* … */ }, initialValue)
// reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue)

// array : the array reduce() was called upon.

//
//

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

//
//
//

// How reduce() works without an initial value
// the reduce() method will take the element of 0th index as the initial value & accumulator and element of the 1st index as the

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

// accumulator: 15, currentValue: 16, index: 1, returns: 31
// accumulator: 31, currentValue: 17, index: 2, returns: 48
// accumulator: 48, currentValue: 18, index: 3, returns: 66
// accumulator: 66, currentValue: 19, index: 4, returns: 85

//
//
//

// Remove duplicate items in an array

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

console.log(myArrayWithNoDuplicates);

// [ 'a', 'b', 'c', 'e', 'd' ]

//
//

// Replace .filter().map() with .reduce()

const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

//
//

// Using reduce() with sparse arrays

// reduce() skips missing elements in sparse arrays, but it does not skip undefined values.

console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

//
//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
// 3840

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
// 3000
