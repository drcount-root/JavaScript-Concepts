// The size accessor property returns the number of elements in a Map object.

const map1 = new Map();

map1.set("a", "alpha");
map1.set("b", "beta");
map1.set("g", "gamma");

console.log(map1.size);
// 3

const map2 = new Map();

console.log(map2.size);
// 0