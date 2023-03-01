'use strict';
// const pariDispari = prompt('Scegli "Pari" o "Dispari"');
// if(pariDispari===('Pari')){
//     alert('Hai scelto Pari');
// }
//  else{
//     alert('Hai scelto Dispari');
// }
let random = randomNum();
console.log(random);

let sumTotal = somma();
console.log('Il numero totale è '+ sumTotal)


function randomNum(){
    return Math.floor((Math.random() * 5) + 1);   
}
function somma(num1,num2){
     num1 = random;
     num2 = random;
    const sum = num1 + num2;
    return sum;
}

