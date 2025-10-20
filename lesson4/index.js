//How to accept user input
//1. Easy way = window prompt
//2. Professional way = HTML textbox

/*
let username;
username = window.prompt("What is you username?");

document.addEventListener("DOMContentLoaded", function() {
    let username;
    
    document.getElementById("mySubmit").onclick = function() {
        username = document.getElementById("myText").value;
        console.log("Username is: " + username);
    }
});
*/
    let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}