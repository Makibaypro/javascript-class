type Props = {
  nom: string;
  prix: number;
  verdict?: string;
};

export default function ProduitCard({ nom, prix, verdict }: Props) {
  return <p>{nom} — {prix}€ {verdict && <span> — {verdict}</span>}</p>;
}

