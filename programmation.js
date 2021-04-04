
function generateScale() {
    setScaleNote();
    setScaleType();
    highlightScales();
}
function setScaleNote() {
    const scaleNotes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
    console.log(scaleNotes);
    window.scaleNote = Math.ceil(Math.random() * 17) - 1;
    document.getElementById('scaleNote').innerHTML = scaleNotes[scaleNote];
    console.log(scaleNote);
}
function setScaleType() {
    const scaleTypes = [' Major', ' Minor'];
    const scaleType = Math.ceil(Math.random() * 2) - 1;
    document.getElementById('scaleType').innerHTML = scaleTypes[scaleType];
}

const htmlScale = `<div class="oneScale"><div class="noteC whiteNote note"></div>
                <div class="noteCSharp noteDFlat blackNote note"></div>
                <div class="noteD whiteNote note"></div>
                <div class="noteDSharp noteEFlat blackNote note"></div>
                <div class="noteE whiteNote note"></div>
                <div class="noteF whiteNote note"></div>
                <div class="noteFSharp noteGFlat blackNote note"></div>
                <div class="noteG whiteNote note"></div>
                <div class="noteGSharp noteAFlat blackNote note"></div>
                <div class="noteA whiteNote note"></div>
                <div class="noteASharp noteBFlat blackNote note"></div>
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
    const keys = getElementsWithNoteClass();

    const getIdxFirstNote = getFirstElementIdxInScale(keys);
    console.log(getIdxFirstNote);
    //highlightKeys();

    /*- Enlever les previous highlights
      - Aller chercher la note de la gamme
      - Associer cette note avec son Pattern
      - Donenr le highlight aux bonnes touches*/

}

function getFirstElementIdxInScale(keys) {
  // exemple pour c naturel
  const notesPossible = ['noteC', 'noteCSharp', 'noteDFlat', 'noteD', 'noteDSharp', 'noteEFlat', 'noteE', 'noteF', 'noteFSharp', 'noteGFlat', 'noteG', 'noteGSharp', 'noteAFlat', 'noteA', 'noteASharp', 'noteBFlat', 'noteB'];
  console.log(scaleNote);
  console.log(notesPossible[scaleNote]);
  return keys.findIndex(k => k.classList.contains(notesPossible[scaleNote]));
}

function getElementsWithNoteClass() {
  const keys = document.getElementsByClassName("note");
  const keysArray = convertNodeListToArray(keys);
  console.log(keysArray);
  return keysArray;
}

function convertNodeListToArray(nodeList) {
  const array = [];
  for (let i = 0; i < nodeList.length; i++) {
    array.push(nodeList[i]);
  }
  return array;
}
