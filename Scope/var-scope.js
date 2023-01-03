/*
Variables declared with the var keyword are -

1. function scoped : If variables are defined inside function block, then they will only be accessible inside that function. This is the meaning of `variable declared with var are function scoped`.

2. global scoped : If they are defined outside of any function or if they are declared inside block like (if...else...).

*/

// Scenario 1 (defined inside function) : Only Locally accessible

try {
  function foo() {
    var x = 3;
    console.log(x);
  }

  foo(); // Output: 3

  console.log(x); // it throws an error
} catch (err) {
  console.log(err.name + " : " + err.message); // Output: ReferenceError : x is not defined
}

// I used try-catch just to catch the error, so that it couldn't block execution of next lines.

//
//
//
//
//

// Scenario 2 (defined globally) : Globally accessible

var y = 6;
console.log(y); // Output: 6

//
//
//
//
//

// Scenario 3 (defined inside if...else... block) : Globally accessible

if (true) {
  var z = 9;
  console.log(z); // Output: 9
}

console.log(z); // Output: 9

//
//
//
//

// CONCLUSION: Variables declared with var keyword are function-scoped or global scoped, depending on where they are declared.

// Block-Function => Yes-No (In context of global accessibility)
