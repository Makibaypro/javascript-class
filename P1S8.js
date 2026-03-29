function analyserProduitAvance(produit) {
  let score = 0;

  if (produit.prix < 30) score += 3;
  else if (produit.prix < 60) score += 2;
  else score += 1;

  if (produit.vendeurFiable === true) score += 2;
  if (produit.enPromo === true) score += 1;

  let verdict;
  if (score >= 5) verdict = "Excellent";
  else if (score >= 3) verdict = "Correct";
  else verdict = "Risqué";

  return { score, verdict };
}
const produits = [
    { nom: 'Casque', prix: 25, vendeurFiable: true, enPromo: false},
    { nom: 'Oreillettes', prix: 55, vendeurFiable: true, enPromo: true},
    { nom: 'Adaptateur', prix: 10, vendeurFiable: false, enPromo: true},
    { nom: 'Ampli', prix: 25, vendeurFiable: true, enPromo: true}
]

function analyserListeProduits(liste) {
    liste.forEach((n) => {
    let scoreVerdict = analyserProduitAvance(n);
    n.score = scoreVerdict.score;
    n.verdict = scoreVerdict.verdict;
})


const produitsTri = liste.sort((a, b) => b.score - a.score !== 0 ? b.score - a.score: a.nom.localeCompare(b.nom))

return produitsTri;
}


const produitsAnalyse = analyserListeProduits(produits);

for( let i = 0; i < produitsAnalyse.length; i++){
    if(produitsAnalyse[i].verdict === 'Excellent'){
        console.log(produitsAnalyse[i])
    }
}