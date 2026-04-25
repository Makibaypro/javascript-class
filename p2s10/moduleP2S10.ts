export interface ProduitDistant {
    id: number,
    title: string | null,
    price: number | null
}

export async function fetchProduit(id: number): Promise<ProduitDistant | null> {
try{
    const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(!reponse.ok){
            throw new Error(`Erreur HTTP : ${reponse.status}`);
        }
        const data = await reponse.json();
        return {id: data.id, title: data.title, price: data.price};
        
    } catch(error){
        const message = error instanceof Error ? error.message : "Erreur inconnue";
        console.log(message);
        return null;
    }
}

export function afficherProduit(produit: ProduitDistant): void{
    console.log(produit);
}

