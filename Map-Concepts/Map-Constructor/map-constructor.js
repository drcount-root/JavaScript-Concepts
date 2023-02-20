// The Map() constructor creates Map objects.

// new Map()
// new Map(iterable)

// iterable => An Array or other iterable object whose elements are key-value pairs. (For example, arrays with two elements, such as [[ 1, 'one' ],[ 2, 'two' ]].) Each key-value pair is added to the new Map.

const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

console.log(myMap);
// Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

