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

//
//
//
//
//

// Callback Arrow function

const callbackFuncArrow = (m, n) => m + n;

const mainFunctionArrow = (a, b, cbf) => a + " + " + b + " = " + cbf(a, b);

console.log(mainFunctionArrow(10, 45, callbackFuncArrow));
// Output:
// 10 + 45 = 55

//
//
//
//
//

// Callback in Callback

const mainFunctionCC = (m) => (n) => m + " + " + n + " = " + (m + n);

console.log(mainFunctionCC(10)(45));
// Output:
// 10 + 45 = 55
