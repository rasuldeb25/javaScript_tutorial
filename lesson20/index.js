//Number guessing game

const minNum = 0;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number betwee ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a number!");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert(`Enter the number between ${minNum} - ${maxNum}`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low try again");
        }
        else if(guess > answer){
            window.alert("Too high try again");
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts `)
            running = false
        }

    }
    
}