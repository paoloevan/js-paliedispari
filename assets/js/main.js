/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
(usando una funzione). Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari
(usando una funzione) Dichiariamo chi ha vinto.
*/

/* PALINDROMA */

//inserire la parola
const userWord = prompt('inserisci una parola');

palindroma (userWord);


//creo la funzione
function palindroma(Word) {

    //trasformo la parola in array
    const userWordArray = userWord.split("");
    // console.log(userWordArray);

    //trasformo array in stringa
    const myString = userWordArray.toString();
    // console.log(myString);

    //inverto array
    const userWordArrayReverse = userWordArray.reverse();
    // console.log(userWordArrayReverse);

    //trasformo array in stringa
    const myStringReverse = userWordArrayReverse.toString();
    // console.log(myStringReverse);

    //confronto le parole e vedo se sono uguali
    if (myString == myStringReverse) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }
}