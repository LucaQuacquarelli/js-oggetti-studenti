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
var studentList = [

    {
        name: "Marzia",
        surname: "Mela",
        age: 21 
    },

    {
        name: "Vera",
        surname: "Pagnotta",
        age: 21 
    },

    {
        name: "Chiara",
        surname: "Bevilacqua",
        age: 21 
    },

    {
        name: "Alfredo",
        surname: "Dal Caldo",
        age: 21 
    }
]
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studentList.length; i++) {
    
    var studentSurname = studentList[i];
    console.log("Cognome studente: ", studentSurname.surname);
    
    var studentName = studentList[i];
    console.log("Nome studente: ", studentName.name);
 
}
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
do {
    var yourName = prompt("Inserisci il tuo Nome");
} while (!isNaN(yourName));

do {
    var yourSurname = prompt("Inserisci il tuo Cognome");
} while (!isNaN(yourSurname));

do {
    var yourAge = parseInt(prompt("Inserisci la tua età"));
} while (isNaN(yourAge));

var newStudent = {
    name: yourName,
    surname: yourSurname,
    age: yourAge
}
studentList.push(newStudent);
console.log(studentList);
