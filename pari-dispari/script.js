/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Scelte utente
const userNum = 3; //prompt('scegli un numero da 1 a 5')
console.log('tuo numero --->',userNum);
const userChoise = 'pari' //prompt('scegli pari o dispari')
console.log('tua scelta --->', userChoise);

// Numero casuale pc
const pcNum = generateRandomNumber();
console.log('numero pc --->',pcNum);

// Somma dei due numeri 
const finalResult = parseInt(userNum) + parseInt(pcNum);
console.log('somma --->',finalResult);

// Risultato finale
const esito = evenOdd(finalResult)

if (esito === userChoise){
  console.log('hai vinto');
} else {
  console.log('hai perso');
}


// Funzioni

function generateRandomNumber () {
  const randomNumber = Math.floor(Math.random()* 5) + 1;
  return randomNumber;
}

function evenOdd(final) {
  let result;
  if(final % 2 == 0){
    result = 'pari';
  }else{
    result = 'dispari'
  }
  return  result;
}
