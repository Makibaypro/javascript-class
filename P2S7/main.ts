import scorerProduit from "./scoring";

const produit1 = {
  nom: "Casque Bluetooth",
  prix: 3.99,
  vendeurFiable: true,
  promo: 20
};

const produit2 = {
  nom: "Chargeur USB",
  prix: 12.99,
  vendeurFiable: false,
  promo: 50
};


try{
    console.log(scorerProduit(produit1));
    console.log(scorerProduit(produit2));

} catch (error){
    console.log("Produit non scorable");

}
