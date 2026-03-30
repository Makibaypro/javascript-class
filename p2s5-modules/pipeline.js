import { scorerProduit, determinerVerdict } from "./scoring.js";

export default function analyserProduit(produit){
    const produitScored = scorerProduit(produit);
    const produitVerdict = determinerVerdict(produitScored);
    return  {nom : produitVerdict.nom, score : produitVerdict.score, verdict : produitVerdict.verdict};
}