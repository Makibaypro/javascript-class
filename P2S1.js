/*//Exo 1

const produits = [
  { nom: "Casque BT", prix: 45 },
  { nom: "Chargeur", prix: 8 },
  { nom: "Écouteurs", prix: 120 }
];


function appliquerCategorie(item){
    const itemNew = {...item};
    if(item.prix >= 50){
        itemNew.categorie = 'cher';
    } else {
        itemNew.categorie = 'abordable';
    }
    return itemNew;
};

function appliquerAnalyse(produit, result){
    return produit.map(n => result(n));
}

console.log(appliquerAnalyse(produits, appliquerCategorie));

//Exo 2

const analyses = [
  { nom: "Produit A", score: 85 },
  { nom: "Produit B", score: 60 },
  { nom: "Produit C", score: 72 }
];

function scoreDiagnostic(product){
    let productNew = {...product}
    if(product.score >= 70) productNew.fiable = true;
    else productNew.fiable = false;
    
    return productNew;
}

function transformerListe(products, task){
    return products.map((n) => task(n));
}


console.log(transformerListe(analyses, scoreDiagnostic));*/

//Exo 3

const produits2 = [
  { nom: "Montre connectée", prix: 120, avis: 4.8 },
  { nom: "Câble USB", prix: 6, avis: 3.9 },
  { nom: "Enceinte BT", prix: 55, avis: 4.2 },
  { nom: "Batterie externe", prix: 30, avis: 4.5 },
];

function ajouterCategorie(produit){
    let itemNew = {...produit};
    if(itemNew.prix >= 50) itemNew.categorie = 'premium';
    else itemNew.categorie = 'standard';
    return itemNew
}

function ajouterFiabilite(produit){
    let itemNew = {...produit};
    if(itemNew.avis >= 4.3) itemNew.fiable = true;
    else itemNew.fiable = false;
    return itemNew
}
let functionTable = [ajouterCategorie, ajouterFiabilite];

function appliquerPlusieurs(produits, modif){
    let dd = produits;
    for(let i = 0; i<modif.length;i++){
        dd = dd.map((n) => modif[i](n))

    }
   return dd
}


console.log(appliquerPlusieurs(produits2, functionTable));