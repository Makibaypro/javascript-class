/*function Carte(){
  return (
  <div>
    <h2>Produit Analysé</h2>
    <p>Score : 87</p>
    <p>Verdict : Fiable</p>
  </div>
    )
}

function ResultatAnalyse(){
  const nom = "Chargeur USB-C Temu";
  const score = 42;
  const verdict = " Risque";
  const plateform = " Temu";

  return (
    <div>
      <h2>Nom: {nom}</h2>
      <p>Score: {score}</p>
      <p>Verdict: {verdict}</p>
      <p>Plateform: {plateform}</p>
    </div>
  );

}
*/

function EnteteAnalyse(){

  return(
    <div>
      <h1>Verif'Item — Résultat d'analyse</h1>
      <p>Plateforme : Amazon</p>
    </div>

  );
}

function DetailAnalyse(){
  const name = "Écouteurs Bluetooth XM5";
  const score = 76;

  let verdict;
  if(score >= 80)       verdict = "Fiable";
  else if(score >= 50)  verdict = "Moyen";
  else                  verdict = "Risque";

  let verdictVisuel;
  if(score >= 80)       verdictVisuel = "✅ Fiable";
  else if(score >= 50)  verdictVisuel = "⚠️ Moyen";
  else                  verdictVisuel = "🚨 Risque";

  return(
    <div>
      <h2>Nom: {name}</h2>
      <p>Score: {score}</p>
      <p>Verdict: {verdict}</p>
      <p>Verdict visuel : {verdictVisuel}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <EnteteAnalyse />
      <DetailAnalyse />
    </div>
  );
}

