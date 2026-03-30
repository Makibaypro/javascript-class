/*
//Exo1
import { direBonjour, direAurevoir } from "./utils.js";

console.log(direBonjour('Max'));
console.log(direAurevoir('Max'));


//Exo2

import { scorerProduit, determinerVerdict } from "./scoring.js";

const produit = { nom: "Écouteurs", prix: 4, vendeurFiable: false, promo: 80 };

const produitScore = scorerProduit(produit);
const produitVerdict = determinerVerdict(produitScore);

console.log(`score : ${produitVerdict.score}, verdict : ${produitVerdict.verdict}`);
*/

//Exo3

import analyserProduit from "./pipeline.js";

const produitList = [
    { nom: "Écouteurs", prix: 4, vendeurFiable: false, promo: 80 },
    { nom: "Crayons", prix: 10, vendeurFiable: true, promo: 45 },
    { nom: "Appareil Photo", prix: 75, vendeurFiable: false, promo: 95 },
]

const produitListUpdate = produitList.map((produit) => analyserProduit(produit));

const produitListTriee = produitListUpdate.sort((a,b) => b.score - a.score);

console.log(produitListTriee);