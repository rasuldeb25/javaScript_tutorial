//super = keyword used in classes to call the constructor
//        access the properties or methods of the parent class(superclass)
//        this = this object
//        super = the parent

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} moves at the speed of ${speed} km/h`)
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed; 
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabby", 2, 23);
const fish = new Fish("fishhy", 5, 90);
const hawk = new Hawk("Hawky", 1, 190);

rabbit.run();
fish.swim();
hawk.fly();