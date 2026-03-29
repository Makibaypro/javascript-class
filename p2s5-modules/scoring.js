export function scorerProduit(produit){
    let score = 100;
    if(produit.prix < 5)                score -= 30;
    if(produit.vendeurFiable === false) score -= 40;
    if(produit.promo > 70)              score -= 20;
    return {...produit, score};
}

export function determinerVerdict(produit){
    let verdict = '';
    if(produit.score >= 80)        verdict = 'Fiable';
    else if(produit.score >=50)    verdict = 'Moyen';
    else                            verdict = 'Risque';
    return {...produit, verdict}
}