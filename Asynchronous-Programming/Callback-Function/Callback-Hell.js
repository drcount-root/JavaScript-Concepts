function step1(callback) {
  console.log("Step 1");
  setTimeout(function () {
    callback();
  }, 4000);
}

function step2(callback) {
  console.log("Step 2");
  setTimeout(function () {
    callback();
  }, 2000);
}

function step3(callback) {
  console.log("Step 3");
  setTimeout(function () {
    callback();
  }, 3000);
}

/////   Callback hell   /////

step1(function () {
  step2(function () {
    step3(function () {
      console.log("All done!");
    });
  });
});

// Output:
// Step 1 (logs to console immediately, then 4s timer starts)
// Step 2 (after 4s of logging 'Step 1', it logs to console, then 2s timer starts)
// Step 3 (after 2s of logging 'Step 2', it logs to console, then 3s timer starts)
// All done! (after 3s of logging 'Step 3', it logs to console)
