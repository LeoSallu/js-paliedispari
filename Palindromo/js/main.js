'use strict';
// Console input utente 
const userInput= prompt('Inserisci una parola');
console.log(userInput);
// Console Word Palindroma
const wordPal= wordReverse(userInput);
console.log(wordPal);
// If
 if (userInput===wordPal){
    alert('La tua parola è Palindroma');
 }
 else{
    alert('La tua parola non è Palindroma');
 };
// FUNZIONE PAROLA ROVESCIATA 
function wordReverse(word){
    let reverseWord = '';
    for (let i=word.length-1; i>=0; i--){
        reverseWord += word[i];
    }
    return reverseWord;
}
