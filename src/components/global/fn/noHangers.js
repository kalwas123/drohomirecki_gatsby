const noHangers = function (text) {
  var lettersToReplace = [
    "a",
    "i w",
    "i",
    "o",
    "u",
    "w",
    "z",
    "A",
    "I",
    "O",
    "U",
    "W",
    "Z",
  ];
  var textReplace = text;
  var arrayLength = lettersToReplace.length;
  for (var i = 0; i < arrayLength; i++) {
    var textSplit = textReplace.split(" " + lettersToReplace[i] + " ");
    var textReplace = textSplit.join(" " + lettersToReplace[i] + "\u00A0");
  }
  return textReplace;
};

export default noHangers;
