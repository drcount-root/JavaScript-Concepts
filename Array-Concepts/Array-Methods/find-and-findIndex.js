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
