// Promise = An object that manages asynchronous operations
//          wrap  a promise  Obecject around
//          "I promise to return the value"
//          PENDING -> RESOLVED or REJECTED
//          new promise((resolve, reject) => asynch code)

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You did not walk the dog");
            }

        }, 1500);
        });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const kitchenCleaned = true;
        if(kitchenCleaned){
            resolve("You clean the kitchen 🧹");
        }
        else{
            reject("You did not clean the kitechen")
        }
    }, 2500);
});
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {

            setTimeout(() => {
            const trashTaken = false;
            if(trashTaken){
            resolve("You take out the trash 🗑️");
            }
            else{
                reject("You did not take the trash out")
            }

    }, 500);
    });
}
walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeOutTrash()}).then(value =>
    {console.log(value); console.log("You finished all chores")})
    .catch(error => console.error(error)); 