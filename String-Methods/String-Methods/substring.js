// The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// substring(indexStart)
// substring(indexStart, indexEnd)

// Return value

// A new string containing the specified part of the given string.

const anyString = "Mozilla";

console.log(anyString.substring(3)); // 'illa'

console.log(anyString.substring(0, 1)); // 'M'
console.log(anyString.substring(1, 0)); // 'M'

console.log(anyString.substring(0, 6)); // 'Mozill'

console.log(anyString.substring(4)); // 'lla'
console.log(anyString.substring(4, 7)); // 'lla'
console.log(anyString.substring(7, 4)); // 'lla'

console.log(anyString.substring(0, 7)); // 'Mozilla'
console.log(anyString.substring(0, 10)); // 'Mozilla'

console.log(anyString.substring(-1, 1)); // 'M'

console.log(anyString.substring(1, -1)); // 'M'

console.log(anyString.substring(-1)); // 'Mozilla'
