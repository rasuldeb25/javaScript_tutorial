//destructuring = extract values from arrays and objects
//                then assign them into variables in a convinent way
//                [] = perform array destructuring
//                {} = perform object destructuring 


//Example 1 <SWAPING THE VALUE OF  TWO VARIBLES>
/*
let a =1;
let b =2;
[a,b] = [b,a ];
console.log(a);
console.log(b);
Example 2 <SWAPING THE ELEMENTS IN AN ARRAY>
const colors = ["red","green","blue","purpole","black","white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);
*/
//Example 3 <ASSIGN ARRAY ELEMENTS TO VARIABLES>
/*
const colors = ["red","green","blue","purpole","black","white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/
//Example 4 <EXTRACT VALUES FROM OBJECTS>
/*
const person1 =  {
    firstName: "Gani",
    lastName:  "Affaa",
    age: "30",
    job: "Jobjob",

}
const person2 =  {
    firstName: "Patti",
    lastName:  "Starra",
    age: "21",
   
}
const {firstName,lastName,age,job = "unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/
//Example 5 <DESTRUCTURE IN FUNCTION PARAMETRES>

function displayPerson({firstName,lastName,age,job = "Unemployed"}){
console.log(`name: ${firstName} ${lastName}`);
console.log(`age: ${age}`);
console.log(`job: ${job}`);
}
const person1 =  {
    firstName: "Gani",
    lastName:  "Affaa",
    age: "30",
    job: "Jobjob",

}
const person2 =  {
    firstName: "Patti",
    lastName:  "Starra",
    age: "21",
   
}
displayPerson(person1);