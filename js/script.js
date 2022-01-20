console.log('JS OK!');
/*
TRACCIA:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
Consigli del giorno
- Scriviamo sempre prima in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta e verifichiamo (console.log), se funziona allora andiamo avanti.
*/
// # RECUPERO GLI ELEMENTI IN PAGINA
const display = document.getElementById("display");


// # CREO UN OGGETTO CON PROPRIETA'
const studente = {
    nome: 'Laura', cognome: 'Bigoni', eta: 29,
};
console.log(studente);
console.table(studente);


// # STAMPO A SCHERMO LE PROPRIETA'
// for (let key in studente) {
//     console.log(`${key}: ${studente[key]}`)
// }
let content = '';
for (let key in studente) {
    content +=`<div><strong>${key}</strong></div>${studente[key]}`
}

display.innerHTML = content;


// # CREO UN ARRAY DI STUDENTI
const classe = [
    { nome: 'Salvatore', cognome: 'Pitanza', eta: 30 },
    { nome: 'Matteo', cognome: 'Imbimbo', eta: 25 },
    { nome: 'Linda', cognome: 'Bettini', eta: 22 },
    { nome: 'Nicolas', cognome: 'Maranzano', eta: 26 },
];
classe.push(studente);
console.table(classe);


// # PROMPT PER AGGIUNGERE DATI ALL'ARRAY
let nomeUtente = prompt('Inserisci un nome').trim();
let cognomeUtente = prompt('inserisci un cognome').trim();
let etaUtente = parseInt(prompt("Inserisci l'età"));

nuovoStudente = nomeUtente + cognomeUtente + etaUtente;
classe.push({ "nome": nomeUtente, "cognome": cognomeUtente, "eta": etaUtente });
console.log(classe);
console.table(classe);


// # CICLO GLI STUDENTI E NE STAMPO LE PROPRIETA'
for (let i = 0; i < classe.length; i++) {
    const studente = classe[i];
    console.log(studente.nome, studente.cognome);
}


// # STAMPO IN PAGINA
