

const email = ["gerry@hotmail.it", "luca@hotmail.it", "giovanni@hotmail.it", "mimmo@hotmail.it", "miriana@hotmail.it"];

console.log("Mostro le email memorizzate nell'array: " + email);

let emailInserita = prompt ("Inserire l'email di iscrizione:")
console.log("Mostro l'email inserita dall'utente" + emailInserita) 
document.getElementById("email-inserita").innerHTML = emailInserita;


let emailVerifica;
emailVerifica = "L'email non è presente nel database";
for ( i = 0; i < email.length; i++) {
    emailDaVerificare = email[i];
    console.log(emailDaVerificare)
    if (emailInserita == emailDaVerificare){
        emailVerifica = "L'email è presente nel database";
    }
}
console.log(emailVerifica)
document.getElementById ("email-verifica").innerHTML = emailVerifica;


const dado = 6;

let dadoGiocatore = parseInt((dado * Math.random()) + 1 )
console.log("Il numero casuale del  giocatore è: " + dadoGiocatore)
document.getElementById ("dado-giocatore").innerHTML = "Il numero casuale del  giocatore è: " + dadoGiocatore;



let dadoComputer = parseInt((dado * Math.random()) + 1 )
console.log("Il numero casuale del Computer è: " + dadoComputer)
document.getElementById ("dado-computer").innerHTML = "Il numero casuale del Computer è: " + dadoComputer;


let vincitore;

if ( dadoGiocatore > dadoComputer) {
    console.log("Il vincitore sei tu!")
    vincitore = "Il vincitore sei tu!";
} else if ( dadoGiocatore < dadoComputer ) {
    console.log("Il vincitore è il computer!")
    vincitore = "Il vincitore è il computer!";
} else {
    console.log("Avete pareggiato!")
    vincitore = "Avete pareggiato!";
}

document.getElementById ("vincitore").innerHTML = vincitore;