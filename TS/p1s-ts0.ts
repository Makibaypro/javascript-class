//Exo1

let nomProduit: string ="Pc";
let prix: number = 299.99;
let vendeurFiable: boolean = true;

console.log(nomProduit, prix, vendeurFiable)

//Exo2

function estPrixSuspect(prix: number): boolean{
    return prix < 5;
};

console.log(estPrixSuspect(3));
console.log(estPrixSuspect(20));

//Exo3

let produit: Produit = {
    titre: "PC",
    prix: 299,
    promo: true,
    score: 80
}

console.log(produit);

//Exo 4

type Produit = {
    titre: string;
    prix: number;
    promo: boolean;
    score: number;
};

let produitTest: Produit = { titre: "Pc", prix: 299, promo: false, score: 80};

/*function calculerFiabilite1(p: {titre: string; prix: number; promo: boolean; score: number}= {titre: "Pc", prix: 299, promo: false, score: 80}): number{
    return p.score;
}*/

function calculerFiabilite2(p: Produit): number{
    if(p.promo){
        return p.score - 20 ;
    } else {
    return p.score;
    }
}

console.log(calculerFiabilite2(produitTest));
console.log(calculerFiabilite2(produit));