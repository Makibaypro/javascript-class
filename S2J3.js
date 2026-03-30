
//Exo 1
let nombre = 1;

do {
    console.log(nombre);
    nombre++;
} while (nombre <6);


//Exo2 ERROR
/*let inputUser = 3;

do {
    checkNb = console.log(`Entrez un chiffre entre 1 et 10 :`);
}
while(inputUser > 1 && inputUser < 10){
    console.log(`Bravo, nombre valide !`);
}*/



//Exo 3
for( let i = 1; i <= 20; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`FizzBuzz`);
    } else if( i % 5 == 0){
        console.log(`Buzz`)
    } else if(i % 3 == 0){
        console.log(`Fizz`);
    } else {
        console.log(i);
    }
}

let entrees = [15, -2, 10, 5, 2];
let i = 0;
let inputUser;

do {
    inputUser = entrees[i];
    console.log(`Entrez un chiffre entre 1 et 5 : ${inputUser}`)
    i++;
} while (inputUser < 1 || inputUser >= 5);

console.log(`Le chiffre ${inputUser} est valide !`)

