const myPromise = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Yeah! Resolved");
  } else {
    reject("Oops! Rejected");
  }
});

// Promise() object takes one parameter, which is the executor function which is responsible for performing the asynchronous operation.
// This executor function takes two parameters - 1. resolve, 2. reject

// anything inside then() will run only when the promise get resolved
// anything inside catch() will run only when the promise get rejected

myPromise
  .then((message) => {
    console.log(`This is in the then ${message}`);
  })
  .catch((message) => {
    console.log(`This is in the catch ${message}`);
  });

// Output:
// This is in the catch Oops! Rejected
