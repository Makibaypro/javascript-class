/*
//Exo1
type BadgeProps = {
  label: string,
  actif: boolean
};

function Badge ({label, actif}: BadgeProps){
  let labelResult: string;
  if(actif === true){
    labelResult = `✅ [${label}]`;
  } else {
    labelResult = `❌ [${label}]`;
  }
  return <p>{labelResult}</p>

}

export default function App(){
  return(
    <>
    <Badge label="Vendeur Fiable" actif={true} />
    <Badge label="Prix suspect" actif={false} />
    </>
  )
}

//Exo2
*/
type CarteAnalyseProps = {
  nomProduit: string;
  score: number;
  verdict: "Fiable" | "Moyen" | "Risque";
};

function CarteAnalyse({nomProduit, score, verdict}: CarteAnalyseProps){

  let verdictResult;
  if(verdict === "Fiable") verdictResult = "🟢";
  else if(verdict === "Moyen") verdictResult = "🟡";
  else if(verdict === "Risque") verdictResult = "🔴";

  return <p>nom: {nomProduit}, score: {score}, verdict: {verdict} {verdictResult} </p>

}
/*
export default function App(){
  return(
    <>
    <CarteAnalyse nomProduit="Patate" score={45} verdict="Moyen" />
    <CarteAnalyse nomProduit="Chargeur USB" score={75} verdict="Fiable" />
    <CarteAnalyse nomProduit="Voiture" score={21} verdict="Risque" />
    </>
  )
}*/

//Exo3

const produitsListe: CarteAnalyseProps[] = [
    {nomProduit: "Chargeur",
    score: 55,
    verdict: "Moyen"
    },
    {nomProduit: "Stylos",
    score: 86,
    verdict: "Fiable"
    },
    {nomProduit: "Batterie",
    score: 12,
    verdict: "Risque"
    }
]

type ListeAnalysesProps = {
    produits: CarteAnalyseProps[];
}

function ListeAnalyses({produits}: ListeAnalysesProps){
  const produitsResult = produits.map((produit) => <CarteAnalyse key={produit.nomProduit} nomProduit={produit.nomProduit} score={produit.score} verdict={produit.verdict}/>)
  return produitsResult
}

export default function App(){
return <ListeAnalyses produits = {produitsListe} />

}