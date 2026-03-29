
//Exo1
/*
async function recupererUtilisateur(id) {
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        } 
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

async function main(){
    const data = await recupererUtilisateur(2)
    console.log(data);
}

main();

//Exo2

async function recupererProduitExterne(needId) {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${needId}`);
        if(!data.ok){
            throw new Error(`Erreur HTTP : ${data.status}`);
        }
        const dataExtract = await data.json();
        let id = dataExtract.id;
        let nom = dataExtract.title;
        let description = dataExtract.body;
        return {id, nom, description};
    } catch (error){
        return null
    }
}

async function main(id) {
    const result = await recupererProduitExterne(id);
    console.log(result);
}

main(5);


//Exo3

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

async function analyserProduitDistant(id){
    const produitExterne = await recupererProduitExterne(id);
    if(produitExterne !== null) {
        const produitExterneModified = {...produitExterne, vendeurFiable : true, prix: 45, promo: 65};
        const produitScored = await scorerProduit(produitExterneModified);
        const produitVerdict = await determinerVerdict(produitScored);
        return produitVerdict;
    } else {
        return {erreur: "Produit non disponible"};
    }
}

async function main(id) {
    const result = await analyserProduitDistant(id);
    console.log(result);
}

main(2);
*/
//Exo 4

async function recupererCommentaire(needId){
    try {
        const commentaire = await fetch(`https://jsonplaceholder.typicode.com/comments/${needId}`)
        if(!commentaire.ok){
            throw new Error(`Erreur HTTP : ${commentaire.status}`);
        }
        const commentaireExtract = await commentaire.json();
        return {id : commentaireExtract.id, auteur : commentaireExtract.email, message : commentaireExtract.body}
    } catch (error) {
        return null
    }
}

async function afficherCommentaire(id){
    const commentaire = await recupererCommentaire(id);
    if(commentaire !== null) {
        return {auteur: commentaire.auteur, message: commentaire.message}
    } else {
        return {erreur: 'Commentaire non disponible'};
    }
}

async function main(id){
    const result = await afficherCommentaire(id)
    console.log(result);
}

main(3)