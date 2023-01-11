document.querySelector(".grand-parent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked");
  },
  true
);

document.querySelector(".parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

document.querySelector(".child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);

//
//

// Output on clicking child div

// Grand Parent Clicked
// Parent Clicked
// Child Clicked

//
//

// Output on clicking parent div

// Grand Parent Clicked
// Parent Clicked

//
//

// Output on clicking grand parent div

// Grand Parent Clicked
