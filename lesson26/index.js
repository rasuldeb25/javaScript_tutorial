//rest parametres = (...rest) allow a function to work with a variables
//                  number of arguments by bunding them inro arrya

//                  spreads= expands an array into a seprate elements
//                  rest = bundles seprate elemets into an array


/*
function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "sushi";
const food3 = "roll";
const food4 = "plov";

//openFridge(food1, food2, food3, food4);
const foods = getFood(food1, food2, food3, food4);
console.log(foods);
*/
/*
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result;
}
const total = sum(3,2);
console.log(`Your total is ${total}`);
*/
/*
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result / numbers.length;
}
const total = getAverage(60,90,75);
console.log(total);
*/

function  combineStrings(...strings){
    return strings.join(" ");
}

const fulllname= combineStrings("Mr.", "Spongebob", "Squarepant", "III");
console.log(fulllname); 