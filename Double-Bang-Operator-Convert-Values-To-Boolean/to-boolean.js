// bang operator

console.log(!true); // false

console.log(!false); // true

isTrue = true; // variable which is boolean

console.log(!isTrue); // false

//
//
//

// double bang operator

console.log(!!true); // true
console.log(!!false); // false

isTrue = true; // variable which is boolean
console.log(!!isTrue); // true

isNumber = 34; // variable which is not boolean

console.log(!!isNumber); // true

//
//
//
//
//
//
//
//

console.log(
  "\n\n---- Ways to Convert Values to Boolean in JavaScript ----\n"
);

// String to Boolean

const string = "string";

console.log(!!string); // true

console.log(Boolean(string)); // true

// Number to Boolean

const number = 100;

console.log(!!number); // true

console.log(Boolean(number)); // true

// truthy values

{}  // !!{} true
[]  // !![] true
"anything"  // !!"anything" true
3.14  // !!3.14 true
new Date()  // !!new Date() true

// In JavaScript, there are 6 falsy values. 

false
undefined
null
NaN
0
""

// converting any of these falsy to a boolean, it will return false.

!!false // false
!!undefined // false
!!null // false
!!NaN // false
!!0 // false
!!"" // false

// OR

Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(0); // false
Boolean(''); // false