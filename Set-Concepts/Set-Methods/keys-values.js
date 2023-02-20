// The keys() method is an alias for the values() method.

// keys();

// Return value

// A new iterator object containing the values for each element in the given Set, in insertion order.

//
//
//
//

// The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.

const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

console.log(mySet);
// it returns Set

const getValues = mySet.values();

console.log(getValues);
// [Set Iterator] { 'foo', 'bar', 'baz' }

console.log(getValues.next().value);
// foo
console.log(getValues.next().value);
// bar
console.log(getValues.next().value);
// baz

const getKeys = mySet.keys();

console.log(getKeys);
// [Set Iterator] { 'foo', 'bar', 'baz' }
