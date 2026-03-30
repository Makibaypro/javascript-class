//Exo1

let prixProduits = [5.99, 12.49, 8.99, 19.99];

console.log(prixProduits[0]);
console.log(prixProduits[prixProduits.length-1]);

//Exo2

let seuil = 10;
let start = 0;

for(let i = start; i < prixProduits.length; i++){
    if(prixProduits[i] < seuil){
        console.log('Prix bas.');
    } else if(prixProduits[i] >= seuil) {
        console.log('Prix élevé.');
    }
}

//Exo3

function analyserPrix(prixArray){
    for( let i = 0; i < prixArray.length; i++){
        let value ='';
        if(prixArray[i] < 10){
            value = 'Prix bas';
        } else {
            value = 'Prix élevé';
        }
        console.log(`Analyse produit ${i+1} : ${value}.`);
    }
}

analyserPrix(prixProduits);