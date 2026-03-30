//Exo1

function verifierPrix(prix){
    if(prix < 10){
        console.log('Prix bas');
    } else {
        console.log('Prix élevé');
    }
}

//Exo2

function analyseProduit(prix, vendeurFiable){
    if(vendeurFiable === false){
        console.log('Vendeur douteux.');
    } else if(prix > 100){
        console.log('Prix élevé.');
    } else {
        console.log('Produit Correct.');
    }
}

//Exo3

let prix = 9.99;
let vendeur = true;


function scoreFiabilite(prixObjet, fiabilite) {
    let result;
    if(fiabilite === true){
        result = 'Produit Fiable';
    } else {
        result = 'Produit a risque';
    }
    console.log(`L'objet coute : ${prixObjet} et est un ${result}`);
}

scoreFiabilite(prix, vendeur);

