## Callback Function

### What is a callback function ?

> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

> Due to callbacks we can do asynchronous programming in JavaScript. Callbacks are not by default asynchronous, we can use them to do asynchronous tasks.

### Example-1

```
// Callback Function expressions

const callbackFunc = function (m, n) {
  const result = m + n;
  return result;
};

const mainFunction = function (a, b, cbf) {
  return a + " + " + b + " = " + cbf(a, b);
};

console.log(mainFunction(10, 45, callbackFunc));

// Output:
// 10 + 45 = 55
```

### Example-2

```
// Callback Arrow function

const callbackFuncArrow = (m, n) => m + n;

const mainFunctionArrow = (a, b, cbf) => a + " + " + b + " = " + cbf(a, b);

console.log(mainFunctionArrow(10, 45, callbackFuncArrow));

// Output:
// 10 + 45 = 55
```

### Example-3

```
// Callback in Callback

const mainFunctionCC = (m) => (n) => m + " + " + n + " = " + (m + n);

console.log(mainFunctionCC(10)(45));

// Output:
// 10 + 45 = 55
```

### What is Callback Hell / Pyramid Of Doom ?

> Callback hell is a term used to describe a situation where callback functions are nested inside each other in a deeply nested, difficult-to-read structure.

Here is an example of callback hell:

```
function step1(callback) {
  console.log("Step 1");
  setTimeout(function() {
    callback();
  }, 1000);
}

function step2(callback) {
  console.log("Step 2");
  setTimeout(function() {
    callback();
  }, 1000);
}

function step3(callback) {
  console.log("Step 3");
  setTimeout(function() {
    callback();
  }, 1000);
}

step1(function() {
  step2(function() {
    step3(function() {
      console.log("All done!");
    });
  });
});

// Output:
// Step 1 (logs to console immediately, then 4s timer starts)
// Step 2 (after 4s of logging 'Step 1', it logs to console, then 2s timer starts)
// Step 3 (after 2s of logging 'Step 2', it logs to console, then 3s timer starts)
// All done! (after 3s of logging 'Step 3', it logs to console)
```

In this example, the step1 function is called first, and when it is done, it calls the step2 function, which in turn calls the step3 function. When the step3 function is done, it logs a message to the console.

This example shows how callback functions can be nested inside each other, creating a deeply nested structure that can be difficult to read and understand. This kind of structure is often referred to as "callback hell" because it can be difficult to maintain and debug.

### Fix / How to avoid getting into Callback hell

There are several ways to avoid callback hell, such as -
using **promises** or **async/await**. These techniques can help make your code more readable and easier to understand.
