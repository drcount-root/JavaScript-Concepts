document.querySelector(".grand-parent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked");
  },
  true //capturing
);

document.querySelector(".parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  false //bubbling
);

document.querySelector(".child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  false //bubbling
);

//
//

// Output on clicking child div

// Grand Parent Clicked
// Child Clicked
// Parent Clicked

// So first event propagation happens top-to-down to hierarchy, so first capturing then bubbling.

//
//

// Output on clicking parent div

// Grand Parent Clicked
// Parent Clicked

//
//

// Output on clicking grand parent div

// Grand Parent Clicked
