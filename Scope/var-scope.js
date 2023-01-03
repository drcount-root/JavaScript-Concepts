/*
// Variables declared with the var keyword are -

1. function scoped : If variables are defined inside function, then they will only be accessible inside that function. This is the meaning of `variable declared with var are function scoped`.

2. global scoped : If they are defined outside of any function or if they are declared inside block like (if...else...).

*/

// Scenario 1 : Only Locally accessible

try {
  function foo() {
    var x = 3;
    console.log(x);
  }

  foo(); // Output: 1

  console.log(x); // ReferenceError : x is not defined
} catch (err) {
  console.log(err.name + " : " + err.message);
}

// I used try-catch just to catch the error, so that it couldn't block execution of next lines.

//
//
//
//
//

// Scenario 2.1 : Globally accessible

var y = 6;
console.log(y);

//
//
//
//
//

// Scenario 2.2 : Globally accessible

if (true) {
  var z = 9;
}

console.log(z);

//
//
//
//

// CONCLUSION: Variables declared with var keyword are function-scoped or global scoped, depending on where they are declared.
