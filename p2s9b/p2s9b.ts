//Exo1

async function chargerDonnee(id: number): Promise<string>{
    if(id > 0){
        await new Promise(r => setTimeout(r, 0));
        return `donnée, ${id}`
    } else {
        throw new Error ("id invalide");
    }
}

async function checkid(id: number){
    try{
        const result = await chargerDonnee(id);
        console.log(result);
    } catch (error){
        const message = error instanceof Error ? error.message : "Erreur inconnu";
        console.log(message)
    }
}

//Exo2
interface Produit {
    nom: string,
    prix: number,
    vendeurFiable: boolean,
    promo: number
};

type Verdict = "Fiable" | "Moyen" | "Risque";

interface ResultatAnalyse{
    score: number,
    verdict: Verdict, 
};
type Retour = RetourSuccess | RetourEchec;

type RetourSuccess = { produit: Produit, resultat: ResultatAnalyse };
type RetourEchec = { produit: null, resultat: null, erreur: string };

function afficherRetour(retour: Retour): void{
    if("erreur" in retour){
        console.log(retour.erreur);
    } else {
        console.log(retour.resultat.score);
    }
}

//Exo3

async function analyser(id:number): Promise<RetourSuccess | RetourEchec>{
    return new Promise((resolve, reject) => {
        if( id > 0 ){
           const result: RetourSuccess = {produit: {nom: "patate",prix: 5.99, vendeurFiable: true, promo: 80}, 
                    resultat: {score: 55, verdict: "Moyen"} }
            resolve(result)
        } else {
            resolve({produit: null, resultat: null, erreur: "id invalide"})
        }
    })
    
}

async function main(id: number){
    let lolilol = await analyser(id);
    afficherRetour(lolilol);
}

main(2);
main(-1);