// Debouncing in JS

// In JavaScript, debouncing is a technique used to limit the rate at which a function can fire. It is often used in web development to improve the performance of a website or application by preventing a function from being called too frequently.

// A common use case for debouncing in JavaScript is when a user types into a search field and the results are retrieved and displayed on the screen. Without debouncing, the function to retrieve the results would be called on every keystroke, which could cause performance issues and slow down the page. By debouncing the function, it is only called once the user stops typing for a certain amount of time.

// Debouncing in JavaScript can be implemented using a function that sets a timer and waits for a certain amount of time before calling the original function. The timer is reset each time the function is called, so if the function is called again before the timer expires, the previous timer is cancelled and a new one is set.

let counter = 0;

const getData = () => {
  // calls an API and gets data
  console.log("Fetching data ...", counter++);
};

// here for each keystroke, a new log comes to console (so to say, for each keystroke a new event get fired & the api get called everytime)

// through debouncing we want to achieve that only when we pause typing, then only the api call made

//
//
//

// debouncing function

const debouncing = function (fn, d) {
  let timer;
  return function () {
    let context = this;
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

//
//
//

const betterFunction = debouncing(getData, 300);
// if only the diff of time betw 2 keystrokes is >= 300ms then only call the getData() method (then only fetch the data from api)
