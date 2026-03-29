function analyseDescription(description){
    let descriptionLowerCase = description.toLowerCase();
    let nbSignaux = 0;
    let motsDetectes = [];
    let risqueResult;
    if(descriptionLowerCase.includes('gratuit')){
        nbSignaux += 1;
        motsDetectes.push('gratuit');
    }
    if(descriptionLowerCase.includes('promo')){
        nbSignaux += 1;
        motsDetectes.push('promo');
    }
    if(descriptionLowerCase.includes('fou')){
        nbSignaux += 1;
        motsDetectes.push('fou');
    }
    if(descriptionLowerCase.includes('incroyable')){
        nbSignaux += 1;
        motsDetectes.push('incroyable');
    }
    risqueResult = nbSignaux >= 2;
    

    return {motsDetectes, nbSignaux, risqueResult};

}

function analyserProduitComplet(produit){
    let score = 100;
    let analyseDescriptionResultat = analyseDescription(produit.description);
    let verdict ='';
    let nom = produit.nom;

    if(produit.prix < 5){
        score -= 30;
    }
    if(!produit.vendeurFiable){
        score -= 40;
    }
    if(produit.promo > 70){
        score -= 20;
    }
    if(analyseDescriptionResultat.risqueResult){
        score -= 10;
    }
    if(score >= 80){
        verdict ='Fiable';
    } else if (score >= 50 && score <= 79){
        verdict ='Moyen';
    } else if (score < 50){
        verdict = 'Risque'
    }

    let signaux =  analyseDescriptionResultat.motsDetectes;
    

    return {nom, score, verdict, signaux};

}

const produit = {
  nom: "Ecouteurs Bluetooth",
  prix: 3,
  vendeurFiable: false,
  promo: 80,
  description: "PRIX FOU ! Promo incroyable, qualité garantie !"
};

console.log(analyserProduitComplet(produit));