// Iteration over Set

// The forEach() method executes a provided function once for each value in the Set object, in insertion order.

function logSetElements(value, set_have_no_key, set) {
  console.log(`s[${value}] = ${set_have_no_key}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// s[foo] = foo
// s[bar] = bar
// s[undefined] = undefined

// value, key
// The current element being processed in the Set. As there are no keys in Set, the value is passed for both arguments.

// set
// The Set object which forEach() was called upon.

//
//
//
//
//

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John Pete Mary)
}

// same thing with forEach

set.forEach((val, valAgain, set) => {
  console.log(`Hi, ${val.name}`);
});
