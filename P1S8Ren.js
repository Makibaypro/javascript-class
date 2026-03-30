const livres = [
  { nom: "Dune",         prix: 12, vendeurFiable: true,  enPromo: false },
  { nom: "Fondation",    prix: 8,  vendeurFiable: false, enPromo: true  },
  { nom: "Hypérion",     prix: 22, vendeurFiable: true,  enPromo: true  },
  { nom: "Neuromancien", prix: 35, vendeurFiable: true,  enPromo: false },
]


function analyserLivre(livre){
    let score = 0;

    if(livre.prix <10) score +=3;
    else if(livre.prix < 25) score += 2;
    else score += 1;

    if(livre.vendeurFiable) score += 2;
    if(livre.enPromo) score += 1;

    let verdict;
    if(score >= 5) verdict = 'Excellent';
    else if(score >= 3) verdict = 'Correct';
    else verdict = 'Risqué';

    return {score, verdict};
}

livres.forEach((n) => {
    console.log(analyserLivre(n));
})

function analyserListeLivres(listeLivre){
    listeLivre.forEach((n) => {
        let scoreVerdict = analyserLivre(n);
        n.score = scoreVerdict.score;
        n.verdict = scoreVerdict.verdict;
    })

    const listeLivreTri = listeLivre.sort((a, b) => b.score - a.score !== 0 ? b.score - a.score : a.nom.localeCompare(b.nom));

    return listeLivreTri;
}

console.log(analyserListeLivres(livres));

for(let i = 0; i < livres.length; i++){
    if(livres[i].verdict === 'Excellent'){
        console.log(livres[i]);
    }
}
console.table(analyserListeLivres(livres));