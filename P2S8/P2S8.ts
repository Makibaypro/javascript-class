
//Exo1

interface Vendeur {
    readonly id: string,
    nom: string,
    notesMoyenne: number,
    certifie?: boolean
}
/*
function resumeVendeur(v: Vendeur): string{
    if(v.certifie === true){
        return `La certification du produit ${v.nom} est présente et est ${v.certifie}. La note de ce produit est de ${v.notesMoyenne}.`
    } else {
        return `Aucune certification présente pour le produit ${v.nom} avec un note de ${v.notesMoyenne}.`
    }
}

const vendeur1: Vendeur = {
  id: "v001",
  nom: "TechShop",
  notesMoyenne: 4.7,
  certifie: true,
};

const vendeur2: Vendeur = {
  id: "v002",
  nom: "MegaDeal",
  notesMoyenne: 3.1,
};

console.log(resumeVendeur(vendeur1));
console.log(resumeVendeur(vendeur2));

//Exo2

const produits = [
  { nom: "AirMax", prix: 120, score: 85 },
  { nom: "Temu Bag", prix: 8, score: 22 },
  { nom: "Samsung S24", prix: 899, score: 91 },
  { nom: "Casque Shein", prix: 5, score: 18 },
  { nom: "Levi's 501", prix: 95, score: 74 },
];


function top<T extends { nom: string; score: number}>(items: T[], n: number): T[]{
    const tableauTrie = items.sort((a, b) => b.score - a.score);
    const tableauFinal = tableauTrie.slice(0,n);
    return tableauFinal;
}

console.log(top(produits, 3));
*/
//Exo3

const vendeurs: Vendeur[] = [
  { id: "v001", nom: "TechShop", notesMoyenne: 4.7, certifie: true },
  { id: "v002", nom: "MegaDeal", notesMoyenne: 3.1 },
  { id: "v003", nom: "FastBuy", notesMoyenne: 4.2 },
  { id: "v004", nom: "ChinaZone", notesMoyenne: 2.1 },
  { id: "v005", nom: "TopSeller", notesMoyenne: 1.8, certifie: false },
];

function analyserVendeurs(vendeurs: Vendeur[]): {meilleurs: Vendeur[]; alertes: Vendeur[]}{

    const meilleurs = vendeurs.filter((n) => n.notesMoyenne >= 4 );
    const alertes = vendeurs.filter((n) => n.notesMoyenne < 3 );


    return {meilleurs, alertes};
}

console.log(analyserVendeurs(vendeurs));