// The join() method creates and returns a new string by concatenating all of the elements in an array.
// If the array has only one item, then that item will be returned without using the separator.

// join()
// join(separator)

// A string with all array elements joined. If arr.length is 0, the empty string is returned.

const arr = ["a", "b", "c", "d", "e", "f", "g"];

const joinedArr = arr.join(" - ");

console.log(joinedArr);
// "a - b - c - d - e - f - g"

const joinedArr2 = arr.join("");

console.log(joinedArr2);
// "abcdefg"

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

//
//
//

console.log(parseInt([1, 2, 3].join("")) - 3);
// 120

console.log(+[1, 2, 3].join("") - 3);
// 120