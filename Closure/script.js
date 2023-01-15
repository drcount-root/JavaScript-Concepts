// Example - 1

// const outerFunc = (outerVariable) => {
//   const outerVariable2 = "Hi";
//   return function innerFunc(innerVariable) {
//     console.log("Outer Varibale : " + outerVariable);
//     console.log("Inner Variable : " + innerVariable);
//     console.log(outerVariable2);
//   };
// };

// const newFunc = outerFunc("outside");

// newFunc("inner");

//
//
//
//

// Example - 2

const x = function () {
  const a = 7;
  // const y = function () {
  //   console.log(a);
  // };
  // return y;
  return function y() {
    console.log(a);
  };
};

const z = x();
// Execution context of function x() is popped off by this line

console.log(z);
// f y(){
//   console.log(a);
// }

z();
// 7
// This is because of closure. That closure remembers where it was actually present. So though ec of x() func, no-longer exists, but still the y() func remembers it's lexical scope. Still remembers the reference to a.

// When we returned y from the x() function, not just the
// f y()
// {
//    console.log(a);
// } code was returned, but a closure was returned.

//
//
//
//

const funA = () => {
  let p = 12;

  const funB = () => {
    console.log(p);
  };

  p = 37;

  return funB;
};

const otherFunc = funA();

otherFunc();
// 37
// because closure forms with p's reference, not with p's value

//
//
//
//

function A() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}

A();
// 7 900
