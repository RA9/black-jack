/* 
  @author: Carlos S. Nah
  @title: Black Jack Game
  @version: v0.1.0
  @date: 05/26/19
 */
 
/* **************************************
*                                    *
*     // Card Variables              *
*                                    *
**************************************
*/
/****/ let suits = ["Hearts", "Spades", "Daimonds", "Clubs"]
/****/ let values = ["King", "Queen", "Jack", "Ace","Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]
/****/


// Game variables
let gameStarted = false
let gameOver = false
let playerWon = false
let dealerCards = []
let playerCards = []
let deck = []
let dealerScore = 0
let playerScore = 0

  
// DOM Variables
let textArea = document.getElementById("text-area")
let newGame = document.getElementById("new-game")
let hit = document.getElementById("hit")
let stay = document.getElementById("stay")


// Hide the below buttons and show the status 
hit.style.display = "none";
stay.style.display = "none";
showStatus();


// If user click new game button call the event listener
newGame.addEventListener("click", function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  
  deck = createCardDeck();
  shuffleCards(deck)
  
   
  dealerCards = [ getNextCard(), getNextCard() ];
  playerCards = [ getNextCard(), getNextCard() ];
  newGame.style.display = "none";
  hit.style.display = "inline";
  stay.style.display = "inline";
  showStatus();
});

hit.addEventListener('click', function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stay.addEventListener('click', function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});


 // Define a function to create the cards deck
/****/ function createCardDeck(){
   let cardDeck = [];
   for(let i = 0; i < suits.length; i++) {
   for(let j = 0; j < values.length; j++) {
    let card = {
      suit: suits[i],
      value: values[j]
    }
    cardDeck.push(card)
   } 
 } 
 return cardDeck;
 }
 
 
 // Define a function to select a card from the top of the deck
 function getNextCard(){
   return deck.shift()
 }
 
 
 function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

 
 // Create a function call getCardNumericValues that get the card numeric value
 function getCardNumericValues(card) {
  switch(card.value) {
   case "Ace":
    return 1;
   case  "Two":
     return 2;
   case "Three":
     return 3;
   case "Four":
     return 4;
   case "Five":
     return 5;
   case "Six":
     return 6;
   case "Seven":
     return 7;
   case "Eight":
     return 8;
   case "Nine":
     return 9;
   default:
     return 10;
  }
 }
 // Get the score of each player
 function getCardScore(card) {
   let score = 0;
   let hasAce = false;
   for(let i = 0; i < card.length; i++) {
    score += getCardNumericValues(card[i]);
    if(card[i].value === "Ace") {
      hasAce = true;
    }
   }
   
   if(hasAce && score + 10 <= 21) {
     return score + 10;
   }
   return score;
 }
 
 function updateScores() {
  playerScore = getCardScore(playerCards);
  dealerScore = getCardScore(dealerCards);
 }
 

function shuffleCards(decks) {
  for(let indx = 0; indx < decks.length; indx++) {
   let swapindx = Math.trunc(Math.random() * decks.length);
   let tmp = decks[swapindx];
   decks[swapindx] = decks[indx]
   decks[indx] = tmp
  }
 }
 



function checkForEndOfGame() {
  
  updateScores();
  
  if (gameOver) {
    // let dealer take cards
    while(dealerScore < playerScore 
          && playerScore <= 21 
          && dealerScore <= 21) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }
  
  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  }
  else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  }
  else if (gameOver) {
    
    if (playerScore > dealerScore) {
      playerWon = true;
    }
    else {
      playerWon = false;
    }
  }
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerHTML = 'Welcome to Blackjack!<br>The game is played by a user against a dealer. Each player is given 2 cards each at random from a shuffled deck of cards.The objective of the game is to reach 21 points or get close. With the person going over losing the game.';
    return;
  }
  
  let dealerCardString = '';
  for (let i=0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  
  let playerCardString = '';
  for (let i=0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }
  
  updateScores();
   
  textArea.innerText = 
    'Dealer has:\n' +
    dealerCardString + 
    '(score: '+ dealerScore  + ')\n\n' +
    
    'Player has:\n' +
    playerCardString +
    '(score: '+ playerScore  + ')\n\n';
  
  if (gameOver) {
    if (playerWon) {
      textArea.innerText += "YOU WIN!";
    }
    else {
      textArea.innerText += "DEALER WINS";
    }
    newGame.style.display = 'inline';
    hit.style.display = 'none';
    stay.style.display = 'none';
  }

}


