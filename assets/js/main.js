/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//inserire la parola
const userWord = prompt('inserisci una parola');

palindroma(userWord);


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

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
(usando una funzione). 
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari
(usando una funzione)
Dichiariamo chi ha vinto.
*/

//utente sceglie pari o dispari
const pariDispari = prompt('Pari o dispari?');

//utente inserisce il numero
const userNumber = Number(prompt('Inserisci un numero da 1 a 5'));

//genero numero per pc con funzione
function randomNumber() {
    const number = Math.floor(Math.random() * 5) + 1;

    return number
}
const pcNumber = randomNumber();
console.log('pc number', pcNumber);

//sommo i due numeri
const numberSum = userNumber + pcNumber;

//funzione per pari o dispari
function resultNumber(numOne) {
    //stabilisco se somma è pari o dispari
    if (numOne % 2 == 0) {
        return 'pari'
    }
    return 'dispari'
}

// invoco la funzione
const gameResult = resultNumber(numberSum)
//console.log(gameResult);

if (pariDispari == gameResult) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso :(');
}