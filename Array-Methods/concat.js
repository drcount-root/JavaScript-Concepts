// doesn't mutate the original array

const arrA = ["a", "b", "c"];
const arrB = ["d", "e", "f", "g"];

const letters = arrA.concat(arrB);

console.log(letters);
// ["a", "b", "c", "d", "e", "f", "g"]

// can achieve the same using spread operator, without mutating the array
console.log([...arrA, ...arrB]);
// ["a", "b", "c", "d", "e", "f", "g"]
