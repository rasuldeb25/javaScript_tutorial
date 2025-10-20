//Asyn/Await = Async makesa function return a promise
//              Await make a async function wait for a promise

//              Allows you to write a async code in a sync manner
//              Everything after Await is placed in an even queue

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
        const kitchenCleaned = false;
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
            const trashTaken = true;
            if(trashTaken){
            resolve("You take out the trash 🗑️");
            }
            else{
                reject("You did not take the trash out")
            }

    }, 500);
    });
}
async function doChores() {
    try{
    const walkDogResult = await walkDog();
        console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult); 

    const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores")
    }
    catch(error){
        console.error(error);
    }
}
doChores()