import ProduitCard from "./ProduitCard";
import BadgeProduit from "./BadgeProduit";

function App() {
  return (
  <>
  <ProduitCard nom= "Adidas Stan Smith" prix= {89}/>
  <ProduitCard nom="Nike Air" prix={59} verdict="bon" />
  <BadgeProduit nom="Nike Air" score={80} fiable={true}/>
  <BadgeProduit nom="Adidas Stan Smith" score={23} fiable={false}/>
  </>)
}


export default App;