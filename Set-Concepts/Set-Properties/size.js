// The size accessor property returns the number of (unique) elements in a Set object.

const setNew = new Set();

console.log(setNew);

setNew.add(10);

console.log(setNew);

console.log(setNew.size);

setNew.add("Batman");

console.log(setNew);

console.log(setNew.size);

setNew.add(false);

console.log(setNew);

console.log(setNew.size);
