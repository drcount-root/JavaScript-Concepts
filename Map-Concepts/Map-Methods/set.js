// The set() method adds or updates an entry in a Map object with a specified key and a value.

// set(key, value)

// Return value => The Map object.

const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// "foo"

console.log(map1.get("baz"));
// undefined

//
//
//

const myMap = new Map();

// Add new elements to the map
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Update an element in the map
myMap.set("bar", "baz");

console.log(myMap);
// Map(2) { 'bar' => 'baz', 1 => 'foobar' }

//
//
//

// set() method chaining on a Map()

const myMp = new Map();

// Add new elements to the map with chaining.
myMp.set("bar", "foo").set(1, "foobar").set(2, "baz");

console.log(myMp);
// Map(3) { 'bar' => 'foo', 1 => 'foobar', 2 => 'baz' }

const itr = myMp.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});

console.log(itr);

// bar : foo
// 1 : foobar
// 2 : baz
