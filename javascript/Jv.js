
// Funzione inserisci nome
function nameUser() {

    // Variabile per il controllo dei valori inseriti
    var alphaExp = /^[a-zA-Z]+$/;

    // Variabile che acquisisce i dati di input dall'utente
    var nomeUser=prompt("inserisci il tuo nome.","");

    // Controllo se è stato inserito qualcosa
    if (nomeUser==null || nomeUser=="")
    {
        alert("Inserire il nome");
        location.reload(true);
    }

    // Controllo se è non sono stati inseriti caratteri strani o numeri
    else if (!nomeUser.match(alphaExp))
    {
        alert("IL nome deve contenere solo lettere")
        location.reload(false);
    }

    // Chiamo funzione "cognome" alla quale ci aggiungo la variabile nomeUser
    var result = nomeUser + surnameUser();
 
    // Risultato FINALE restituito
    return result;

}

// Funzione inserisci cognome
function surnameUser() {

    // Variabile per il controllo dei valori inseriti
    var alphaExp = /^[a-zA-Z]+$/;

    // Variabile che acquisisce i dati di input dall'utente
    var cognomeUser=prompt("inserisci il tuo cognome.","");

    // Controllo se è stato inserito qualcosa
    if (cognomeUser==null || cognomeUser=="")
    {
        alert("Inserire il cognome");
        location.reload(true);
    }
    // Controllo se è non sono stati inseriti caratteri strani o numeri
    else if (!cognomeUser.match(alphaExp))
    {
        alert("IL cognome deve contenere solo lettere")
        location.reload(false);
    }

    // Chiamo funzione "colore" alla quale ci aggiungo la variabile cognomeUser
    var result = cognomeUser + choseColor();

    // risultato restituito alla funzione nome utente
    return result 
}


// Funzione inserisci colore
function choseColor() {

    // Variabile per il controllo dei valori inseriti
    var alphaExp = /^[a-zA-Z]+$/;

    // Variabile che acquisisce i dati di input dall'utente
    var ColorUser=prompt("Quale è il tuo colore preferito?","");

    // Controllo se è stato inserito qualcosa
    if (ColorUser==null || ColorUser=="")
    {
        alert("Digita il colore");
        location.reload(true);
    }
    // Controllo se è non sono stati inseriti caratteri strani o numeri
    else if (!ColorUser.match(alphaExp))
    {
        alert("La frase non deve contenere numeri o caratteri strani")
        location.reload(false);
    }
    
    // risultato restituito
    return ColorUser;
  
}


// comunico il risultato alla mia pagina html
document.getElementById("risultato").innerHTML = "La tu password sarà: " +nameUser() +"23";