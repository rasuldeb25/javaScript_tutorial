//this =  refrence to the where THIS is used
//        (the object depends on the immediate contex)
//          person.name = this.name


 const person1 = {
    name: "Spongebob",
    facFoood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am a ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.facFoood}`)}
 }
  const person2 = {
    name: "Patty",
    facFoood: "pziia",
    sayHello: function(){console.log(`Hi! I am a ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.facFoood}`)}
 }
 person1.eat();
 person2.eat();
