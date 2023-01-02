// Callback Hell

// Define a function that performs an asynchronous operation and calls a callback with the result
const getMessage = function (callback) {
  setTimeout(() => {
    callback("This is the message");
  }, 3000);
};

// Define a function that performs an asynchronous operation and calls a callback with the result
const modifyMessage = function (message, callback) {
  setTimeout(() => {
    callback(`${message} modified!`);
  }, 2000);
};

const anotherFunc = function (callback) {
  setTimeout(() => {
    callback("Taking time, not scalable for big projects");
  }, 0);
};

// Use nested function calls to execute the functions in a specific order
getMessage((message) => {
  modifyMessage(message, (modifiedMessage) => {
    console.log(modifiedMessage);
    anotherFunc((another) => {
      console.log(another);
    });
  });
});

// Output:
// This is the message modified! (after a 5 seconds delay)
// Taking time, not scalable for big projects (instantly when the previous message logs, as it was set in that order)

// For large scale projects this callback hell caused lots of bugs, readability issues & slow down the process

//
//
//
//
//
//
//

// Solution of the previous callback hell using promise chaining

// Define a function that returns a promise that resolves to a string
const getMessageP = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is the message");
    }, 3000);
  });
};

// Define a function that returns a promise that resolves to a modified version of the input string
const modifyMessageP = function (message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} modified!`);
    }, 2000);
  });
};

// Use promise chaining to call the functions in a specific order
getMessageP()
  .then((message) => modifyMessageP(message))
  .then((modifiedMessageP) => console.log(modifiedMessageP))
  .then(() => console.log("Promises are chained Successfully!"));

// Output:
// This is the message modified! (after a 5 seconds delay)
// Promises are chained Successfully! (instantly when the previous message logs, as it was depended upon that promise)
