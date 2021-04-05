
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
    window.scaleType = Math.ceil(Math.random() * 2) - 1;
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

const majorScalePattern = [0, 2, 4, 5, 7, 9, 11];
const minorScalePattern = [0, 2, 3, 5, 7, 8, 10];

function highlightScales() {
    //clearPreviousHighlights();
    //const keys = getElementsWithNoteClass(notes);
    const keys = getElementsWithNoteClass();

    const getIdxFirstNote = getFirstElementIdxInScale(keys);
    console.log(getIdxFirstNote);
    highlightKeys(keys);

    /*- Enlever les previous highlights
      - Aller chercher la note de la gamme
      - Associer cette note avec son Pattern
      - Donenr le highlight aux bonnes touches*/

}

function getFirstElementIdxInScale(keys) {
  // exemple pour c naturel
  notesPossible = ['noteC', 'noteCSharp', 'noteDFlat', 'noteD', 'noteDSharp', 'noteEFlat', 'noteE', 'noteF', 'noteFSharp', 'noteGFlat', 'noteG', 'noteGSharp', 'noteAFlat', 'noteA', 'noteASharp', 'noteBFlat', 'noteB'];
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

function highlightKeys(keys) {
  const scaleIndexs = [];
  if(scaleType == 0){
    makeScaleArray(majorScalePattern, scaleIndexs, keys);
  } else {
    makeScaleArray(minorScalePattern, scaleIndexs, keys);
  } 
  console.log(scaleIndexs);
  const scaleClasses = ['noteC', 'noteCSharp', 'noteD', 'noteDSharp', 'noteE', 'noteF', 'noteFSharp', 'noteG', 'noteGSharp', 'noteA', 'noteASharp', 'noteB'];
  const finalScale = [];
  for (let i = 0; i < scaleIndexs.length; i++){
    finalScale.push(scaleClasses[scaleIndexs[i]]);
  }
  console.log(finalScale);
  for (let i = 0; i < 2; i++)
  for (let j = 0; j < finalScale.length; j++){
    const highlightedKey = document.getElementsByClassName(finalScale[j]);
    console.log(highlightedKey);
    highlightedKey[i].style.backgroundColor = "orange";
  }
}

function makeScaleArray(necessaryPattern, scale, keys){
  const firstValue = getFirstElementIdxInScale(keys);
  for (let i = 0; i < necessaryPattern.length; i++){
    if((necessaryPattern[i] + firstValue) >= 12){
      scale.push(firstValue + necessaryPattern[i] - 12);
    } else {
      scale.push(firstValue + necessaryPattern[i]);
    }
  }
}
