 // variable scope = where a variable is recognized
 //                 and accesible (locally&globally)
 //functions are kinda neighboring houses, one function has no idea what the other function has inside


/*local scope
 function2 ();
  function function1(){
    let x = 1;
    console.log(x);
  }
  function function2(){
    let x = 2;
    console.log(x);
  }
*/
/*global scope
let x = 3;
function2();
  function function1(){
    console.log(x);
  }
  function function2(){
    console.log(x);
  } 
*/ 
//IF WE HAVE 2 VARIABLES IN THE SAME NAME, WE USE LOCAL ONE FIRST
let x = 3;
function1  ();
  function function1(){
    let x = 1;
    console.log(x);
  }
  function function2(){
    let x = 2;
    console.log(x);
  }