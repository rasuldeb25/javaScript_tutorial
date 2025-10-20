//If statements = if a condition is true then exacute some code
//                if not do something else

    /*
    let age =25;
        if(age>=18){
                console.log("Your are old enough to enter this website!");
        }
        else{
                console.log("Your are not old enough to enter this website!");
        }

    let time = 9;
    if(time<12){
        console.log("Good Morning");
    }
    else{
        console.log("Good afternoon");
    }

    let isStudent = false;
    if(isStudent){
        console.log("You are a student");
    }
    else{
        console.log("You are not a student");
    }
        */
       const myText = document.getElementById("myText");
       const mySubmit = document.getElementById("mySubmit");
       const resultElement = document.getElementById("resultElement");
       let age;

       mySubmit.onclick = function(){
        age = myText.value;
        age = Number(age);
            if (age>=100){
                resultElement.textContent = `You are too old to enter to this site`;
            }
            else if(age ==0){
                resultElement.textContent = `You cannot enter you were just born`;
            }
            else if(age>=18){
                resultElement.textContent = `You are old enough to enter to this site`;
            }
            else if (age<0){
                resultElement.textContent = `Your age cannot be negative`;
            }

            else{
                resultElement.textContent = `You are not old enough to enter this site`;
            }
       }
       /*
       let hasLicense = false;
        if(age>=16){
            console.log("You are old enought to drive");
            if(hasLicense){
                console.log("You have your license");
            }
            else{
                console.log("You do not have a license");
            }
        }
        else{
            console.log("You are not old enough to drive");
        }
        */
