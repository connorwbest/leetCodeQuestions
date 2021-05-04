const testSentence = "thequickbrownfoxjumpsoverthelazydog";

var checkIfPangram = function(sentence) {
  var lettersFound = [];
    for(var i =0; i<sentence.length; i++) {
        if(lettersFound.includes(sentence[i]) == false){
          lettersFound.push(sentence[i])
        }
    }
  
    if(lettersFound.length == 26) {
      return true;
    } else {
      return false;
    }
};

checkIfPangram(testSentence);

