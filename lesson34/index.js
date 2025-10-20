//function declaration = define a reusable block of code
//                      that performs a specific task
/*
function hello(){
    console.log("Hello");
}
setTimeout(hello, 3000);
*/

//function expressions = a way to define functions as a variable or values

//1. Callbacks in Asynchronous operations
//2. Hugher-order functions
//3. Closures
//4. Event listeners


/*
const hello = function(){
    console.log("Hello");
}
hello();
*/
/*
setTimeout(function() {
    console.log("Hello");
},3000);
*/

const number = [1,2,3,4,5,6];
const squares = number.map(function(element){
    return Math.pow(element,2);
});
const cubes = number.map(function(element){
    return Math.pow(element,3);
})
const evenNum = number.filter(function(element){
    return element %2 === 0;
})
const oddNums = number.filter(function(element){
    return element %2 !== 0;
})

const total = number.reduce(function(accumulator, element){
    return accumulator + element;
})
console.log(total);