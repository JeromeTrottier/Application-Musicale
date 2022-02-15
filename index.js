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
const scaleTypes = [" Major", " Minor", " Harmonic Minor", " Melodic Minor"];

const NUMBER_OF_SCALES_IN_PIANO = 2;
const NUMBER_OF_KEYS_IN_CHROMATIC_SCALE = 12;
const NUMBER_OF_KEYS_IN_CHORD_PATTERN = 3;

//SCALE PATTERNS
const majorScalePattern = [0, 2, 4, 5, 7, 9, 11];
const minorScalePattern = [0, 2, 3, 5, 7, 8, 10];
const melodicMinorScalePattern = [0, 2, 3, 5, 7, 9, 11];
const harmonicMinorScalePattern = [0, 2, 3, 5, 7, 8, 11];

//CHORD PATTERNS
const majorChordsPattern = [0, 4, 7];
const minorChordsPattern = [0, 3, 7];
const diminishedChordsPattern = [0, 3, 6];
const augmentedChordsPattern = [0, 4, 8];

//SCALE CHORDS PATTERN
const MajorScaleChordsPattern = [
  majorChordsPattern,
  minorChordsPattern,
  minorChordsPattern,
  majorChordsPattern,
  majorChordsPattern,
  minorChordsPattern,
  diminishedChordsPattern,
];

const MinorScaleChordsPattern = [
  minorChordsPattern,
  diminishedChordsPattern,
  majorChordsPattern,
  minorChordsPattern,
  minorChordsPattern,
  majorChordsPattern,
  majorChordsPattern,
];

const HarmonicMinorScaleChordsPattern = [
  minorChordsPattern,
  diminishedChordsPattern,
  augmentedChordsPattern,
  minorChordsPattern,
  majorChordsPattern,
  majorChordsPattern,
  diminishedChordsPattern,
];

const MelodicMinorScaleChordsPattern = [
  minorChordsPattern,
  minorChordsPattern,
  augmentedChordsPattern,
  majorChordsPattern,
  majorChordsPattern,
  diminishedChordsPattern,
  diminishedChordsPattern,
];


const scaleTypesIndex = {
  major: 0,
  minor: 1,
  harmonicMinor: 2,
  melodicMinor: 3
};

/*------------------------------------------------------------------*/
/*------------------------LOADING PIANO HTML------------------------*/
/*------------------------------------------------------------------*/

window.addEventListener("load", () => {
  // Load le HTML nécessaire pour afficher les pianos
  drawPianos();
});

// Insère le HTML précédemment défini dans index.html pour la gamme et les accords
function drawPianos() {
  drawScalePiano();
  drawChordPianos();
}

function drawScalePiano() {
  // HTML de une scale (note C à B)
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
  const pianoElement = document.getElementById("piano");
  for (let i = 0; i < 2; i++) {
    pianoElement.innerHTML += htmlScale;
  }
}

function drawChordPianos() {
  // HTML d'une scale pour représenter les accords
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
  // Insérer le HTML dans index.html
  littlePianosEl = document.getElementsByClassName("smallPiano");
  for (let i = 0; i < littlePianosEl.length; i++) {
    for (let j = 0; j < NUMBER_OF_SCALES_IN_PIANO; j++) {
      littlePianosEl[i].innerHTML += htmlChordsScale;
    }
  }
}







/*------------------------------------------------------------------*/
/*----------------------GENERATE CHOSEN SCALE-----------------------*/
/*------------------------------------------------------------------*/


function generateChosenScale() {

  getScaleInformation();

  highlightScales();

  setChords();
}


function getScaleInformation() {

  const chosenScaleType = getChosenScaleType();
  setScaleType(chosenScaleType);

  const chosenNote = getChosenNote();
  const chosenNoteType = getChosenNoteType();
  setNote(chosenNote, chosenNoteType);
}

function getChosenScaleType() {
  return document.querySelector("#scaleTypeOptions").value;
}

function setScaleType(scaleTypeString) {

  window.scaleType = scaleTypes.indexOf(scaleTypeString);
  document.querySelector("#scaleType").innerHTML = scaleTypeString;
}

function getChosenNote() {
  return document.querySelector("#noteOption").value;
}
function getChosenNoteType() {
  return document.querySelector("#noteTypeOption").value;
}

function setNote(noteString, noteTypeString) {
  const sourceNote = noteString + noteTypeString
  window.scaleNote = scaleNotes.indexOf(sourceNote);
  document.querySelector("#scaleNote").innerHTML = sourceNote;
}

/*------------------------------------------------------------------*/
/*----------------------GENERATE RANDOM SCALE-----------------------*/
/*------------------------------------------------------------------*/

function generateRandomScale() {
  // Aller chercher la note source de la gamme
  generateScaleNote();

  // Aller chercher le type de la gamme (mineur ou majeur)
  generateScaleType();

  // Highlight la gamme choisie
  highlightScales();

  // Highlight les accords de la gamme
  setChords();
}

