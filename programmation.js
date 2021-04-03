function generateScale() {

    getScaleNote();
    getKeySignature();
    getScaleType();
    
}
function getScaleNote() {
    const scaleNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const scaleNote = Math.ceil(Math.random() * 7) - 1;
    document.getElementById('scaleNote').innerHTML = scaleNotes[scaleNote];
}
function getKeySignature() {
    const keySignatures = [' Natural', ' Flat', ' Sharp'];
    const keySignature = Math.ceil(Math.random() * 3) - 1;
    document.getElementById('keySignature').innerHTML = keySignatures[keySignature];
}
function getScaleType() {
    const scaleTypes = [' Major', ' Minor'];
    const scaleType = Math.ceil(Math.random() * 2) - 1;
    document.getElementById('scaleType').innerHTML = scaleTypes[scaleType];
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