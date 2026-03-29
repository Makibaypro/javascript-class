const animaux = [`chat`,`chien`,`lapin`];

let dernier = animaux.length - 1;

console.log(`Le premier est : ${animaux[0]}, le dernier est : ${animaux[dernier]}`);
console.log(`la longueur est : ${animaux.length}`);

animaux.push("oiseau");
animaux.shift();

console.log(animaux);

const nombre = [10, 20, 30];
nombre.unshift(40);
nombre.pop();
let somme = nombre.reduce((a,b) => a + b);
console.log(`La somme des nombres est de : ${somme}`);
