// replace()

// The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// replace(pattern, replacement)

// Return value

// A new string, with one, some, or all matches of the pattern replaced by the specified replacement.

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replace("dog", "monkey"));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

//
//
//
//
//
//

// replaceAll()

// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

const pe =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(pe.replaceAll("dog", "monkey"));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex1 = /Dog/gi;
console.log(pe.replaceAll(regex1, "ferret"));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
