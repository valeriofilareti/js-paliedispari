/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userNumber = 3; //prompt('scegli un numero da 1 a 5')
const userChoise = 'even' //prompt('scegli pari o dispari')


let pcNum = generateRandomNumber();
console.log(pcNum);


function generateRandomNumber () {
  let randomNumber = Math.floor(Math.random()* 5) + 1;
  return randomNumber;
}