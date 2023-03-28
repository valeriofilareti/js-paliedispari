/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// const arr = ['a', 'b', 'c']
// const arrReverse = arr.reverse()

// console.log(arrReverse);



// const reversedWord = reverseWord('ciao')

// console.log(reversedWord);
// function reverse(word){
  //   const arrWord = word.split('');
  //   const revWord = arrWord.reverse()
  //   if(arrWord === revWord){
    
    //   }
    // }

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


