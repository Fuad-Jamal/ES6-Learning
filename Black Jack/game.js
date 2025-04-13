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

 let myCard = drawCard(myDeck)
