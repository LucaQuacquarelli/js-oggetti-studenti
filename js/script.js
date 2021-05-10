// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var student = {
    name: "Luca",
    surname: "Quacquarelli",
    age: 21
}
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in student) {
    console.log(key);
    console.log(student[key]);
}
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.