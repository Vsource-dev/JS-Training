// function walkDog(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = false;
//             if(dogWalked){
//                 resolve('You walk the dog 🐶');
//             }else{
//                 reject('You did not walk dog')
//             }
//         }, 1500);
//     })

// }

// function cleanKitchen(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cleanedKitchen = true;
//             if(cleanKitchen){
//                 resolve('You cleaned the kitchen 🧹');
//             }else{
//                 reject('You did not clean kitchen')
//             }
//         }, 2500);
//     })

// }

// function takeOutTrash(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const takeTrashOutside = true;
//             if(takeTrashOutside){
//                 resolve('You taked out the trash 🗑️');
//             }else{
//                 reject('You did not take trash outside')
//             }
//         }, 500);
//     })

// }

// async function doChores(){

//     try{

//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);
    
//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);
    
//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult)
    
//         console.log('Finished All')

//     }catch(error){

//         console.log(error)
        
//     }

// }

// doChores();

const names = `["Spongebob", "Patrick", "Squidward", "Sandy"]`

const person = `{"name": "Spongebob", "age" : 30, "IsEmployed": true,"Hobby": ["Fishing", "Driving", "Talking"]}`

const people = `[{"name": "Spongebob","age" : 30,"IsEmployed": true},
                {"name": "Patrick","age" : 23,"IsEmployed": false},
                {"name": "Squidward","age" : 25,"IsEmployed": true},
                {"name": "Sandy","age" : 29,"IsEmployed": true}]`


fetch("people.json").then(response => response.json())
                    .then(value => value.forEach(val => console.log(val.age)))
                    .catch(error => console.error(error));
