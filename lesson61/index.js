//eventListeners = listen to a spesific event to create a interactive web apps
//                  event: keydown, keyup, keypress

const myBox = document.getElementById("myBox");

/*
document.addEventListener("keydown", event => {
    myBox.textContent = "💫"
    myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    myBox.textContent = "⭐";
    myBox.style.backgroundColor = "lightblue";
})
*/
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "💫"
    myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    myBox.textContent = "⭐";
    myBox.style.backgroundColor = "lightblue";
})

document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault(); 
        switch(event.key){
            case "ArrowUp":
            y -=moveAmount;
            break;
        }
        switch(event.key){
            case "ArrowDown":
            y +=moveAmount;
            break;
        }
        switch(event.key){
            case "ArrowLeft":
            x -=moveAmount;
            break;
        }
        switch(event.key){
            case "ArrowRight":
            x +=moveAmount;
            break;
        }
        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
});