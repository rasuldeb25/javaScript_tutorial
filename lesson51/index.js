//setTimeOut() = a function in JS that allows you to schedule
//              an exacution of a function after a amount of a time (millisecons)
//              times are approximate (varies based on the workload of the JS runtime env)
//              setTimeOut(callback,delay);

/*
function sayHello(){
    window.alert("Hello");
}
 setTimeout(sayHello,3000);
 */

 //setTimeout(function(){window.alert("Hello")}, 3000);

 //setTimeout(() => window.alert("Hello"), 3000);

//const timeOutId = setTimeout(() => window.alert("Hello"),3000);

let timeOutId;

function strartTimer() {
    timeOutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("TIMER STARTED");
}

function clearTimer() {
    clearTimeout(timeOutId);
    console.log("TIMER CLEARED");
}