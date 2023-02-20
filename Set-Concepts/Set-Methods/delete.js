// The delete() method removes a specified value from a Set object, if it is in the set.

// delete(value)

// Returns true if value was already in Set; otherwise false.

const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set1.forEach((point) => {
  if (point.x > 10) {
    set1.delete(point);
  }
});

console.log(set1.size);
// 1

//
//
//
//

const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; no "bar" element found to be deleted.
console.log(mySet.delete("foo")); // true; successfully removed.

console.log(mySet.has("foo")); // false; the "foo" element is no longer present.

//
//
//
//

const gaming = new Set([3, 5, 7, 5, 3, 9]);

// gaming.add()

console.log(gaming);
// { 3, 5, 7, 9 }

//
//
//
//

// Deleting an object from a set

// Because objects are compared by reference, you have to delete them by checking individual properties if you don't have a reference to the original object.

const setObj = new Set(); // Create a new set.

setObj.add({ x: 10, y: 20 }); // Add object in the set.

setObj.add({ x: 20, y: 30 }); // Add object in the set.

// Delete any point with `x > 10`.
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});

console.log(setObj);
// { { x: 10, y: 20 } }