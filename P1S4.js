//Exo1 

let prixObjects = [3.99, 4.99, 7.99, 12.99, 4.99, 15.99];

function verifierPlusieursPrix(prixEntree){
    for (let i = 0; i < prixEntree.length; i++){
        if(prixEntree[i] < 10){
           console.log('Prix bas.');
        } else {
         console.log('Prix élevé.')
        }
    }
}

verifierPlusieursPrix(prixObjects);

//Exo2


function analyseRepetee(nbAnalyseMax){
    let analyseCompleted = 0;
    while( analyseCompleted < nbAnalyseMax){
        console.log('Analyse en cours.' + '*'.repeat(analyseCompleted+1) );
        analyseCompleted += 1;
    }
}

analyseRepetee(10);

//Exo3

let vendeurObjects = [true, false, true, true, false, true];

function verifierProduit(prix, vendeur){

    for(let i = 0; i < Math.min(prix.length, vendeur.length); i++){
        if(vendeur[i] === true){
         if(prix[i] < 10){
            console.log('Le vendeur est fiable et le prix est bas.');
         } else {
            console.log('Le vendeur est fiable mais le prix est élevé.')
            }
        } else {
        console.log("Le vendeur n'est pas fiable.")
        }

    }
}

verifierProduit(prixObjects, vendeurObjects);