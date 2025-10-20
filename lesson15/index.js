//Method chaining in  = calling one method after another in one contiunues line of code


let userName =  window.prompt("Enter your username: ");

//Method chaining
/*
let userName =  window.prompt("Enter your username: ");
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toLocaleUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();  

userName = letter + extraChars;
console.log(userName); 
 */
//No method chaining
userName = userName.trim().charAt(0).toUpperCase() +  userName.trim().slice(1).toLocaleLowerCase();
console.log(userName);  