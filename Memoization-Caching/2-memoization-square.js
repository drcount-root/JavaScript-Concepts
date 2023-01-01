// Using an object to store the cache
const cache = {};

const memoizedSquare = function (num) {
  if (num in cache) {
    // return the cached value if it exists
    console.log("Cached");
    return cache[num];
  } else {
    // Calculate the result and store it in the cache
    console.log("New");
    cache[num] = num * num;
    return cache[num];
  }
};

console.log(memoizedSquare(5)); // New 25
console.log(memoizedSquare(8)); // New 64
console.log(memoizedSquare(5)); // Cached 25
console.log(memoizedSquare(7)); // New 49
console.log(memoizedSquare(8)); // Cached 64
