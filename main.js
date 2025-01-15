// start code

// esercizio palindromi

// workflow

// 1. chiedere all'utene una parola
// 2. nuova var con parola invertita ( per controllo successivo)
//      - trasformare input utente in array
//      - inversione
//      - trasformare in stringa
// 3. controllo se la parola è palindroma
//      - se parola utente = parola invertita: la parola è palindroma
//      - altrimenti: non è palindroma 

function isPalindromo (p1, p2) {
    if (p1 == p2) {
        console.log("La parola è palindroma")
    } else {
        console.log("La parola NON è palindroma")
    }
}

let parolaUtente = prompt("Inserisci una parola qualsiasi", "osso");
console.log(`la parola inserita è: ${parolaUtente}`)

let parolaInvertita = parolaUtente.split("").reverse().join("");
console.log(`la parola invertita diventa: ${parolaInvertita}`)

isPalindromo(parolaUtente, parolaInvertita);


// esercizio pari o dispari

// start es. 2

// workflow

// 1. richiedere all'utente "pari" o "dispari" e un numero da 1 a 5
// 2. generiamo per la cpu "pari" o "dispari" e un num da 1 a 5
// 3. somma num utente e num cpu
// 4. controllo se il risultato è pari o dispari
//      - se (pari && utente ha scelto pari) || (dispari && utente ha scelto dispari): utente vince
//      - altrimenti: utente ha perso

let numCpu;
function numRandom (x) {
    x = Math.floor(Math.random() * 5) + 1;

    return x;
}

numCpu = numRandom(numCpu);

let pariDispariUtente = prompt("Scegli pari o dispari", "pari");
let numUtente = parseInt(prompt("Scegli un num da 1 a 5", 3));

console.log(`Pari o dispari? hai scelto: ${pariDispariUtente}`)
console.log(`Il num che hai scelto: ${numUtente}`)

console.log(`La CPU ha scelto: ${numCpu}`)

let sommaNum = numCpu + numUtente;