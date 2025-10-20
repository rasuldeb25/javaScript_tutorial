//closure = a function defined inside of another function
//          the inner function has acces to the variables
//          and the scope of the outer function
//          allow for private variables and state maintanance
//          Used frequently in JS framework: React, Vue, Angular

/*
function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
outer();
*/

/*

function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Counter increased to ${count}`);
    }
    function getCount(){
        return count;
    }

   return{increment, getCount};
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.increment(); 

console.log(`The current counter is ${counter.getCount()}`);
*/


function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(4);
game.increaseScore(1);
game.decreaseScore(2);
console.log(`The final score is ${game.getScore()}pts`);