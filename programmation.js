
function generateScale() {

    setScaleNote();
    setKeySignature();
    setScaleType();
    
}
function setScaleNote() {
    const scaleNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const scaleNote = Math.ceil(Math.random() * 7) - 1;
    document.getElementById('scaleNote').innerHTML = scaleNotes[scaleNote];
    console.log(scaleNote);
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

const htmlScale = `<div class="oneScale"><div class="noteC whiteNote note"></div>
                <div class="noteCSharp blackNote note"></div>
                <div class="noteD whiteNote note"></div>
                <div class="noteDSharp blackNote note"></div>
                <div class="noteE whiteNote note"></div>
                <div class="noteF whiteNote note"></div>
                <div class="noteFSharp blackNote note"></div>
                <div class="noteG whiteNote note"></div>
                <div class="noteGSharp blackNote note"></div>
                <div class="noteA whiteNote note"></div>
                <div class="noteASharp blackNote note"></div>
                <div class="noteB whiteNote note"></div></div>`;

function drawScales() {
  const pianoElement = document.getElementById('piano');
  for (let i = 0; i < 2; i++) {
    pianoElement.innerHTML += htmlScale;
  }
}

window.addEventListener('load', () => {
  drawScales();
})

const majorScalePattern = [2, 2, 1, 2, 2, 2, 1];
const minorScalePattern = [2, 1, 2, 2, 1, 2, 2];

function highlightScales() {
    //clearPreviousHighlights();
    //const keys = getElementsWithNoteClass(notes);
    getScaleNote();
    //const getIdxFirstNote = getFirstElementIdxInScale();
    //highlightKeys();

    /*- Enlever les previous highlights
      - Aller chercher la note de la gamme
      - Associer cette note avec son Pattern
      - Donenr le highlight aux bonnes touches*/
    
}
function getScaleNote() {
    const keys = document.getElementsByClassName("note");
    console.log(keys[scaleNote]);
}
/*function getElementsWithNoteClass(notes) {
    notes = document.getElementsByClassName("note");
}*/