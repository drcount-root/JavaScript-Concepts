document.querySelector(".grand-parent").addEventListener("click", () => {
  console.log("Grand Parent Clicked");
});

document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.querySelector(".child").addEventListener("click", () => {
  console.log("Child Clicked");
});

//
//

// Output on clicking child div

// Child Clicked
// Parent Clicked
// Grand Parent Clicked

//
//

// Output on clicking parent div

// Parent Clicked
// Grand Parent Clicked

//
//

// Output on clicking grand parent div

// Grand Parent Clicked
