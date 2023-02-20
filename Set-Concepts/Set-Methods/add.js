// The add() method inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.

// add(value)
// The value of the element to add to the Set object.

const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

console.log(set1.size);

for (const item of set1) {
  console.log(item);
  // 42
  // 13
}

//
//
//
//

// add() method is chainable

const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
