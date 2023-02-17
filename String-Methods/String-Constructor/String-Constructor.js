// The String constructor is used to create a new String object. When called instead as a function, it performs type conversion to a primitive string, which is usually more useful.

// new String(thing)   Constructor
// String(thing)       Function

// thing => Anything to be converted to a string.

// Return value:
// When String is called as a constructor (with new), it creates a String object, which is not a primitive.

//
//
//

// String constructor vs String function

// String constructor
const a = new String("Hello world"); // a === "Hello world" is false

// String funciton
const b = String("Hello world"); // b === "Hello world" is true

console.log(a instanceof String); // is true

console.log(b instanceof String); // is false

console.log(typeof a); // "object"

console.log(typeof b); // "string"

//
//

// Constructor produces an instance of the type String (an object wrapper).

// Function produces a string (the primitive type) as promised.

//
//
//

// Using String() to stringify a symbol

// String() is the only case where a symbol can be converted to a string without throwing, because it's very explicit.

const sym = Symbol("#");
const symToStr = String(sym);

console.log(symToStr);
