var wordReplace = function(sentence, findWord, replaceWord) {
  var sentenceArray = sentence.split(" ");

  sentenceArray.forEach(function(word,index) {
    if (word === findWord) {
      sentenceArray[index] = replaceWord;
    }
  });

  sentence = sentenceArray.join(" ");
  return sentence;
}
