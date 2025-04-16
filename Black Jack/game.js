const generateDeck = () => {
const deck = []
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

for(const card of cards){
    for(const suit of suits){
    deck.push({Card: card, Suit: suit})

    }
}
return deck
}
const myDeck = generateDeck()

const drawCard = (deck) => {
    let randomNum = Math.floor(Math.random() * deck.length)
    const card= deck[randomNum]
    deck.splice(randomNum, 1)
    return card
    
}
const playerHand = []
const dealerHand = []

 playerHand.push(drawCard(myDeck))
 playerHand.push(drawCard(myDeck))
 dealerHand.push(drawCard(myDeck))
 dealerHand.push(drawCard(myDeck))

const checkScore = (hand) => {
    let total = 0
    for(const cards of hand){
        if(cards.Card === 'king' || cards.Card === 'Queen' || cards.Card === 'Jack'){
            total += 10
    }else if(cards.Card === 'Ace'){
        total += 1
    }else{
        total += Number(cards.Card)
    }
}
console.log(total)
}
console.log(playerHand)
checkScore(playerHand)