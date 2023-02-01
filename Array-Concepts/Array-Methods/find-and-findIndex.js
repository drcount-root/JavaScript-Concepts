// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// find((element, index, array) => { /* … */ })

// find(function (element, index, array) { /* … */ }, thisArg)

//
//
//

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// 12

//
//
//

// Find an object in an array by one of its properties

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result);
// { name: 'cherries', quantity: 5 }

//
//
//

// Find a prime number in an array

function isPrime(item, index, array) {
  let start = 2;
  while (start <= Math.sqrt(item)) {
    if (item % start++ < 1) {
      return false;
    }
  }
  return item > 1;
}

console.log([4, 6, 8, 12].find(isPrime));
// undefined, not found

console.log([4, 5, 8, 12].find(isPrime));
// 5

//
//
//
//

// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.find((value, index) => {
  console.log("Visited index ", index, " with value ", value);
});
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6

// Shows all indexes, including deleted
array.find((value, index) => {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log("Deleting array[5] with value ", array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index ", index, " with value ", value);
});
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6

//
//
//
//
//
//

// findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findIndex((element, index, array) => { /* … */ })

// findIndex(function (element, index, array) { /* … */ }, thisArg)

const arrayB = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(arrayB.findIndex(isLargeNumber));
// 3

const mumber = (element) => element < 3;

console.log(arrayB.findIndex(mumber));
// -1

//
//
//
//

// Using findIndex() on sparse arrays

// You can search for undefined in a sparse array and get the index of an empty slot.

console.log([1, , 3].findIndex((x) => x === undefined)); 
// 1
