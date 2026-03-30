import { Produit, Verdict } from "./type";

export default function scorerProduit(produit: Produit): {score: number, verdict: Verdict}{
    let score: number = 100;
    let verdict: Verdict;

    if(produit.prix < 5 )       score -= 30;
    if(!produit.vendeurFiable)  score -= 40;
    if(produit.promo > 70)      score -= 20;

    if(score >= 80)         verdict = "Fiable";
    else if(score >= 50)    verdict = "Moyen";
    else                    verdict = "Risque";

    return {score, verdict};
}

