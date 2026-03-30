const nombres = [1,2,3,4,5];
for (let i = 0; i < nombres.length ; i++){
    console.log(nombres[i]);
}

const scores = [12,5,18,20,7,14];
/*for (let i = 0; i < scores.length ; i++){
    if(scores[i] % 2 === 0){
        console.log(scores[i]);
    }
}*/
for (let i = 0; i < scores.length ; i++){
    if(scores[i] >= 10){
        console.log(scores[i]);
    }
}

let courses = ["pain", "lait", "pâtes", "riz"];
courses.push("fromage");
courses.shift();
for (let i = 0; i < courses.length ; i++){
    
    console.log(courses[i].toUpperCase());
}

