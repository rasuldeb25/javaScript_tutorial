//function  = A section of reusable code
//          declare the code once and use it whenever you want
//          call the fuction to exacute that code

/*
    function happyBirthday(username, age){
        console.log("Happy birthday to you!");
        console.log(`Happy birthday dear ${username}`);
        console.log(`You are ${age} years old`);
    }

    happyBirthday("Rick", 23);
    happyBirthday("Marr", 23);
*/
function add (x, y){
    return x + y;
}
function subtract(x,y){
    return x - y; 
} 
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true:false; 
    }
function isValidEmail(email){
    /*
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    */
   return email.includes("@") ? true:false;
    }

console.log(isValidEmail("fake@Mail.com")); 