//Exo1

const prixHT = [10, 25, 40];

const prixTTC = prixHT.map(p => p * 1.20);
console.log(prixTTC);

//Exo2

const scores = [15, 8, 22, 4, 30];

const scoresHaut = scores.filter(p => p >= 10);
console.log(scoresHaut);

//Exo3

const prixProduits = [3.99, 12.99, 7.5, 20];

const prixProduitsHaut = prixProduits.filter(p => p >= 10);
prixProduitsHaut.forEach(n => console.log(n));
