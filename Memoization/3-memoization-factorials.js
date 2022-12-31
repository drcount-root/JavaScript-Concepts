const cache = {};

const factoCalc = function (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factoCalc(n - 1);
  }
};

const memoizationFactorial = function (num) {
  if (num in cache) {
    console.log("Cached");
    return cache[num];
  } else {
    console.log("New");
    cache[num] = factoCalc(num);
    return cache[num];
  }
};

console.log(memoizationFactorial(7)); // New 5040
console.log(memoizationFactorial(5)); // New 120
console.log(memoizationFactorial(7)); // Cached 5040
console.log(memoizationFactorial(4)); // New 24
console.log(memoizationFactorial(5)); // Cached 120
