//DOM navigation = the process of navigating throught the structure
//                  of an HTML using JS 

/*
1.
const element = document.getElementById("deserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";
2.
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
3.
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";
4.
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
    });
5.
const element = document.getElementById("fruits");
    const nextSibling = element.nextElementSibling;
    nextSibling.style.backgroundColor = "yellow";
6.
const element = document.getElementById("orange");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";
7.
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
8.
const element = document.getElementById("vegatables");
const children = element.children;
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})
    */
const element = document.getElementById("vegatables");
const children = element.children;
children[0].style.backgroundColor = "yellow";