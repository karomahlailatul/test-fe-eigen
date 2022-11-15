const sentence = "Saya sangat senang mengerjakan soal algoritma";

function findLongestWord(str) {
  var index = 0;
  var indexStr = str.split(" ");
  for (var i = 0; i < indexStr.length; i++) {
    if (indexStr[i].length > index) {
      str = indexStr[i];
      index = indexStr[i].length;
    }
  }
  return str;
}

const str = findLongestWord(sentence);
console.log(`${str}: ${str.length} character`);
