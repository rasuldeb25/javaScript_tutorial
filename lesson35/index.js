//arrow functions = a concise way to write function expression
//                  good for simple functions that you use only once
//                  (parametres) => some code

/*
const hello = (name, age) => {console.log(`Hello ${name}!`);
                        console.log(`You are ${age} years old`)
}
hello("Rick", 23 );
*/

//setTimeout(function (){console.log("Hello");},3000);
//setTimeout(() => console.log("Hello!"), 3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element, 2) );
const cubes = numbers.map((element) => Math.pow(element, 3) );
const evenNum = numbers.filter((element) => element %2 ===0);
const oddNum = numbers.filter((element) => element %2 !==0);
const total = numbers.reduce((accumulator, element) => accumulator+element )


console.log(total);
