const X = function () {
  let value = 1;

  setTimeout(function () {
    console.log(value);
  }, 3000);
  console.log("JavaScript");
};

X();

// the callback of setTimeout forms a closure. And remembers the reference of value.

// this callback fnc get attached with a timer of 3000ms & stored into Web APIs component. Once the timer expire, that callback func is placed to the callback queue.
