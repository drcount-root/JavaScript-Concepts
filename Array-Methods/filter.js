// The filter method
// returns a new array, which have filtered elements based on the callback funcction

// filter(function (item, index, array) { /* … */ }, thisArg)

// filter((item, index, array) => { /* … */ })

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const result = movements.filter((item) => item > 500);

console.log(result);
// [ 3000, 1300 ]

//
//
//

const filteredElems = movements.filter((item, _, arr) => item !== arr.at(2));

console.log(filteredElems);
// [ 200,  450, 3000, -650, -130, 70, 1300 ]
