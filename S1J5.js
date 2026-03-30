function direNom(prenom){
    console.log(`Bonjour, je m'appelle ${prenom}`);
}

direNom("Joe");
direNom("Bozzo");

function carre1(x){
    return x*x;
}

let carre = (x) => x*x;


console.log(`le carre de 4 est de : ${carre1(4)}`);
console.log(`le carre de 2 est de : ${carre(2)}`);

function tableMultiplication(x){
    let mult = 1;
    while(mult <= 10){
        console.log(`Pour ${x} * ${mult} le résultat est : ${mult * x}`);
        mult++;
    }
}

tableMultiplication(5);

tableMultiplication(2);
