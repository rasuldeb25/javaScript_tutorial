//string methods = allow you to manipulate and work with text (string)

let userName =  "Rick";

//console.log(userName.charAt(0));
//console.log(userName.indexOf("i"));
//console.log(userName.length);
/*
userName =userName.trim();
console.log(userName);

userName =userName.toUpperCase();
console.log(userName); 

userName =userName.repeat(3);
console.log(userName);

let result = userName.startsWith(" ")
    if(result){
        console.log("Your username cannot be begin with emty space");
    }
    else{
        console.log(userName);  
    }

console.log(result);

  let result = userName.includes(" ")  
      if(result){
        console.log("Your username cannot include with emty space");
    }
    else{
        console.log(userName);
    }


    let phoneNumber = "123-345-567";
    phoneNumber = phoneNumber.replaceAll("-", "");
    console.log(phoneNumber);   
*/
    let phoneNumber = "123-345-567";
    phoneNumber = phoneNumber.padStart (15,"0");
    console.log(phoneNumber); 