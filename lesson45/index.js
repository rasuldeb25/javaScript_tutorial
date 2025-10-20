//nested objects = objects inside of other objects
//                  allows you to represent more complex data structures
//                  child object is enclosed by a parent object

//                  Person{adress{}, contacInfo{},}
//                  Shopping Cart {Keybord{}, Monitor{}, Mouse{}} 


/*
const person = {
    fullName: "Spongeebob, Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate","Jellyfishing","Cooking",],
    address: {
        street: "124 Conch st",
        city: "Bikini buttom",
        country: "Int.Waters"
    }
}
for(const property in person.address){
     console.log(person.address[property]);
}


console.log(person.fullName);
console.log(person.age);\
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.adress.country);
*/
class Person{
    constructor(name, age, ...adress){
        this.name = name;
        this.age = age;
        this.adress = new Adress(...adress);
    }
}


class Adress{
    constructor(street, city, country){
     this.street = street;
     this.city = city;
     this.country = country;
    }
}
const person1 = new Person("Spongebob",44,
                           "124 counch st",
                           "Bikidi botom",
                           "it Sea" );
const person2 = new Person("Parr",24, 
                           "14 hell st",
                           "Aliki botom",
                           "aat Sea" );
const person3 = new Person("Hanny",32,
                           "12 heaven st",
                           "Bottle botom",
                           "tr Sea" );

console.log(person1.adress.street);
