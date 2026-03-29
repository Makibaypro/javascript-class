
/*
//Exo 1

function attendreEtRetourner(valeur, delai) {
  return new Promise(resolve => setTimeout(() => resolve(valeur), delai));
}

async function afficherMessage() {
    const attente = await attendreEtRetourner('Analyse terminée', 1000);
    console.log(attente);
}


afficherMessage(); 

//Exo 2

function recupererProduit(id) {
  return new Promise(resolve => setTimeout(() => resolve({
    id: id,
    nom: "Nike Air Max",
    prix: 45,
    vendeurFiable: false,
    promo: 80
  }), 800));
}

function scorerProduit(produit) {
  return new Promise(resolve => {
    let score = 100;
    if (produit.prix < 50) score -= 30;
    if (!produit.vendeurFiable) score -= 40;
    if (produit.promo > 70) score -= 20;
    resolve({ ...produit, score });
  });
}

async function analyserProduit(id){
    const produit = await recupererProduit(id);
    const produitScore = await scorerProduit(produit);
    console.log(`${produitScore.nom} - ${produitScore.score}`);
}

analyserProduit('p1')*/

//Exo3

function recupererProduit(id) {
    return new Promise(resolve => setTimeout(() => resolve({
        id: id,
        nom: 'Nike Air Max',
        prix: 45,
        vendeurFiable: false,
        promo: 80
    }), 800));
}

function scorerProduit(produit) {
    return new Promise(resolve => {
        let score = 100;
        if(produit.prix < 50)       score -= 30;
        if(!produit.vendeurFiable)  score -= 40;
        if(produit.promo > 70)      score -= 20;
        resolve({...produit, score });
    });
}

function determinerVerdict(produitScore){
    return new Promise(resolve => {
        let verdict;
        if(produitScore.score >= 80)        verdict = 'Fiable';
        else if (produitScore.score >= 50)  verdict = 'Moyen';
        else                                verdict = 'Risque';
        resolve({...produitScore, verdict });
    });
}

async function lancerAnalyse(id) {
    const produit = await recupererProduit(id);
    const scoreProduit = await scorerProduit(produit);
    const verdictProduit = await determinerVerdict(scoreProduit);
    console.log(`Analyse ${id} - ${produit.nom} - ${verdictProduit.score} - ${verdictProduit.verdict}`)
}

lancerAnalyse('p1')