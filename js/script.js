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
// # Recupero elementi in pagina

// # Creo un oggetto con proprietà
const studente = {
    nome: 'Laura',
    cognome: ' Bigoni',
    eta:  29,
};
console.log(studente);
console.table(studente);

// # Stampo a schermo le proprietà
const myArray = Object.values(studente);
document.getElementById("display").innerHTML = `<h3>Lista studenti:</h3><br> ${myArray}`;