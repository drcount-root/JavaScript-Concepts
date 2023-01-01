function step1(callback) {
  console.log("Step 1");
  setTimeout(function () {
    callback();
  }, 2000);
}

function step2(callback) {
  console.log("Step 2");
  setTimeout(function () {
    callback();
  }, 3000);
}

function step3(callback) {
  console.log("Step 3");
  setTimeout(function () {
    callback();
  }, 4000);
}

/////   Callback hell   /////

step1(function () {
  step2(function () {
    step3(function () {
      console.log("All done!");
    });
  });
});
