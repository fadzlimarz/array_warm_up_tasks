// These arrays are created when the HTML page is loaded
var englishWords = ["cat", "dog", "bird", "apple", "bunny", "one"];
var finnishWords = ["kissa", "koira", "lintu", "omena", "pupu", "yksi"];

function translateToFinnish() {
  var givenWord = document.getElementById("txtEnglishWord").value;
  givenWord = givenWord.toLowerCase();

  var outputText = "unknown word";
  var wordFound = false;

  for (
    var index = 0;
    wordFound === false && index < englishWords.length;
    index++
  ) {
    if (englishWords[index] === givenWord) {
      outputText = finnishWords[index];
      wordFound = true;
    }
  }

  document.getElementById("pOutput").innerHTML = outputText;
}

// Go back function using browser history
function goBack() {
  window.history.back();
}
