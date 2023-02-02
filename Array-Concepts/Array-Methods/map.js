// The map() method returns a new array populated with the results of calling a provided function on every element in the calling array.

// it doesn't mutate the original array

// returns A new array with each element being the result of the callback function.

// map(function (item, index, array) { /* … */ }, thisArg)

// map((item, index, array) => { /* … */ })

// callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movementsUSD);

// [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

//
//
//

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

// [ 'Movement 1: You deposited 200', 'Movement 2: You deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You deposited 70', 'Movement 8: You deposited 1300' ]

//
//
//
//

// A sparse array remains sparse after map(). The indices of empty slots are still empty in the returned array, and the callback function won't be called on them.

console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  })
);

// Visit 0
// Visit 2
// [2, empty, 6]
