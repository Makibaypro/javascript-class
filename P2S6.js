
//Exo3

function simulerFetch(id){
    return new Promise((resolve, reject) => {
        if (id === 1 ){
            resolve ({ id: 1, nom: "Écouteurs BT", prix: 12, vendeurFiable: false });
        } else {
            reject(new Error("Produit introuvable : id " + id))
        }
    })
}

async function analyserProduitDistant(id){
    try {
        const resultFetch = await simulerFetch(id);
        let score = 100;
        let verdict = '';
        if(resultFetch !== null) {

            if(resultFetch.prix < 15)               score -= 30;
            if(resultFetch.vendeurFiable === false) score -= 40;

            if(score >= 80)         verdict = 'Fiable';
            else if(score >= 50)    verdict = 'Moyen';
            else                    verdict = 'Risque'
            return {nom : resultFetch.nom, score, verdict}
        }


    } catch (error){
        return {erreur : error.message};
    }
}

async function main(){
    const result1 = await analyserProduitDistant(1);
    const result2 = await analyserProduitDistant(99);
    console.log(result1);
    console.log(result2);
}

main();