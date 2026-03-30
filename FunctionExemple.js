"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculScore(p) {
    if (p.promo) {
        return p.score - 20;
    }
    return p.score;
}
let produit1 = {
    titre: "Pc",
    prix: 299.99,
    promo: false,
    score: 80
};
let produit2 = {
    titre: "Telephone",
    prix: 799.99,
    promo: true,
    score: 50
};
console.log(calculScore(produit1));
console.log(calculScore(produit2));
