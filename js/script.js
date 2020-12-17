// Script che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"


for (var i = 1; i <= 100; i++) {

    if(i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else if(i % 3 == 0){
        console.log('fizz');
    } else { 
        console.log(i);
    }
}
