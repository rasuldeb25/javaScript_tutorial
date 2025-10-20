//Nodelist = static collection of HTML elements (id class element)
//          can be created by using querySelectionAll()
//          similar to an Array but no (map filter reduce)
//          Nodelist wont update automatically to reflect changes

let buttons = document.querySelectorAll(".myBtns");
/*
1. 
console.log(buttons);
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "⭐";
});
2.
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.background = "tomato";
    });
});
3.
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});
4.
const newBtn = document.createElement("button");
newBtn.textContent = "Button 5";
newBtn.classList = "myBtns";
document.body.appendChild(newBtn);
*/

buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelector(".myBtns");
        console.log(buttons);
    });
});