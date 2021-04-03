function generateScale() {

    setScaleNote();
    setKeySignature();
    setScaleType();
    
}
function setScaleNote() {
    const scaleNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const scaleNote = Math.ceil(Math.random() * 7) - 1;
    document.getElementById('scaleNote').innerHTML = scaleNotes[scaleNote];
}
function setKeySignature() {
    const keySignatures = [' Natural', ' Flat', ' Sharp'];
    const keySignature = Math.ceil(Math.random() * 3) - 1;
    document.getElementById('keySignature').innerHTML = keySignatures[keySignature];
}
function setScaleType() {
    const scaleTypes = [' Major', ' Minor'];
    const scaleType = Math.ceil(Math.random() * 2) - 1;
    document.getElementById('scaleType').innerHTML = scaleTypes[scaleType];
}

const htmlScale = `<div class="oneScale"><div class="noteC whiteNote"></div>
                <div class="noteCSharp blackNote"></div>
                <div class="noteD whiteNote"></div>
                <div class="noteDSharp blackNote"></div>
                <div class="noteE whiteNote"></div>
                <div class="noteF whiteNote"></div>
                <div class="noteFSharp blackNote"></div>
                <div class="noteG whiteNote"></div>
                <div class="noteGSharp blackNote"></div>
                <div class="noteA whiteNote"></div>
                <div class="noteASharp blackNote"></div>
                <div class="noteB whiteNote"></div></div>`;

function drawScales() {
  const pianoElement = document.getElementById('piano');
  for (let i = 0; i < 2; i++) {
    pianoElement.innerHTML += htmlScale;
  }
}

window.addEventListener('load', () => {
  drawGammes();
})