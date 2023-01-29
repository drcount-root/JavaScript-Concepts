// Throttling in JS

// Throttling is generally used for performance optimization. Or rate limiting the function call or execution.

// In JavaScript, throttling is a technique used to limit the rate at which a function can be called. It is similar to debouncing, but instead of waiting for a certain amount of time before calling the function, it only allows the function to be called once within a certain time period. This can be useful in situations where you want to limit the number of times a function is called, but still want it to be called as soon as possible.

// A common use case for throttling in JavaScript is when a user is scrolling through a webpage, and you want to update certain elements on the page as the user scrolls. Without throttling, the function to update the elements would be called multiple times per second, which could cause performance issues and slow down the page. By throttling the function, it is only called a certain number of times per second, which can improve performance.

// Throttling in JavaScript can be implemented using a function that sets a timer and waits for a certain amount of time before allowing the original function to be called again. The timer is reset each time the function is called, so if the function is called again before the timer expires, the previous timer is cancelled and a new one is set.

//
//
//

// This is the normal Function without Throttling
// Check the console for the difference between the calls of Normal Function and the Throttled Function 

const normalFunc = () => {
  console.count("Normal Function");
}

window.addEventListener("resize",normalFunc);

//
//
//

const loggerFunc = () => {
  console.count("Throttled Function");
}

const throttle = (fn, limit) => {
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    if(flag){
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag=true;
      }, limit);
    }
  }
}

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize",betterLoggerFunction);


