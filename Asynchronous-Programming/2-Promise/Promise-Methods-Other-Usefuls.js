const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

//
//
//
//
////////////// Promise.all() //////////////
//
//

// If we want to run all of them in same time (like in parallel):
// Promise.all() Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
// takes parameter — An array of Promises.
// returns — A new Promise.
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
// Output:
// [ 'Video 1 Recorded', 'Video 2 Recorded', 'Video 3 Recorded' ]

//
//
//
//
////////////// Promise.race() //////////////
//
//

// Now if we want to do something as soon as one of the promises get resolved:
// Promise.race() Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
// takes parameter — An array of Promises.
// returns — A new Promise.
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
// Output:
// Video 1 Recorded

//
//
//
//
////////////// Promise.finally() //////////////
//
//

// The finally() method can be useful if you want to do some processing or cleanup once the promise is settled (either fulfilled or rejected), regardless of its outcome.

// It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

// If the handler throws an error or returns a rejected promise, the promise returned by finally() will be rejected with that value instead. Otherwise, the return value of the handler does not affect the state of the original promise.

// This lets you avoid duplicating code in both the promise's then() and catch() handlers.

function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });

// Output:
// "Mail has arrived"
// "Experiment completed"

// OR

// Output:
// "Error: Failed to arrive"
// "Experiment completed"

//
//
//

// Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

// parameter — The callback to execute when the Promise is settled (fulfilled or rejected).

// returns — A Promise for the completion of the callback.
