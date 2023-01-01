// const addToTen = function (n) {
//   console.log("New");
//   return n + 10;
// };

// console.log(addToTen(5)); // New 15
// console.log(addToTen(17)); // New 27
// console.log(addToTen(5)); // New 15

//
// Instead of using computing power, we can use memoization caching here.
//
//
//
//
// MEMOIZATION CACHING

// Using an object to store the cache
const cache = {};

const memoizedAddToTen = function (n) {
  if (n in cache) {
    // return the cached value if it exists
    console.log("Cached");
    return cache[n];
  } else {
    // Calculate the result and store it in the cache
    console.log("New");
    cache[n] = n + 10;
    return cache[n];
  }
};

console.log(memoizedAddToTen(5)); // New 15
console.log(memoizedAddToTen(17)); // New 27
console.log(memoizedAddToTen(5)); // Cached 15
console.log(memoizedAddToTen(51)); // New 61
console.log(memoizedAddToTen(17)); // Cached 27
