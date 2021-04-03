function generationGamme() {
    let gammeNote = Math.ceil(Math.random() * 7);
    console.log(gammeNote);
    if (gammeNote == 1){
        document.getElementById("gammeNote").innerHTML = "A";
    } else if (gammeNote == 2) {
        document.getElementById("gammeNote").innerHTML = "B";
    } else if(gammeNote == 3) {
        document.getElementById("gammeNote").innerHTML = "C";
    } else if(gammeNote == 4) {
        document.getElementById("gammeNote").innerHTML = "D";
    } else if(gammeNote == 5) {
        document.getElementById("gammeNote").innerHTML = "E";
    } else if(gammeNote == 6) {
        document.getElementById("gammeNote").innerHTML = "F";
    } else {
        document.getElementById("gammeNote").innerHTML = "G";
    }
    let gammeTemps = Math.ceil(Math.random() * 2);
    console.log(gammeTemps);
    if (gammeTemps == 1){
        document.getElementById("gammeTemps").innerHTML = "Majeur";
    } else {
        document.getElementById("gammeTemps").innerHTML = "Mineur";
    }
}
