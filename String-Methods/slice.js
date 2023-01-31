// returns a new string, without modifying the original string

const str = "Typewriter";

console.log(str.slice(3));
// "ewriter"

console.log(str.slice(4, 7));
// "wri"

console.log(str.slice(-5));
// "riter"

console.log(str.slice(-1));
// "r"

console.log(str.slice(1, -1));
// "ypewrite"

// copy
console.log(str.slice());
// "Typewriter"