// Bubbling & Capturing are expensive things. So we have to deal with how to stop event propagation.

document.querySelector(".grand-parent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked");
  },
  false
);

document.querySelector(".parent").addEventListener(
  "click",
  (event) => {
    console.log("Parent Clicked");
    event.stopPropagation(); // stops the propagation of the event
  },
  false
);

document.querySelector(".child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  false
);

//
//

// Output on clicking child div

// Child Clicked
// Parent Clicked

//
//

// Output on clicking parent div

// Parent Clicked

// as propagation stops at this point

//
//

// Output on clicking grand parent div

// Grand Parent Clicked

//
//
//

// if all three event handler have false as third param & if we put the event.stopPropagation() inside child div event handler, then the output of clicking the child div will be-
// Child Clicked
// as bubbling starts from bottom & we stopped propagation after child div event handler called

//
//
//

// if all three event handler have true as third param & if we put the event.stopPropagation() inside child div event handler, then the output of clicking the child div will be-
// Grand Parent Clicked
// Parent Clicked
// Child Clicked
// as capturing starts from top. So it doesn't matter that we stopped propagation after child div event handler called

// if we put the event.stopPropagation() inside grand parent div event handler, then the output of clicking the child div will be-

// Grand Parent Clicked
