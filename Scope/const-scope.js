/*
Variables declared with the var keyword are -

1. block scoped : If variables are defined inside a block (like if...else..., function block, etc.), then they will only be accessible inside that block. This is the meaning of `variable declared with const are block scoped`.

2. global scoped : Only if they are declared globally

*/

// Scenario 1 (defined inside function) : Only Locally accessible

try {
  function foo() {
    const x = 3;
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

const y = 6;
console.log(y); // Output: 6

//
//
//
//
//

// Scenario 3 (defined inside if...else... block) : Only Locally accessible

try {
  if (true) {
    const z = 9;
    console.log(z); // Output: 9
  }

  console.log(z); // it throws the error
} catch (err) {
  console.log(err.name + " : " + err.message); // ReferenceError : z is not defined
}

//
//
//
//

// CONCLUSION: Variables declared with const keyword are block-scoped or global scoped, depending on where they are declared.

// Block-Function => No-No (In context of global accessibility)
