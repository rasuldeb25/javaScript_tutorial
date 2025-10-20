//array  = a variable like a structure that can hold  more than 1 value

let fruits  = ["apple", "banana", "orange", "coconut"];

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
/*
fruits.shift();
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");
console.log(index);
*/
/*
    for(let i = 0; i< fruits.length; i++){
        console.log(fruits[i]);
    }

 for(let i = fruits.length -1; i >= 0; i--){
        console.log(fruits[i]);
    }
*/
    fruits.sort().reverse(); 
        for (let fruit of fruits){
            console.log(fruit);
    }
