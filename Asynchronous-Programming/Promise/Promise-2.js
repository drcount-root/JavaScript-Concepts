// Example-1: With callbacks

const userLeftC = false;
const userWatchingCatMemeC = true;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeftC) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMemeC) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log("Resolved: " + message);
  },
  (error) => {
    console.log("Rejected: " + error.name + " " + error.message);
  }
);

// Output:
// Rejected: User Watching Cat Meme WebDevSimplified < Cat

//
//
//
//
//
//

// Example-1: With Promise

const userLeftP = false;
const userWatchingCatMemeP = true;

const watchTutorialPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeftP) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMemeP) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
};

watchTutorialPromise()
  .then((message) => {
    console.log("Resolved: " + message);
  })
  .catch((error) => {
    console.log("Rejected: " + error.name + " " + error.message);
  });

// Output:
// Rejected: User Watching Cat Meme WebDevSimplified < Cat

//
//
//
//
//
//
//
//

// Using callbacks can lead us to get stucked in callback hell

//
//
//
//
//
//
//
//
