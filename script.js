const coups = ["Pierre","Feuilles","Ciseaux"];
let scorePlayer = 0;
let scoreComputer =0;
let resultat="";

function randomCoup(){
    return Math.floor(Math.random() * 3) ;
}

function refreshUi(){
    document.getElementById("resultPlayer").innerHTML = `
      Vous possèdez ${scorePlayer} point(s) <br>`
      document.getElementById("resultComputer").innerHTML = `
      L'ordinateur possède ${scoreComputer} point(s) <br>`
      document.getElementById("finalResult").innerHTML = `
      Résultat : ${resultat}`
}

function game(from){
    console.log(from);
    valueRandom = randomCoup();
    let resultP1 = document.getElementById("player1").innerHTML = from;
    let resultP2 = document.getElementById("player2").innerHTML = coups[valueRandom];
   
    if (resultP1===resultP2) {
        resultat = "Egalité";
      }
      else if ((resultP1 === "Pierre" && resultP2 === "Ciseaux") || (resultP1 === "Ciseaux" && resultP2 === "Feuilles") || (resultP1 === "Feuilles") && (resultP2 === "Pierre")) {
        resultat = "Gagné";
        scorePlayer ++;
      }
      else {
        resultat = "Perdu";
        scoreComputer ++;
      } 

refreshUi();
}

function reset(){
    scorePlayer = 0 ;
    scoreComputer = 0 ;
    document.getElementById("resultPlayer").style.display="none";
    document.getElementById("resultComputer").style.display="none";
    document.getElementById("finalResult").style.display="none";

}

function replay(){
    document.getElementById("resultPlayer").style.display="block";
    document.getElementById("resultComputer").style.display="block";
    document.getElementById("finalResult").style.display="block";
    refreshUi();
}



