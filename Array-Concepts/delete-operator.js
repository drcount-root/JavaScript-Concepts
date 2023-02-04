// Deleting array elements

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false

console.log(trees);
// [ 'redwood', 'bay', 'cedar', <1 empty item>, 'maple' ]

//
//

// for sparse array

const treess = ["redwood", "bay", "cedar", "oak", "maple"];
treess[3] = undefined;
console.log(3 in treess); // true
console.log(treess);
// [ 'redwood', 'bay', 'cedar', undefined, 'maple' ]