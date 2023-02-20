// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
```

Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method.


## Map vs Object

| Map | Object |
|-----|-------|
| A Map's keys can be any value (including functions, objects, or any primitive). | The keys of an Object must be either a String or a Symbol. |
| The number of items in a Map is easily retrieved from its size property. | ```const object1 = { a: 'somestring', b: 42, c: false };    console.log(Object.keys(object1).length); Output: 3```|
| Performs better in scenarios involving frequent additions and removals of key-value pairs. | Not optimized for frequent additions and removals of key-value pairs. |