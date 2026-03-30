//Exo1

function calculerRemise(prix: number, pourcentage: number): number{
    return prix - (prix*pourcentage)/100
}

console.log(calculerRemise(200, 25));

//Exo2

const produit1 = {
  nom: "Casque Bluetooth",
  prix: 3.99,
  vendeurFiable: true,
  promo: 20
};

const produit2 = {
  nom: "Chargeur USB",
  prix: 12.99,
  vendeurFiable: false,
  promo: 50
};

interface Produit{
    nom: string,
    prix: number,
    vendeurFiable: boolean,
    promo: number
}

type Verdict = 'Fiable' | 'Moyen' | 'Risque';

function evaluerProduit(produit: Produit): Verdict{
    let result: Verdict;
    if(produit.prix < 5){
        result = 'Risque';
    }
    else if(!produit.vendeurFiable) result = 'Risque';
    else if(produit.promo > 70) result = 'Moyen';
    else result = 'Fiable';
    return result;
}

console.log(evaluerProduit(produit1));
console.log(evaluerProduit(produit2));