// Inserisco i km da percorrere 

let chilometraggio = prompt("Inserisci i chilometri da percorrere");

chilometraggio = parseInt(chilometraggio);

// Inserisco eta 

let eta = prompt("inserisci la tua età");

eta = parseInt(eta);
// if (isNaN(eta));{
    //     alert("Attenzione non hai inserito un numero");
    // }
    
    
    // Applico prezzo per chilometro
    
    let prezzo = chilometraggio * 0.21
    
// if (isNaN(prezzo)){
//  document.getElementById('mioContenitore').innerHTML = "Impossibile calcolare il prezzo del biglietto, riprova più tardi! " + prezzo + "€";
// }



if (eta < 18) {
    prezzo = ((chilometraggio * 0.21) * 0.8);
    document.getElementById('mioContenitore').innerHTML = "Sconto Junior: Il tuo biglietto costa: " + prezzo + "€";

} else if (eta > 65 ) {
    prezzo = ((chilometraggio * 0.21) * 0.6);
    document.getElementById('mioContenitore').innerHTML = "Sconto Senior: Il tuo biglietto costa: " + prezzo + "€";
} else {
    document.getElementById('mioContenitore').innerHTML = "Il tuo biglietto costa: " + prezzo + "€";
}





