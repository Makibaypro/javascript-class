let text = "Small chair";
let newText = "";
if(text.length > 10){
    newText = text.slice(0,10) + "...";
}

console.log(newText);