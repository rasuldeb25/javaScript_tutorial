//synchronous = exacutes line by line consecutively in a sequential manner
//              code that waits for an operation to complete

//asynchronous = allows multiple operations to be performed concurrently without wainting
//              does not block the exacution flow and allows a program to continue
//              i/o operations network requests fetching data
//              handled with: callbacks promises Async/Await

/*
function func1(callback){
    setTimeout(() => {console.log("Task 1");
                     callback()}, 3000);
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);
*/

//Error = an object that is created to represent a problem that occurs 
//        occur ofter with a user input or establishing a connection
//TRY AND CATCH
/*
try{
    console.log(x); 
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always exacutes");
}

console.log("Hello");
console.log("You have reached the end!")
*/

try{
const divident = Number (window.prompt("Enter a divident: "));
const divisor =  Number (window.prompt("Enter a divosor: "));

if(divisor == 0 ){
    throw new Error("You cannot divide by 0");
}
if(isNaN(divident) || isNaN(divisor)){
    throw new Error("Values must be number");
}

const result = divident/divisor;

console.log(result);
}
catch(error){
    console.error(error);
}
console.log("You reached the end");
