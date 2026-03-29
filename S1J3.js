let age = 32;
let note1 = 15;
let note2 = 18;
let time = 14;

if ( age >= 18){
    console.log("Tu es majeur!");
} else {
    console.log("Tu es mineur!");
}

if (note1 >= 16){
    console.log("Excellent !");
} else if (note1 >= 10 && note1 < 16) {
    console.log("Peut mieux Faire.");
} else {
    console.log("Echec.");
}

if (note2 >= 16){
    console.log("Excellent !");
} else if (note2 >= 10 && note2 < 16) {
    console.log("Peut mieux Faire.");
} else {
    console.log("Echec.");
}

if (time < 12){
    console.log("Bonjour !");
} else if (time >= 12 && time < 18) {
    console.log("Bon après-midi !");
} else {
    console.log("Bonsoir !");
}
