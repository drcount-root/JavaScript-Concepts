// Logical Error Interview Question

function fnVAR() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
fnVAR();

// ---------------------------------------------

// Output:
// 6
// 6
// 6
// 6
// 6
// (Each prints after 1s delay)

// Reason:
// By the time, the callback fnc get a chance to execute, the value of i became 6. As variable declared with var is non-block scoped. This means that the value of i is accessible outside of the loop and can be changed. As a result, when the timeouts are triggered and the function is called, it will always log the value of i that was assigned after the loop completed, which is 6.

//
//
//
//
//
//

// Fix using let

// function fnLET() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// fnLET();

// Output:
// 1
// 2
// 3
// 4
// 5
// (Each num prints after 1s delay)

// Reason:
// As variable declared with let is block scoped, When the loop executes, each time it creates a new block where a new copy of i attached with the setTimeout().

//
//
//
//
//
//

// Fix using var with closure

// function fN() {
//   for (var i = 1; i <= 5; i++) {
//     function count(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }

//     count(i);
//   }
// }

// fN();

// Q : print the integers from 0 to 5 with a 1 second delay between each number

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

//
//
// OR
//
//

// let i = 1;

// function printNumbers() {
//   console.log(i);
//   i++;

//   if (i <= 5) {
//     setTimeout(printNumbers, 1000);
//   }
// }

// setTimeout(printNumbers, 1000);

//
//
// OR
//
//
