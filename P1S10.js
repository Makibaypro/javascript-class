const produits = [
  {
    nom: "Écouteurs Bluetooth Pro",
    prix: 3.99,
    vendeurFiable: false,
    promo: 80,
    description: "Super qualité, livraison rapide, meilleur prix garanti"
  },
  {
    nom: "Chargeur USB-C",
    prix: 12.50,
    vendeurFiable: true,
    promo: 15,
    description: "Compatible tous appareils, certifié CE"
  },
  {
    nom: "Montre connectée",
    prix: 4.50,
    vendeurFiable: false,
    promo: 75,
    description: "Dropshipping direct usine, prix incroyable, stock limité"
  },
  {
    nom: "Câble HDMI 2m",
    prix: 8.00,
    vendeurFiable: true,
    promo: 10,
    description: "Haute définition 4K, solide et durable"
  }
];

function analyserDescription(description){
    const descriptionLowerCase = description.toString().toLowerCase();
    let motsSuspects = [];
    let nbSuspect = 0;
    if(descriptionLowerCase.includes('dropshipping'))   {motsSuspects.push('dropshipping') ; nbSuspect ++};
    if(descriptionLowerCase.includes('garanti'))        {motsSuspects.push('garanti') ; nbSuspect ++};
    if(descriptionLowerCase.includes('stock limité'))   {motsSuspects.push('stock limité') ; nbSuspect ++};
    if(descriptionLowerCase.includes('incroyable'))     {motsSuspects.push('incroyable') ; nbSuspect ++};
    if(descriptionLowerCase.includes('usine'))          {motsSuspects.push('usine') ; nbSuspect ++};
    if(nbSuspect === 0)                                   motsSuspects.push('aucun');

    let risque = nbSuspect >= 2;
    return { motsSuspects, nbSuspect, risque};

};



function scorerProduit(produit){

  const analysed = analyserDescription(produit.description);
  let score = 100;
  let verdict = '';
  if(produit.prix < 5) score -= 30;
  if(!produit.vendeurFiable) score -= 40;
  if(produit.promo > 70) score -= 20;
  if(analysed.risque) score -= 20;

  if(score >= 80)  verdict = 'Fiable';
  else if(score >= 50) verdict = 'Moyen';
  else  verdict = 'Risque';

  return {score, verdict, analysed};

}

function analyserListeProduit(produits){
  let scoreRes;
  let descAnalyse;
  let resultatListe = [];
  let produitResult;

  for(let i = 0; i < produits.length; i++){
    scoreRes = scorerProduit(produits[i]);
    descAnalyse = scoreRes.analysed;
    let nomObj = produits[i].nom;
    let scoreFin = scoreRes.score;
    let verdictFin = scoreRes.verdict
    let motsDesc = descAnalyse.motsSuspects
    produitResult = {nomObj, scoreFin, verdictFin, motsDesc};

    const produitResultTri = produitResult
    
   resultatListe.push(produitResult);
  }

  resultatListe.sort((a, b) => {
    const diff = b.scoreFin - a.scoreFin;
    if(diff !== 0 ) return diff;
    
    return a.nomObj.localeCompare(b.nomObj) 
  })

  return resultatListe

};


console.log(analyserListeProduit(produits))