function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if(dogWalked){
                resolve('You walk the dog 🐶');
            }else{
                reject('You did not walk dogg')
            }
        }, 1500);
    })

}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if(cleanKitchen){
                resolve('You cleaned the kitchen 🧹');
            }else{
                reject('You did not clean kitchen')
            }
        }, 2500);
    })

}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const takeTrashOutside = true;
            if(takeTrashOutside){
                resolve('You taked out the trash 🗑️');
            }else{
                reject('You did not take trash outside')
            }
        }, 500);
    })

}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log('Nice')})
         .catch(error => console.error(error))
