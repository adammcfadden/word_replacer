describe("wordReplace", function(){
  var sentence = "The dog went for a walk.";
  it("will receive a sentence, and print out the sentence as entered. With no words to replace.", function() {
    expect(wordReplace(sentence, "", "")).to.equal("The dog went for a walk.");
  });

  it("will find a word within a sentence and replace that word with the given word.", function() {
    expect(wordReplace(sentence, "dog", "cat")).to.equal("The cat went for a walk.");
  });

  it("will find a word within a sentence and replace that word with the given word in multiple places.", function() {
    sentence = "The dog went for a dog walk.";
    expect(wordReplace(sentence, "dog", "cat")).to.equal("The cat went for a cat walk.");
  });

  it("will find a word within a sentence even if there is punctuation following the word, and replace that word with the given word in multiple places.", function() {
    sentence = "The dog, went for a dog, walk.";
    expect(wordReplace(sentence, "dog", "cat")).to.equal("The cat, went for a cat, walk.");
  });
});
