/* 
  @author: Carlos S. Nah
  @title: Black Jack Game
  @version: v0.1.0
  @date: 05/26/19
 */
 
 
 let deck = []
 let suits = ["Hearts", "Spades", "Daimonds", "Clubs"]
 
 let values = ["King", "Queen", "Jack", "Ace","Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]
 
 
 // Define a function to create the cards deck
 function createCardDeck(){
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
 return deck;
 }
 let deck = createCardDeck();
 // Define a function to select a card from the top of the deck
 function selectTopCard(){
   return deck.shift()
 }
 
let playerCards = [selectTopCard(),selectTopCard()]// Players card array
 console.log(playerCards)
 
 console.log("Welcome to the world of Black Jack a game that amuse the auidence with much fun.")
 
 console.log(cards[0])
 console.log(cards[1])