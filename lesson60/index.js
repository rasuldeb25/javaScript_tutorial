//eventlistener = listen for specific even to create a interactive webpage
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback);
const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");
/*
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😐"
}

myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😐"
});
*/
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😐"
});
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Check-in 🙃"
})
myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "violet";
    event.target.textContent = "Check-out🙄"
})