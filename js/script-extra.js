// Script che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

// prima l'eccezione

var listaElement= document.getElementById('lista-fizzbuzz');
var newHTML;

for(var x = 1; x <= 100; x++) {

  newHTML= '<li>';

  if(x % 3 !== 0 && x % 5 !== 0) {
      newHTML+=x;
    }
    else{
      if(x % 3 === 0) {
      newHTML+='fizz';
    }

  if(x % 5 === 0) {
  newHTML+='buzz';
}
}
  listaElement.innerHTML += newHTML + '</li>';

}
