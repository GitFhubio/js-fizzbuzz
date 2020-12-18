// Script che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

var listaElement= document.getElementById('lista-fizzbuzz');


for(var x = 1; x <= 100; x++) {

var newHTML= '<li>';


  if(x % 3 === 0 && x % 5 === 0) {
     newHTML+= 'fizzbuzz';
  } else if(x % 3 === 0) {
    newHTML+='buzz';
  } else if(x % 5 === 0) {
    newHTML+='fizz';
  } else {
    newHTML+=x;
  }
listaElement.innerHTML += newHTML + '</li>';
}
