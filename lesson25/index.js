//spread operator = ... allows iterable such as
//                  array or string to be expanded
//                  into seperate elements
//                  (unpack the elements)

/*
let numbers  = [1,2,3,4,5,6,7,8,9];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers)
console.log(minimum);
*/
/*
let username = "Rick";
let letters = [...username].join("-");

console.log(letters);
*/
let fruits = ["apple", "banana", "orange", "coconut"];
let vegatables = ["carrot", "celery", "potatos"];

let foods = [...fruits, ...vegatables, "milk", "rice"];
console.log(foods);