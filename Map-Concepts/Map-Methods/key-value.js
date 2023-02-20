// keys()

// The keys() method returns a new iterator object that contains the keys for each element in the Map object in insertion order. In this particular case, this iterator object is also an iterable, so a for...of... loop can be used.

// keys()

// Return value => a new Map() iterator object

const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.keys();

console.log(iterator1.next().value);
// "0"

console.log(iterator1.next().value);
// 1

const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}

//
//
//
//

// values()

// The values() method returns a new iterator object that contains the values for each element in the Map object in insertion order.

// values()

// Return value => A new Map iterator object

const mp = new Map();

mp.set("0", "foo");
mp.set(1, "bar");

const iterator = mp.values();

console.log(iterator.next().value);
// "foo"

console.log(iterator.next().value);
// "bar"

//
//
//
//

const myMapp = new Map();
myMapp.set("0", "foo");
myMapp.set(1, "bar");
myMapp.set({}, "baz");

const mapIte = myMapp.values();

console.log(mapIte.next().value); // "foo"
console.log(mapIte.next().value); // "bar"
console.log(mapIte.next().value); // "baz"
