//Exo 1

function analyserProduitAvance(prix, vendeurFiable, promo){

    let verdict = "";
    let score = 100;

    if(prix < 5){
        score -= 30;
    } else if(prix >= 5 && prix <= 15){
        score -= 10;
    }
    if(!vendeurFiable){
        score -= 40;
    }
    if(promo > 80){
        score -=25;
    } else if (promo >=50 && promo <= 80){
        score -= 10;
    }

    if(score >= 80){
        verdict = 'Fiable';
    } else if(score >= 50 && score < 80){
        verdict = 'Moyen';
    } else {
        verdict = 'Risque';
    }
    return {score, verdict};
}

/*let produitPc = {
    titre: "Pc",
    prix: 799.99,
    vendeurFiable: false,
    promo: 20
}

let produitCable = {
    titre: "Cable",
    prix: 2.99,
    vendeurFiable: false,
    promo: 83
}

console.log(analyserProduitAvance(produitCable));
console.log(analyserProduitAvance(produitPc));*/

let produitsListe = [
    {titre: "Chaise", prix: 30, vendeurFiable: true, promo: 20},
    {titre: "Cable", prix: 2.99, vendeurFiable: false, promo: 83},
    {titre: 'Eyelash', prix: 10, vendeurFiable: true, promo: 60}
]

function analyserListeProduits(produits){
    let verdictProduit = [];
    produits.forEach(n => {
        verdictProduit.push({titre: n.titre, resultat: analyserProduitAvance(n.prix, n.vendeurFiable, n.promo)})
    })
    
    return verdictProduit;
}

/*
// Test avec boucle for

function analyserListeProduit(produits){
    let verdictProduit = [];
    for (let i = 0; i < produits.length; i++){
        verdictProduit.push(analyserProduitAvance(produits[i]))
}
    return verdictProduit;
}

//Test avec for... of

function analyserListeProduit(produits){
    let verdictProduit = [];
    for(let produit of produits) {
    verdictProduit.push(analyserProduitAvance(produit))
    }
    return verdictProduit;
}*/


console.log(analyserListeProduits(produitsListe));
console.table(analyserListeProduits(produitsListe));

let a = analyserListeProduits(produitsListe);

console.log(a);
a.forEach(n => {
    console.log(n.titre + ' ' + n.resultat.score +' '+ n.resultat.verdict)
})