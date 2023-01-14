let person = {
  fname: "Subham",
  lname: "Sahu",
  arms: 2,
};

let arr = [3, 5, 7];

arr.foo = "hello";

// ------------ for...in : key / property name iterator ------------ //
let text = "";
for (let x in person) {
  text += person[x];
  console.log(x);
}

console.log(text);

console.log("\n");

// ------------ for...of : value / property value iterator ------------ //

console.log(arr);

console.log("\n for...in \n");
for (let i in arr) {
  console.log(i);
}

console.log("\n for...of \n");
for (let i of arr) {
  console.log(i);
}

console.log("\n");
// other example

let ar = [1, 2, 3];

// for...in
for (let key in ar) {
  console.log(ar[key]);
}
// Output: 1, 2, 3

console.log("\n");

// for...of
for (let val of ar) {
  console.log(val);
}
// Output: 1, 2, 3

// /////////////////////

const newObj = {
  name: "John",
  age: 25,
  dob: new Date().getFullYear() - 25,
};

console.log("\ngetting obj keys using for...in:");
for (let n in newObj) {
  console.log(n);
}

console.log("\ngetting obj values using for...in:");
for (let n in newObj) {
  console.log(newObj[n]);
}

console.log("\nError");
for (let n of newObj) {
  console.log(n);
}
