// const X = function () {
//   let value = 10;

//   setTimeout(function () {
//     console.log(value);
//   }, 3000);
//   console.log("JavaScript");
// };

// X();

// JavaScript
// 10

// the callback of setTimeout forms a closure. And remembers the reference of value.

// this callback fnc get attached with a timer of 3000ms & stored into Web APIs component. Once the timer expire, that callback func is placed to the callback queue.

//
//
//
//

// Printing each numbers 1 sec interval

const printerFunc = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
};

// printerFunc();

// 1 2 3 4 5

//
//
//
//

const printerVarFunc = () => {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
};

// printerVarFunc();

// 6 6 6 6 6
// As by the time the timer expires the value of i reaches to 6

//
//
//
//

const printerVarSolFunc = () => {
  for (var i = 1; i <= 5; i++) {
    function a(n) {
      setTimeout(() => {
        console.log(n);
      }, 1000 * n);
    }
    a(i);
  }
};

printerVarSolFunc();

// 1 2 3 4 5
