//static =  a keyword that defines properties or  methods that belong 
//          to a class itself rather than a obejects created
//          from that class (class owns anything static, not the object)

/*
class MathUtil{
    static PI = 3.142559;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius; 
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(12));
console.log(MathUtil.getCircumference(12));
console.log(MathUtil.getArea(12));
*/
class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`They are ${User.userCount} user online`);
    }
    sayHello(){
        console.log(`Hello! My user name is ${this.username}`);
    }
}
const user1 = new User("Spongebob");
const user2 = new User("Patty");

user1.sayHello();
console.log(user2.username);
console.log(User.userCount);

User.getUserCount();