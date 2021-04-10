function generateScale() {
  setScaleNote();
  setScaleType();
  highlightScales();

  setChords();
}

function setScaleNote() {
  const scaleNotes = [
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
  ];
  console.log(scaleNotes);
  window.scaleNote = Math.ceil(Math.random() * 17) - 1;
  document.getElementById("scaleNote").innerHTML = scaleNotes[scaleNote];
  console.log(scaleNote);
}

function setScaleType() {
  const scaleTypes = [" Major", " Minor"];
  window.scaleType = Math.ceil(Math.random() * 2) - 1;
  document.getElementById("scaleType").innerHTML = scaleTypes[scaleType];
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

const htmlChordsScale = `<div class="oneSmallScale">
                          <div class="smallNoteC smallWhiteNote smallNote"></div>
                          <div class="smallNoteCSharp smallNoteDFlat smallBlackNote smallNote"></div>
                          <div class="smallNoteD smallWhiteNote smallNote"></div>
                          <div class="smallNoteDSharp smallNoteEFlat smallBlackNote smallNote"></div>
                          <div class="smallNoteE smallWhiteNote smallNote"></div>
                          <div class="smallNoteF smallWhiteNote smallNote"></div>
                          <div class="smallNoteFSharp smallNoteGFlat smallBlackNote smallNote"></div>
                          <div class="smallNoteG smallWhiteNote smallNote"></div>
                          <div class="smallNoteGSharp smallNoteAFlat smallBlackNote smallNote"></div>
                          <div class="smallNoteA smallWhiteNote smallNote"></div>
                          <div class="smallNoteASharp smallNoteBFlat smallBlackNote smallNote"></div>
                          <div class="smallNoteB smallWhiteNote smallNote"></div>
                          </div>`;

function drawScales() {
  const pianoElement = document.getElementById("piano");
  for (let i = 0; i < 2; i++) {
    pianoElement.innerHTML += htmlScale;
  }
  littlePianosEl = document.getElementsByClassName("smallPiano");
  for (let i = 0; i < littlePianosEl.length; i++) {
    for (let j = 0; j < 2; j++) {
      littlePianosEl[i].innerHTML += htmlChordsScale;
    }
  }
}

window.addEventListener("load", () => {
  drawScales();
});

const majorScalePattern = [0, 2, 4, 5, 7, 9, 11];
const minorScalePattern = [0, 2, 3, 5, 7, 8, 10];
const harmonicMinorScalePattern = [0, 2, 3, 5, 7, 8, 11];
const melodicMinorScalePattern = [0, 2, 3, 5, 7, 9, 11];

function highlightScales() {
  clearPreviousHighlights();
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
  notesPossible = [
    "noteC",
    "noteCSharp",
    "noteDFlat",
    "noteD",
    "noteDSharp",
    "noteEFlat",
    "noteE",
    "noteF",
    "noteFSharp",
    "noteGFlat",
    "noteG",
    "noteGSharp",
    "noteAFlat",
    "noteA",
    "noteASharp",
    "noteBFlat",
    "noteB",
  ];
  console.log(scaleNote);
  console.log(notesPossible[scaleNote]);
  return keys.findIndex((k) => k.classList.contains(notesPossible[scaleNote]));
}

function getElementsWithNoteClass() {
  const keys = document.getElementsByClassName("note");
  const keysArray = convertNodeListToArray(keys);
  //console.log(keysArray);
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
  getScaleKeysIndexs(keys);
  //console.log(scaleIndexs);

  const finalScale = [];
  getScaleKeysClasses(finalScale);
  //console.log(finalScale);

  const specialNote = document.getElementsByClassName(finalScale[0]);
  //console.log(specialNote);
  for (let i = 0; i < 2; i++)
    for (let j = 0; j < finalScale.length; j++) {
      const highlightedKey = document.getElementsByClassName(finalScale[j]);
      //console.log(highlightedKey);
      highlightedKey[i].style.animation =
        "transitionHighlightedKeys .7s 1 ease-in-out forwards";
      specialNote[i].style.background =
        "linear-gradient(to bottom, rgb(119, 119, 119) 50%, rgb(0, 199, 139) 50%)";
      //specialNote[i].style.animation = "transitionColor .7s 1 ease-in-out forwards";
      specialNote[i].style.backgroundSize = "100% 200%";
    }
}

function getScaleKeysIndexs(keys) {
  window.scaleIndexs = [];
  if (scaleType == 0) {
    makeScaleArray(majorScalePattern, scaleIndexs, keys);
  } else {
    makeScaleArray(minorScalePattern, scaleIndexs, keys);
  }
}

function getScaleKeysClasses(finalScale) {
  const scaleClasses = [
    "noteC",
    "noteCSharp",
    "noteD",
    "noteDSharp",
    "noteE",
    "noteF",
    "noteFSharp",
    "noteG",
    "noteGSharp",
    "noteA",
    "noteASharp",
    "noteB",
  ];
  for (let i = 0; i < scaleIndexs.length; i++) {
    finalScale.push(scaleClasses[scaleIndexs[i]]);
  }
}

function makeScaleArray(necessaryPattern, scale, keys) {
  const firstValue = getFirstElementIdxInScale(keys);
  for (let i = 0; i < necessaryPattern.length; i++) {
    if (necessaryPattern[i] + firstValue >= 12) {
      scale.push(firstValue + necessaryPattern[i] - 12);
    } else {
      scale.push(firstValue + necessaryPattern[i]);
    }
  }
}

function clearPreviousHighlights(
  whiteKeysVar,
  whiteKeysClass,
  blackKeysVar,
  blackKeysClass
) {
  const whiteKeysReset = document.getElementsByClassName("whiteNote");
  const blackKeysReset = document.getElementsByClassName("blackNote");
  for (let i = 0; i < whiteKeysReset.length; i++) {
    whiteKeysReset[i].style.background =
      "linear-gradient(to bottom, rgb(119, 119, 119) 50%, orange 50%)";
    whiteKeysReset[i].style.backgroundSize = "100% 200%";
    whiteKeysReset[i].style.animation =
      "transitionHighlightedKeysReset .7s 1 ease-in-out forwards";
  }
  for (let i = 0; i < blackKeysReset.length; i++) {
    blackKeysReset[i].style.background =
      "linear-gradient(to bottom, rgb(29, 29, 29) 50%, orange 50%)";
    blackKeysReset[i].style.backgroundSize = "100% 200%";
    blackKeysReset[i].style.animation =
      "transitionHighlightedKeysReset .7s 1 ease-in-out forwards";
  }
}
/* let majorScaleChords = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'];
let minorScaleChords = ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major']; */

const majorChordsPattern = [0, 4, 7];
const minorChordsPattern = [0, 3, 7];
const diminishedChordsPattern = [0, 3, 6];
const NUMBER_OF_KEYS_IN_PATTERN = 3;

const scaleTypes = {
  major: 0,
  minor: 1,
};

function setChords() {
  let arrayChordsIndexs = [];
  if (scaleType === scaleTypes.major) {
    let ScaleChordsPattern = [
      majorChordsPattern,
      minorChordsPattern,
      minorChordsPattern,
      majorChordsPattern,
      majorChordsPattern,
      minorChordsPattern,
      diminishedChordsPattern,
    ];
    //console.log(ScaleChordsPattern);
    getAllChordsIndexs(arrayChordsIndexs, ScaleChordsPattern);
  } else {
    let ScaleChordsPattern = [
      minorChordsPattern,
      diminishedChordsPattern,
      majorChordsPattern,
      minorChordsPattern,
      minorChordsPattern,
      majorChordsPattern,
      majorChordsPattern,
    ];
    //console.log(ScaleChordsPattern);
    getAllChordsIndexs(arrayChordsIndexs, ScaleChordsPattern);
  }
  console.log(arrayChordsIndexs);

  const scaleClasses = [
    "smallNoteC",
    "smallNoteCSharp",
    "smallNoteD",
    "smallNoteDSharp",
    "smallNoteE",
    "smallNoteF",
    "smallNoteFSharp",
    "smallNoteG",
    "smallNoteGSharp",
    "smallNoteA",
    "smallNoteASharp",
    "smallNoteB",
  ];
  const allChordsKeysStrings = [];
  for (let i = 0; i < arrayChordsIndexs.length; i++) {
    let arrayChordsString = [];
    for (let j = 0; j < 3; j++) {
      arrayChordsString.push(scaleClasses[arrayChordsIndexs[i][j]]);
    }
    allChordsKeysStrings.push(arrayChordsString);
  }
  console.log(allChordsKeysStrings);
  const smallPianoEl = document.getElementsByClassName("smallPiano");
  console.log(smallPianoEl);
  for (let i = 0; i < allChordsKeysStrings.length; i++) {
    for (let w = 0; w < allChordsKeysStrings[i].length; w++) {
      for (let j = 0; j < 2; j++) {
        let highlightedKeyChord = smallPianoEl[i].getElementsByClassName(
          allChordsKeysStrings[i][w]
        );
        console.log(highlightedKeyChord);
        highlightedKeyChord[j].style.animation =
          "transitionHighlightedKeys .7s 1 ease-in-out forwards";
        console.log(highlightedKeyChord[j]);
      }
    }
  }
}
function getAllChordsIndexs(arrayChordsIndexs, ScaleChordsPattern) {
  for (let i = 0; i < scaleIndexs.length; i++) {
    let scaleKeysIndexes = [];
    for (let j = 0; j < NUMBER_OF_KEYS_IN_PATTERN; j++) {
      if (scaleIndexs[i] + ScaleChordsPattern[i][j] >= 12) {
        scaleKeysIndexes.push(scaleIndexs[i] + ScaleChordsPattern[i][j] - 12);
      } else {
        scaleKeysIndexes.push(scaleIndexs[i] + ScaleChordsPattern[i][j]);
      }
      //console.log(ScaleChordsPattern[i][j]);
    }
    arrayChordsIndexs.push(scaleKeysIndexes);
    //console.log(arrayChordsIndexs);
  }
}
