//Logical operators = used to combine or manipulate boolean values (true/false)

// AND = && if 2 contidions are true
// OR = || at least one condition needs to be ture
// NOT = ! changes boolean to oppoiste

const temp = -300 ;
/*
if(temp > 0 && temp <=30){
    console.log("The weather is above 0 degrees");
}
else{
    console.log("The weather is not good");
}


if(temp <= 0 ||  temp >30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}
    */

const isSunny = false;
if(!isSunny){
    console.log("It is Cloudy outisde");
}
else{
    console.log("It is Sunny outside");
}