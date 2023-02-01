// at method

// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lastElem = movements.at(-1);

console.log(lastElem);
// 1300

//

const thirdElem = movements.at(2);

console.log(thirdElem);
// -400

//
//

const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};

console.log(Array.prototype.at.call(arrayLike, -1)); 
// "b"