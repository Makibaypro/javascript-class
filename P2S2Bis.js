//Exo1

function simulerRecuperation(success){
    return new Promise ((resolve, reject) => {
        if(success) {
            resolve('Produit Récupéré');
        } else {
            reject('Erreur : Produit introuvable');
        }
    })
}

simulerRecuperation(true)
    .then((message) => {
        return 'Test ' + message;
    })
    .then((messageUpdate) => {
        console.log(messageUpdate)
    })
    .catch((reject) => {
        console,log(reject);
    })

simulerRecuperation(false)
    .then((message) => {
        console.log(message)
    })
    .catch((erreur) => {
        console.log(erreur);
    })



//Exo 2 & 3

const produits = [
  { id: 1, nom: "Montre", prix: 12, vendeurFiable: false },
  { id: 2, nom: "Casque", prix: 85, vendeurFiable: true },
];

function recupererProduitId(id, arr){
    let found = null;
    return new Promise((resolve, reject) => {
    for(let i = 0; i < arr.length; i++){
        if(id === arr[i].id){
            found = arr[i];
            break;
        }
    }
    if(found !== null){
            resolve(found)
        } else {
            reject(`Erreur : Produit ID ${id} non trouvé`);
        }
    })
}

/*recupererProduitId(2, produits)
    .then((message) => {
        console.log(message);
    })
    .catch((erreur) => {
        console.log(erreur)
    })

recupererProduitId(99, produits)
    .then((message)=>{
        console.log(message);
    })
    .catch((erreur) => {
        console.log(erreur);
    })
*/


function analyserProduitAsync(id){

    return recupererProduitId(id, produits)
        .then((produit) => {
            let score = 100;
            let verdict;
            if(produit.prix < 20 )          score -= 30;
            if(!produit.vendeurFiable )     score -= 40;
            if(score >= 80)         verdict = 'Fiable';
            else if(score >= 50)    verdict = 'Moyen';
            else                    verdict = 'Risque';

            return {produit, score, verdict}
        })
        .then((message) => {
            console.log(message);
        })
        .catch((erreur) => {
            console.log(erreur);
        })
}

analyserProduitAsync(1);
analyserProduitAsync(99);
