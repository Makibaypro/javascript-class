//Exo1
/*
function simulerRecuperation(succes){
    return new Promise((resolve, reject) => {
        if(succes){
            resolve('Produit récupéré');
        } else {
            reject('Erreur : produit introuvable');
        }
    });
}

simulerRecuperation(false)
.then((resultat)=> {
    console.log(resultat);
})
.catch((error) => {
    console.log(error);
})

simulerRecuperation(true)
.then((resultat)=> {
    console.log(resultat);
})
.catch((error) => {
    console.log(error);
})*/

//Exo2

const produits = [
  { id: 1, nom: "Montre", prix: 12, vendeurFiable: false },
  { id: 2, nom: "Casque", prix: 85, vendeurFiable: true },
];

function trouverId(id, array){
    return new Promise((resolve, reject) => {
        let found = null;
        for(let i = 0; i < array.length; i++){
            if(array[i].id === id){
                found = true;
                break;
            } else {
                found = false;
            }
        }
        if(found){
            resolve(array[i])
        } else {
            reject(`Erreur : produit ID ${id} non trouvé`);
        }
    });
}

trouverId(2, produits)
.then((resultat) =>{
    console.log(resultat);
})
.catch((error) => {
    console.log(error);
})

console.log(produits.length)