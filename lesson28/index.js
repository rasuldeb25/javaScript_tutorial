// Random password generator program

function generatePassword(lenght, incldudeSymbols, includeLowerCase, includeNumbers, includeUpperCase){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+}{:>?:<>~`-=/*\\-";

    let allowedChars = "";
    let passoword = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += incldudeSymbols ? symbolChars : "";

    if(lenght <= 0){
        return `(Password lenght must be at least 1)`;
    }  
    if(allowedChars.length === 0){
        return `(At least one character must be selected)`;
    }
    
    for(i = 0;  i < lenght; i++){
        const randomIndex =  Math.floor(Math.random() * allowedChars.length);
        passoword += allowedChars[randomIndex];
    }

    return passoword;
}

const passwordLenght = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const incldudeSymbols = true;

const password = generatePassword(
    passwordLenght,
    incldudeSymbols,
    includeLowerCase,
    includeNumbers,
    includeUpperCase
);

console.log(`Generated password: ${password}`);
