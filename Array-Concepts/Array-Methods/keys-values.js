// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

// keys()

// A new Array iterator object.

// When used on sparse arrays, the keys() method iterates empty slots as if they have the value undefined.

const array1 = ["a", "b", "c"];
const iteratorKeys = array1.keys();

console.log(iteratorKeys);
// Object [Array Iterator] {}

for (const key of iteratorKeys) {
  console.log(key);
}

// 0
// 1
// 2

const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

//
//
//
//

// The values() method returns a new array iterator object that iterates the value of each index in the array.

// values()

// Returns a new iterable iterator object.


const iteratorValues = array1.values();

console.log(iteratorValues);
// Object [Array Iterator] {}

for (const values of iteratorValues) {
  console.log(values);
}

// a
// b
// c
