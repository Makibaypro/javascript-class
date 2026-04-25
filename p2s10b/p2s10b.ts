    //Exo1
/*
    function filtrerEtTransformer<T, U>(tableau: T[], predicate: (item: T) => boolean, transformateur: (item: T) => U): U[]{
    return tableau.filter(predicate).map(transformateur);
    }

    const tableau = [1, 2, 3, 4, 5];

    function predicate(item: number){
        return item%2 === 0;
    }

    function transformateur(item: number){
        return `pair: ${item}`;
    }

    console.log(filtrerEtTransformer(tableau, predicate,transformateur));

    //Exo2

*/    import { Produit } from "./typesp2s10b";
/*
    const produits: Produit[] = [
    { nom: "A", score: 80, certifie: true },
    { nom: "B", score: 45, certifie: false },
    { nom: "C", score: 90, certifie: true },
    ];


    function extracteur(item: Produit){
        return item.nom;
    }

    function extraireChamp<T extends {score: number}, U>(tableau: T[], extracteur: (item: T) => U): U[]{
        return tableau.filter(n => n.score >= 70).map(extracteur);
    }

    console.log(extraireChamp(produits, extracteur));

    //Exo3

    function cle(item: Produit){
        return item.certifie
    }


    function grouper<T extends {certifie: boolean}, U extends string | number>(tableau: T[], cle: (item: T) => U): Record<string, T[]>{
        const resultat: Record<string, T[]> = {};
        for(const item of tableau){
            const maCle = cle(item);
        if (!resultat[String(maCle)]) {
            resultat[String(maCle)] = [];
            }
        resultat[String(maCle)]!.push(item);
            
        }
        return resultat;
    }

    const parCertification = grouper(produits, (p) => p.certifie ? "certifie" : "non_certifie");
    console.log(parCertification)
*/
//Exo4

function appliquerSi<T>(tableau: T[], predicate: (item: T) => boolean, action: (item: T) => void): void{
    const pass = tableau.filter(predicate)
    for(const item of pass){
        action(item)
        
    };
}

appliquerSi(
  [1, 2, 3, 4, 5],
  (n) => n > 3,
  (n) => console.log(`Élément retenu : ${n}`)
);

//Exo5

const produits: Produit[] = [
  { nom: "A", score: 80, certifie: true },
  { nom: "B", score: 45, certifie: false },
  { nom: "C", score: 90, certifie: true },
];

function transformerSiValide<T, U>(tableau: T[], validateur: (item: T) => boolean, transformateur: (item: T) => U): U[]{

    return tableau.filter(validateur).map(transformateur)
}

console.log(transformerSiValide(produits, (p) => p.score >= 70, (p) => p.nom));

//Exo6

function partitionner<T>(tableau: T[], predicate: (item: T) => boolean): [T[], T[]]{
    const result: [T[], T[]] = [[],[]];
    for(const produit of tableau){
        if(predicate(produit)){

            result[0].push(produit);
        } else { 
            result[1].push(produit);
        }
    }

    return result;
}

const [fiables, risques] = partitionner(
  produits,
  (p) => p.score >= 70
);

console.log([fiables, risques]);