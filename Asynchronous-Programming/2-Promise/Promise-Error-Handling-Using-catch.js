const myPromise = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return a ? resolve("a is found!") : reject("sorry, no a");
  }, 300);
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// Output:
// sorry, no a

// Since myPromise will eventually resolve to a rejection, the function defined in the nested then() will be ignored. Instead, the error handler in catch() will run.

//
//
//
//
//
//
//

// Define a function that returns a promise that resolves to a string
function getMessage() {
  return new Promise((resolve, reject) => {
    const error = Math.random() < 0.5;
    setTimeout(() => {
      if (error) {
        reject(new Error("An error occurred"));
      } else {
        resolve("This is the message");
      }
    }, 1000);
  });
}

// Define a function that returns a promise that resolves to a modified version of the input string
function modifyMessage1(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} modified by function 1!`);
    }, 1000);
  });
}

// Define another function that returns a promise that resolves to a modified version of the input string
function modifyMessage2(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} modified by function 2!`);
    }, 1000);
  });
}

// Define yet another function that returns a promise that resolves to a modified version of the input string
function modifyMessage3(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} modified by function 3!`);
    }, 1000);
  });
}

// Use promise chaining to call the functions in a specific order
getMessage()
  .then(function (message) {
    return modifyMessage1(message);
  })
  .then(function (modifiedMessage) {
    return modifyMessage2(modifiedMessage);
  })
  .then(function (modifiedMessage) {
    return modifyMessage3(modifiedMessage);
  })
  .then(function (modifiedMessage) {
    console.log(modifiedMessage);
  })
  .catch(function (error) {
    console.error(error);
  });

// Output:
// This is the message modified by function 1! modified by function 2! modified by function 3!

// OR

// Error: An error occurred

//
//
//
//

// In this example, the getMessage function returns a promise that either resolves to a string after a 1 second delay or rejects with an error if a random number is less than 0.5. The modifyMessage1, modifyMessage2, and modifyMessage3 functions return promises that resolve to modified versions of the input string after 1 second delays.

// If the getMessage function resolves, the then functions are called in a specific order, with the output of each function being passed as the input to the next one. The final then function logs the modified message to the console. If the getMessage function rejects with an error, the catch function is called with the error and logs it to the console.
