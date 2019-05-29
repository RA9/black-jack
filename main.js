/* 
  @author: Carlos S. Nah
  @title: Black Jack Game
  @version: v0.1.0
  @date: 05/26/19
 */
 
 let cards = []
 let playerCards = [] // Players card array
 let deck = []
 let suits = ["Hearts", "Spades", "Daimonds", "Clubs"]
 
 let values = ["King", "Queen", "Jack", "Ace","Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]
 
 for(let i = 0; i <= 52; i++) {
   cards[i] = Math.random(suits[i], values[i])
 } 
 
 // Define a function to create the cards deck
 function createCardDeck(){
   for(let i = 0; i <= cards.length; i++) {
     deck.push(i)
   }
   return deck
 }
 
 // Define a function to select a card from the top of the deck
 function selectTopCard(){
   let card = creatCardDeck()
   let randomNum = Math.random(1, 52)
   let topCard = 0
   if(!card[-1]) {
    topCard += card[randomNum]
   }
   return topCard
 }
 
 playerCards.push(selectTopCard)
 playerCards.push(selectTopCard)
 console.log(playerCards)
 
 console.log("Welcome to the world of Black Jack a game that amuse the auidence with much fun.")
 
 console.log(cards[0])
 console.log(cards[1])