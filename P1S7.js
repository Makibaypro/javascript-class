
//Exo1

const object1 = {
    nom: 'Iphone',
    prix: 799.99,
    vendeurFiable: true
};

console.log(object1.nom);
console.log(object1['prix']);
console.log(object1.vendeurFiable);

//Exo2

object1.prix = 699.99;
object1.promo = true;

console.log(object1);

//Exo3

const listeProduits = [
    { nom: 'Ordinateur', prix: 599.99, fiable: true},
    { nom: 'Velo', prix: 299.99, fiable: false },
    { nom: 'Tente', prix: 79.99, fiable: true}
];

for(let i = 0; i < listeProduits.length; i++){
    console.log(listeProduits[i]);
}

for(let i = 0; i < listeProduits.length; i++){
    if(listeProduits[i].fiable === false){
        console.log(listeProduits[i]);
    }
}