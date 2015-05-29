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
