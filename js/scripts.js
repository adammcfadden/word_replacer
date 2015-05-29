var wordReplace = function(sentence, findWord, replaceWord) {
  var sentenceArray = sentence.split(" ");

  sentenceArray.forEach(function(word,index) {
    var wordMinusPunctuation = word.slice(0, (word.length - 1))
    if (word === findWord) {
      sentenceArray[index] = replaceWord;
    } else if (wordMinusPunctuation === findWord) {
      sentenceArray[index] = (replaceWord + word.slice(-1));
    }
  });

  sentence = sentenceArray.join(" ");
  return sentence;
}


$(document).ready(function() {
  $("#word_replace").submit(function(event) {
    var sentence = ($("input#sentence_input").val());
    var findWord = ($("input#find_input").val());
    var replaceWord = ($("input#replace_input").val());
    var output = wordReplace(sentence, findWord, replaceWord);
    $(".output").text(output);
    $("#result").slideDown("slow");
    event.preventDefault();;
  });
});
