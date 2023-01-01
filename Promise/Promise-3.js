const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

// If we want to run all of them in same time (like in parallel):
// Promise.all() Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
// takes parameter — An array of Promises.
// returns — A new Promise.
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

// Now if we want to do something as soon as one of the promises get resolved:
// Promise.race() Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
// takes parameter — An array of Promises.
// returns — A new Promise.
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
