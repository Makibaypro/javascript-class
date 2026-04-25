//Exo1
/*
function predicate (item: {name: string, actif: boolean}): boolean {
    return item.actif === true ;
}

function transformer (item: {name: string}): string {
    return item.name;

}


function filtrerEtTransformer<T, U>(items: T[], predicate: (item: T) => boolean, transformer:(item: T) => U){

    return items.filter(predicate).map(transformer)
    
}

const itemsTableau = [
    {name: "Patata", actif: true}, 
    {name: "Fromage", actif: false},
    {name: "Voiture", actif: true} 
]

console.log(filtrerEtTransformer(itemsTableau, predicate, transformer));
*/
//Exo2
import { fetchProduit, afficherProduit, ProduitDistant } from "./moduleP2S10";
/*
async function main(id: number){
    const result = await fetchProduit(id);

    if(result === null){
        console.log('Produit introuvable');
        return;

    }
    afficherProduit(result)
}

main(1);
*/
//Exo3

type ResultatOk<T> = { succes: true; donnees: T };
type ResultatEchec = { succes: false; erreur: string };
type Resultat<T> = ResultatOk<T> | ResultatEchec;

async function executerAvecResultat<T>(fn: () => Promise<T>): Promise<Resultat<T>>{
    try{
        const resultat = await fn();
        return {succes: true, donnees: resultat}
        } catch (error) {
        const message = error instanceof Error ? error.message : "Erreur inconnue";
        return {succes: false, erreur: message }
    }
}

function afficherResultat<T>(resultat: Resultat<T>): void{
    if("erreur" in resultat){
        console.log(resultat.erreur);
    } else {
        console.log(resultat)
    }
}

async function main (id: number) {
    const produit = await executerAvecResultat(() => fetchProduit(id));
    afficherResultat(produit);
    const echec = await executerAvecResultat(() => fetch("https://url-invalide.xyz").then(r => r.json()));
    afficherResultat(echec);
};

main(3)