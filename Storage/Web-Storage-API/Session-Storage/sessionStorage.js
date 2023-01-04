// Developer Console > Application > Storage > Session Storage

// Key-Value pair

// sessionStorage is read-only property stored on the window object of browser. window is the global object.

// window.sessionStorage Or sessionStorage

// create / save
sessionStorage.setItem("Name", "Subham");
sessionStorage.setItem("Age", "25");

//
//
//

// can override the value by setting new value to that key

sessionStorage.setItem("Name", "Kyle");

//
//
//

// To store into a variable & to read

sessionStorage.setItem("myTortoise", "Dexter");
const torto = sessionStorage.getItem("myTortoise");
console.log(torto);

//
//
//

// To remove only specific one key-value

sessionStorage.removeItem("Age");

//
//
//

// To remove all the sessionStorage items

sessionStorage.clear();
