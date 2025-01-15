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

let parolaUtente = prompt("Inserisci una parola qualsiasi", "osso");
console.log(`la parola inserita è: ${parolaUtente}`)

let parolaInvertita = parolaUtente.split("").reverse().join("");
console.log(`la parola invertita diventa: ${parolaInvertita}`)

parolaInvertita == parolaUtente ? console.log("La parola è palindroma") : console.log("La parola NON è palindroma");


// esercizio pari o dispari

// start es. 2