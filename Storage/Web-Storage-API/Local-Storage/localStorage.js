// Developer Console > Application > Storage > Local Storage

// Key-Value pair

// localStorage is read-only property stored on the window object of browser. window is the global object.

// window.localStorage Or localStorage

// create / save
localStorage.setItem("Name", "Subham");
localStorage.setItem("Age", "25");

//
//
//

// can override the value by setting new value to that key

localStorage.setItem("Name", "Kyle");

//
//
//

// To store into a variable & to read

localStorage.setItem("myTortoise", "Dexter");
const torto = localStorage.getItem("myTortoise");
console.log(torto);

//
//
//

// To remove only specific one key-value

localStorage.removeItem("Age");

//
//
//

// To remove all the localStorage items

localStorage.clear();

//
//
//

// localStorage accepts only strings, but we want to store some object

const user = { name: "Subh" };

// localStorage.setItem("user", user) // we can't set like this. This will give [obejct Object] if we do localStorage.getItem("user");

// Right way to store object
localStorage.setItem("user", JSON.stringify(user));

localStorage.getItem("user"); // "{"name": "Subh"}"

// Problem with it is that, it's a string. Need to convert to JS Obj
JSON.parse(localStorage.getItem("user"));
// {name: "Subh"}