function generateScaleNote() {
  window.scaleNote = Math.ceil(Math.random() * scaleNotes.length) - 1;
  document.querySelector("#scaleNote").innerHTML = scaleNotes[scaleNote];
}

function generateScaleType() {
  window.scaleType = Math.ceil(Math.random() * scaleTypes.length) - 1;
  document.querySelector("#scaleType").innerHTML = scaleTypes[scaleType];
}

function highlightScales() {
  //Enlever la couleur des ancienes générations
  clearPreviousHighlights(".whiteNote", ".blackNote");

  //Aller chercher la note de la gamme
  const keys = getElementsWithNoteClass();

  // Highlight les notes de la gamme
  highlightKeys(keys);
}

function clearPreviousHighlights(whiteKeyClass, blackKeyClass) {

  //Sélectionner les notes
  const whiteKeysToReset = document.querySelectorAll(whiteKeyClass);
  const blackKeysToReset = document.querySelectorAll(blackKeyClass);

  // Appliquer une nouvelle couleur aux notes et afficher l'animation par CSS
  for (let i = 0; i < whiteKeysToReset.length; i++) {
    whiteKeysToReset[i].style.background =
      "linear-gradient(to bottom, rgb(29, 29, 29) 50%, orange 50%)";
    whiteKeysToReset[i].style.backgroundSize = "100% 200%";
    whiteKeysToReset[i].style.animation =
      "transitionHighlightedKeysReset .7s 1 ease-in-out forwards";
  }
  for (let i = 0; i < blackKeysToReset.length; i++) {
    blackKeysToReset[i].style.background =
      "linear-gradient(to bottom, rgb(29, 29, 29) 50%, orange 50%)";
    blackKeysToReset[i].style.backgroundSize = "100% 200%";
    blackKeysToReset[i].style.animation =
      "transitionHighlightedKeysReset .7s 1 ease-in-out forwards";
  }
}

function getElementsWithNoteClass() {
  const keysNodeList = document.querySelectorAll(".note");
  const keysArray = convertNodeListToArray(keysNodeList);
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

  const keyIndexs = getScaleKeysIndexs(keys);

  finalScale = getFinalScaleKeysClasses(keyIndexs);

  const sourceNote = document.querySelectorAll(finalScale[0]);
  for (let i = 0; i < NUMBER_OF_SCALES_IN_PIANO; i++)
    for (let j = 0; j < finalScale.length; j++) {
      const highlightedKey = document.querySelectorAll(finalScale[j]);
      highlightedKey[i].style.animation =
        "transitionHighlightedKeys .7s 1 ease-in-out forwards";
      sourceNote[i].style.background =
        "linear-gradient(to bottom, rgb(29, 29, 29) 50%, rgb(0, 199, 139) 50%)";
      sourceNote[i].style.backgroundSize = "100% 200%";
    }
}

function getScaleKeysIndexs(keys) {
  const scaleIndexs = [];
  if (scaleType == 0) {
    makeScaleArray(majorScalePattern, scaleIndexs, keys);
  } else if (scaleType == 1) {
    makeScaleArray(minorScalePattern, scaleIndexs, keys);
  } else if (scaleType == 2) {
    makeScaleArray(harmonicMinorScalePattern, scaleIndexs, keys);
  } else {
    makeScaleArray(melodicMinorScalePattern, scaleIndexs, keys);
  }
  return scaleIndexs;
}

function getFinalScaleKeysClasses(pianoScaleKeyIndexs) {
  const finalScaleClasses = [];
  const scaleClasses = [
    ".noteC",
    ".noteCSharp",
    ".noteD",
    ".noteDSharp",
    ".noteE",
    ".noteF",
    ".noteFSharp",
    ".noteG",
    ".noteGSharp",
    ".noteA",
    ".noteASharp",
    ".noteB",
  ];
  for (let i = 0; i < pianoScaleKeyIndexs.length; i++) {
    finalScaleClasses.push(scaleClasses[pianoScaleKeyIndexs[i]]);
  }
  return finalScaleClasses;
}

function makeScaleArray(necessaryPattern, scale, keys) {
  //Get note source de la gamme
  const firstValue = getFirstElementIdxInScale(keys);
  for (let i = 0; i < necessaryPattern.length; i++) {
    if (necessaryPattern[i] + firstValue >= NUMBER_OF_KEYS_IN_CHROMATIC_SCALE) {
      scale.push(firstValue + necessaryPattern[i] - NUMBER_OF_KEYS_IN_CHROMATIC_SCALE);
    } else {
      scale.push(firstValue + necessaryPattern[i]);
    }
  }
}

function getFirstElementIdxInScale(keys) {
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

  return keys.findIndex((k) => k.classList.contains(notesPossible[scaleNote]));
}







function setChords() {

  let arrayChordsIndexs = [];
  const ScaleChordsPattern = getScaleChordsPattern();

  getAllChordsIndexs(arrayChordsIndexs, ScaleChordsPattern);

  const allChordsKeysStrings = [];
  getAllChordsClasses(arrayChordsIndexs, allChordsKeysStrings);

  drawChords(allChordsKeysStrings);

  const chordsKeysIndexs = getFirstIndexOfEachChord(arrayChordsIndexs);
  const chordKeys = setKeyOfEachChord(chordsKeysIndexs);
  displayKeyOfEachChord(chordKeys);
  const typeOfChords = getTypeOfEachChord();
  displayTypeOfEachChord(typeOfChords);
}

