/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userNum = 3; //prompt('scegli un numero da 1 a 5')
const userChoise = 'even' //prompt('scegli pari o dispari')


const pcNum = generateRandomNumber();


const finalResult = parseInt(userNum) + parseInt(pcNum);


const abc = evenOdd(finalResult)
console.log(abc);



function generateRandomNumber () {
  const randomNumber = Math.floor(Math.random()* 5) + 1;
  return randomNumber;
}

function evenOdd(final) {
  let result;
  if(final % 2 === 0){
    const result = 'odd';
  }else{
    const result = 'even'
  }
  return  result;
}
