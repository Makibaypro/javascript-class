/*//Exo1

interface Produit{
    titre: string;
    prix: number;
    promo: boolean;
    score: number;
}

let produit: Produit = {
    titre: "Jacket",
    prix: 10,
    promo: true,
    score: 55
}

function calculerFiabilite(p: Produit): number {
    if (p.promo){
        return p.score - 20
    }
    return p.score
}

console.log(calculerFiabilite(produit))

//Exo2

interface Produit{
    titre: string;
    prix: number;
    promo?: boolean;
    score: number;
}

let produit: Produit = {
    titre: "Jacket",
    prix: 10,
    score: 55
}

function calculerFiabilite(p: Produit): number {
    if (p.promo){
        return p.score - 20
    }
    return p.score
}

console.log(calculerFiabilite(produit))*/

//Exo3


interface Produit{
    titre: string;
    prix: number;
    promo?: boolean;
    score: number;
}

let produit: Produit = {
    titre: "Jacket",
    prix: 3,
    score: 55
}

function calculerFiabilite(p: Produit): number {
    if (p.promo){
        return p.score - 20
    }
    return p.score
}

console.log(calculerFiabilite(produit))

interface ProduitPremium extends Produit {
    abonnementActif: boolean;
}

const produitPremium: ProduitPremium = {
    titre: "Iphone",
    prix: 799.99,
    abonnementActif: true,
    score: 83
}

const produitFrais: Produit = {
    titre: "Poisson",
    prix: 15,
    score : 34
}

console.log(produitPremium);

function analyserProduit(p: Produit): string{
    if(p.prix < 5){
        return "Prix suspect.";
    } else if (p.score < 50){
        return "Score faible."
    }
    return "Produit correct";
}

console.log(analyserProduit(produitPremium));
console.log(analyserProduit(produit));
console.log(analyserProduit(produitFrais));