function getScaleChordsPattern() {
  let ScaleChordsPattern;
  if (scaleType === scaleTypesIndex.major) {
    ScaleChordsPattern = MajorScaleChordsPattern;
  } else {
    ScaleChordsPattern = MinorScaleChordsPattern;
  }
  return ScaleChordsPattern
}

function getAllChordsIndexs(arrayChordsIndexs, ScaleChordsPattern) {
  const scaleIndexs = getScaleKeysIndexs(getElementsWithNoteClass());
  for (let i = 0; i < scaleIndexs.length; i++) {
    let scaleKeysIndexes = [];
    for (let j = 0; j < NUMBER_OF_KEYS_IN_CHORD_PATTERN; j++) {
      if (scaleIndexs[i] + ScaleChordsPattern[i][j] >= NUMBER_OF_KEYS_IN_CHROMATIC_SCALE) {
        scaleKeysIndexes.push(scaleIndexs[i] + ScaleChordsPattern[i][j] - NUMBER_OF_KEYS_IN_CHROMATIC_SCALE);
      } else {
        scaleKeysIndexes.push(scaleIndexs[i] + ScaleChordsPattern[i][j]);
      }
    }
    arrayChordsIndexs.push(scaleKeysIndexes);
  }
}

function getAllChordsClasses(arrayChordsIndexs, allChordsKeysStrings) {
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
  //const allChordsKeysStrings = [];
  for (let i = 0; i < arrayChordsIndexs.length; i++) {
    let arrayChordsString = [];
    for (let j = 0; j < 3; j++) {
      arrayChordsString.push(scaleClasses[arrayChordsIndexs[i][j]]);
    }
    allChordsKeysStrings.push(arrayChordsString);
  }
}

function drawChords(allChordsKeysStrings) {
  const smallPianoEl = document.getElementsByClassName("smallPiano");
  clearPreviousHighlights(".smallWhiteNote", ".smallBlackNote");
  for (let i = 0; i < allChordsKeysStrings.length; i++) {
    for (let w = 0; w < allChordsKeysStrings[i].length; w++) {
      for (let j = 0; j < 2; j++) {
        let highlightedKeyChord = smallPianoEl[i].getElementsByClassName(
          allChordsKeysStrings[i][w]
        );
        let keyOfTheChord = smallPianoEl[i].getElementsByClassName(
          allChordsKeysStrings[i][0]
        );
        //console.log(highlightedKeyChord);
        highlightedKeyChord[j].style.animation =
          "transitionHighlightedKeys .7s 1 ease-in-out forwards";
        keyOfTheChord[j].style.background =
          "linear-gradient(to bottom, rgb(29, 29, 29) 50%, rgb(0, 199, 139) 50%)";
        //console.log(keyOfTheChord);
        //console.log(highlightedKeyChord[j]);
        keyOfTheChord[j].style.backgroundSize = "100% 200%";
      }
    }
  }
}

function getFirstIndexOfEachChord(arrayChordsIndexs) {
  const firstIndexs = [];
  console.log(arrayChordsIndexs);

  for (let i = 0; i < arrayChordsIndexs.length; i++) {
    firstIndexs.push(arrayChordsIndexs[i][0]);
  }
  return firstIndexs;
}

function setKeyOfEachChord(chordsKeysIndexs) {
  const chordKeys = [];
  const keysInScaleSharp = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const keysInScaleFlat = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];
  for (let i = 0; i < chordsKeysIndexs.length; i++) {
    chordKeys.push(keysInScaleSharp[chordsKeysIndexs[i]]);
  }
  return chordKeys;
}
function displayKeyOfEachChord(chordKeys) {
  const spanForKeyChordEl = document.getElementsByClassName("chordNote");
  for (let i = 0; i < chordKeys.length; i++) {
    spanForKeyChordEl[i].innerHTML = chordKeys[i];
  }
}
function getTypeOfEachChord() {
  const majorScaleChords = [
    " Major",
    " Minor",
    " Minor",
    " Major",
    " Major",
    " Minor",
    " Diminished",
  ];
  const minorScaleChords = [
    " Minor",
    " Diminished",
    " Major",
    " Minor",
    " Minor",
    " Major",
    " Major",
  ];
  let typeOfChords;
  if (scaleType === scaleTypesIndex.major) {
    typeOfChords = majorScaleChords;
  } else {
    typeOfChords = minorScaleChords;
  }
  return typeOfChords;
}
function displayTypeOfEachChord(typeOfChords) {
  const spanForChordTypeEl = document.getElementsByClassName("chordType");
  for (let i = 0; i < typeOfChords.length; i++) {
    spanForChordTypeEl[i].innerHTML = typeOfChords[i];
  }
}
