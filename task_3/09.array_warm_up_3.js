function randomizeCard() {
  var suitArray = ["c", "d", "h", "s"];
  var suitNumber = Math.floor(Math.random() * 4); // Update to include all four suits
  var cardNumber = Math.floor(Math.random() * 13) + 1;
  var imageFileName =
    "cardImages/" + suitArray[suitNumber] + cardNumber + ".gif";

  return imageFileName;
}

function checkForDuplicate(hand, imageFileName) {
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === imageFileName) {
      return true;
    }
  }

  return false;
}

function newHand() {
  var hand = ["", "", "", "", ""]; // Increase the array length to 5 cards
  var cardCount = 0;

  while (cardCount < hand.length) {
    var imageFileName = randomizeCard();
    var isDuplicate = checkForDuplicate(hand, imageFileName);

    if (isDuplicate == false) {
      hand[cardCount] = imageFileName;
      cardCount++;
    }
  }

  var cardHandDiv = document.getElementById("cardHand");

  for (var i = 0; i < hand.length; i++) {
    cardHandDiv.innerHTML += '<img src="' + hand[i] + '" alt="card image" /> ';
  }
}

newHand();

// Go back function using browser history
function goBack() {
  window.history.back();
}
