/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


const userWord = prompt('parola')

const reversedWord = rev(userWord)


if(reversedWord === userWord){
  console.log('pal');
}else{
  console.log('nopal');
}

function rev (word) {

  const arrWord = word.split('');
  
  const arrRev = arrWord.reverse();
  
  const revWord = arrRev.join('');

  return revWord
  
}


