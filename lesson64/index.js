//classLists = Element property in JS used to interact 
//              with an element`s list of classes (css classes)
//              allows you to make a reusable classes for many elements
//              across your web page

/*
0.
 const myH1 = document.getElementById("myH1");
 const myButton = document.getElementById("myButton");
 
 //myButton.classList.add("hover");
 //myButton.classList.remove("enabled");
 1.
myButton.addEventListener("mouseover", event =>{
    event.target.classList.add("hover");
});
2. 
myButton.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover");
});
4.
myButton.classList.add("enabled");
myButton.addEventListener("click", event =>{
    event.target.classList.replace("enabled", "disabled");
})
5.
myH1.classList.add("enabled");
myButton.classList.add("enabled");
myH1.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "⭐";
    }
    else{
          event.target.classList.replace("enabled", "disabled");
    }
  
})

myButton.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "⭐";
    }
    else{
          event.target.classList.replace("enabled", "disabled");
    }
  
})
*/ 
let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button => {
    button.classList.add("enabled");
});
buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🔥";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
        
    });
});
