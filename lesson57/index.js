//DOM = Document object model
//      obejct{} that represents the page you see on the web page
//      and provides you with a API to interacts with it
//      web browser constructs DOM when it loads a HTML documents
//      and structures all the elements in a tree like reperesentation
//      JS can access the DOM to dynamically
//      change the content, style and structure of the webpage
/*
const username = "";   
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;
*/

//element selectors = methods used to target and manipulate HTML elements
//                      they allow you to select one or multiple HTML elements  
//                      from DOM (Document object model)

//1.document.getElementById()
//2.document.getElementsClassName()
//3.document.getElementsByTagName()
//4.document.querySelector()
//5.document.querySelectorAll()

/*
1. 
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
2.
const fruits = document.getElementsByClassName("fruits");
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});
3.
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
        h4Element.style.backgroundColor = "yellow";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "green";
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});
4.
const element = document.querySelector("ul");
element.style.backgroundColor = "yellow";
*/
const fruits = document.querySelectorAll("li");
fruits[0].style.backgroundColor = "yellow";