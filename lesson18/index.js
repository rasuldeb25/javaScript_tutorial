// = assignment operators
// == comparasion operators (compares if 2 values are equal)
// == strick equalit operators (compares if values and dataype are equal)
// != inequality operator
// !== srict inequality operator

const PI = 3.14;
/*
if(PI == "3.14"){
    console.log("That is PI!");
}
else{
    console.log("That is not PI");
}

if(PI != "3.14"){
    console.log("That is not PI!");
}
else{
    console.log("That is PI");
}
    */

//while loop = repeats same condition until given condition is true
/*
let username = "";
while(username === "" || username === null){
    username = window.prompt("Enter your name");
} 
console.log(`Hello ${username}`);


let username;
do{
    username = window.prompt("Enter your name");
} 
while(username === "" || username === null);

console.log(`Hello ${username}`);
*/

    let loggedIn = false;
    let username;
    let password;
/*
    while(!loggedIn){
        username = window.prompt("Enter your username: ");
        password = window.prompt("Enter your password: ");
        if(username === "myUserName" && password === "myPassword"){
                loggedIn = true;
                console.log("You are logged in.");
        }
        else{
            console.log("Invalid crediantials, tyr agan.");
        }
    } 
*/

    do{
        username = window.prompt("Enter your username: ");
        password = window.prompt("Enter your password: ");
        if(username === "myUserName" && password === "myPassword"){
                loggedIn = true;
                console.log("You are logged in.");
        }
        else{
            console.log("Invalid crediantials, tyr agan.");
        }
    }while(!loggedIn)