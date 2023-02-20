// The get() method returns a specified element from a Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

// get(key)

// Return value => returns the element associated with the specified key, or undefined if the key can't be found in the Map object.

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// "foo"

console.log(map1.get('baz'));
// undefined

//
//
//
//


const arr = [];
const myMap = new Map();
myMap.set('bar', arr);

myMap.get('bar').push('foo');

console.log(arr); // ["foo"]
console.log(myMap.get('bar')); // ["foo"]