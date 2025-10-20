//Addind and changing HTML elements 
/*
const newH1 = document.createElement("h1");

newH1.textContent = "I live plov";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
*/

//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box3").append(newH1);
//document.getElementById("box1").prepend(newH1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);
//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[4]);

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"
//document.body.prepend(newListItem);
//document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);
//const orange = document.getElementById("orange");
//document.getElementById("fruits").insertBefore(newListItem,orange);
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[0]);