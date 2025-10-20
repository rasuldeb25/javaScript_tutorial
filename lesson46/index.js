//working with arrays

const fruits = [{name: "apple", color: "white", calories: "59"},
                {name: "orange", color: "orange", calories: "90"},
                {name: "lemon", color: "yellow", calories: "70"},
                {name: "coconut", color: "brown", calories: "110"},
                {name: "pineapple", color: "yellow", calories: "98"}];
fruits.push({name:"grapes", color:"black",calories:"150"});
//console.log(fruits);

//For each method

fruits.forEach(fruits => console.log(fruits.color));

//Map method
const fruitNames  = fruits.map(fruits => fruits.name);
console.log(fruitNames);

//Filter method

const yellowFruits = fruits.filter(fruits =>fruits.color == "yellow");
const lowCalories = fruits.filter(fruits =>fruits.calories < 100);
const highCalories = fruits.filter(fruits =>fruits.calories > 100);
console.log(yellowFruits);
console.log(lowCalories);
console.log(highCalories);

//Reduce method
const maxFruit = fruits.reduce((max, fruit) => 
    Number(fruit.calories) > Number(max.calories) ? fruit : max
);

console.log(maxFruit);
