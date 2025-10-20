//String slicing = creating a substring
//                 from the portion of the another string
//                  stirng.slice(start,end)

/*
const fullName = "Rickkyy mrrr"

let firstName = fullName.slice(0,2);
let lastName = fullName.slice(3,6);
let firstChar = fullName.slice(0,1);
let lasrChar = fullName.slice(-1);
console.log(firstChar); 
console.log(lasrChar);


let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName); 
console.log(lastName);

*/

const email = "rasul14@gmail.com";
let userName = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1);
console.log(userName);
console.log(extension);