//object = collection of related properties and/or methods
//          can represent real world objects (people, products, places)
//          object = {key : value, function ()}

const person1  = {
    firstName: "Spongebob",
    lastName: "Squarepands",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I`m spongebob")}, 
    eat: function(){console.log("I am eating a Krabby patty")},
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

const person2 = {
    firstName: "Patir",
    lastName: "Starr",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey Patir is here! "),
    eat: () => console.log("I am eating a Chicken and Rice"),
}
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed); 

person1.sayHello();
person2.sayHello();
person1.eat();
person1.eat();