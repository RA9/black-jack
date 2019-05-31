/* 
  @author: Carlos S. Nah
  @title: Black Jack Game
  @version: v0.1.0
  @date: 05/26/19
 */
 
 
 // Card Variables
 
/****/ let suits = ["Hearts", "Spades", "Daimonds", "Clubs"]
/****/ let values = ["King", "Queen", "Jack", "Ace","Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]
/****/
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
 
 let decks = createCardDeck();
 
 // Define a function to select a card from the top of the deck
 function selectTopCard(){
   return decks.shift()
 }
 
 function logCardString(card) {
   return card.value + " of "+ card.suit
 }
 
let playerCards = [selectTopCard(),selectTopCard()]// Players card array
 //console.log(playerCards)
 
 console.log("Welcome to the world of Black Jack a game that amuse the auidence with much fun.")
 
 
 console.log("You are a dealt:")
 console.log("  " + logCardString(playerCards[0]))
 console.log("  " + logCardString(playerCards[1]))
 
 
// DOM Variables
let textArea = document.getElementById("text-area")
let newGame = document.getElementById("new-game")
let hit = document.getElementById("hit")
let stay = document.getElementById("stay")


// Game Variables

hit.style.display = "none";
stay.style.display = "none";

// if user click new game button call the event listener
newGame.addEventListener("click", function() {
  textArea.innerText = "Starting...";
  newGame.style.display = "none";
  hit.style.display = "inline";
  stay.style.display = "inline";
})

 
 