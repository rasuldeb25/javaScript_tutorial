// sort() = method that is used to sort elements of the array in place
//          sorts elements as a strings in a lexicographic order, not alphabetical
//          lexiographic = (alphabet + + numbers + symbols) as a strings

/*
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1,10,2,6,7,8,5,4,3,9];
 numbers.sort((a,b) => a-b);
 console.log(numbers); 
 */

const people = [{name: "Spongeee", age: 30, gpa: 3.2},
                {name: "Patrrr", age: 24, gpa: 3.8},
                {name: "hella", age: 14, gpa: 5},
                {name: "Snaa", age: 27, gpa: 4.4}]
//people.sort((a,b) => a.gpa - b.gpa);
people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);