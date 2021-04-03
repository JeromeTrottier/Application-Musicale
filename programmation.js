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
        document.getElementById("gammeTemps").innerHTML = " Major";
    } else {
        document.getElementById("gammeTemps").innerHTML = " Minor";
    }
    let gammeSignature = Math.ceil(Math.random() * 3);
    console.log(gammeSignature);
    if (gammeSignature == 1) {
        document.getElementById("gammeSignature").innerHTML = " Natural";
    } else if (gammeSignature == 2) {
        document.getElementById("gammeSignature").innerHTML = " Flat";
    } else {
        document.getElementById("gammeSignature").innerHTML = " Sharp"    
    }
}

const gammeHtml = `<div class="uneGamme"><div class="noteC noteBlanche"></div>
                <div class="noteCSharp noteNoire"></div>
                <div class="noteD noteBlanche"></div>
                <div class="noteDSharp noteNoire"></div>
                <div class="noteE noteBlanche"></div>
                <div class="noteF noteBlanche"></div>
                <div class="noteFSharp noteNoire"></div>
                <div class="noteG noteBlanche"></div>
                <div class="noteGSharp noteNoire"></div>
                <div class="noteA noteBlanche"></div>
                <div class="noteASharp noteNoire"></div>
                <div class="noteB noteBlanche"></div></div>`;

function drawGammes() {
  const pianoElement = document.getElementById('piano');
  for (let i = 0; i < 2; i++) {
    pianoElement.innerHTML += gammeHtml;
  }
}

window.addEventListener('load', () => {
  drawGammes();
})