type Badge = {
    nom: string;
    score: number;
    fiable: boolean;
};

export default function BadgeProduit({ nom, score, fiable }: Badge) {


    return <p>{nom} - {score} - {fiable? <span style={{ color: "green" }}>✓ Fiable</span> : <span style={{color: "red"}}>✗ Non fiable</span>}</p>;

}

