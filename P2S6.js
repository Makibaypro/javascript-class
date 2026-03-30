
//Exo1
function parseurJSON(string){
    try{
        const parsed = JSON.parse(string);
        return parsed;

    } catch (error){
        console.log('Erreur :', error.message);
        return null
    }
}

console.log(parseurJSON('{"nom":"Clavier","prix":25}'));
console.log(parseurJSON("ceci n'est pas du JSON"));

//Exo2
function validerProduit(produit){
    try {
        if(produit == null ){
            throw new Error("Le produit n'existe pas.");
        } else if (produit.prix === undefined || typeof produit.prix !== 'number' ){
            throw new Error("Le produit n'a pas de prix.");
        } else if (produit.nom === undefined || produit.nom === ''){
            throw new Error("Le produit n'a pas de nom");
        } else {
            return true;
        }
    } catch (error){
        console.log('Erreur:', error.message);
        return null
    }
}

console.log(validerProduit(null));
console.log(validerProduit({"nom":"Clavier","prix":25}));
console.log(validerProduit({"nom":"Clavier"}));