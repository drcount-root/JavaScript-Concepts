  /////////////////////     DEEP COPY     /////////////////////

// A deep copy of an object is a copy whose properties/keys do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.



let ingredients_list_d = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list_d));

// Change the value of the 'list' property in ingredients_list_deepcopy.

ingredients_list_deepcopy[1].list = ["rice flour", "water"];

// The 'list' property does not change in ingredients_list.

console.log(ingredients_list_d[1].list);

// Array(3) [ "eggs", "flour", "water" ]



// As can be seen from the code above, because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.




 ///////////////////////   Shallow Copy   ///////////////////////


// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don't expect.



let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);

console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]


ingredients_list_copy[1].list = ["rice flour", "water"];

console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]

console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]


ingredients_list_copy[0] = "rice noodles";
console.log(ingredients_list[0]);
// noodles

console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]

console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]



// Deep Copy: don't share same ref of properties as original

// Shallow Copy: shares same ref of properties as original