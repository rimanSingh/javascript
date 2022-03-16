let randomNumber = Math.random()

let firstcard = getRandomCard()
let secondcard = getRandomCard()

let cards = [firstcard, secondcard]
let sumOfCards = firstcard + secondcard

let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-pl")
//let sumEl= document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}


function startGame() {
    game()
}

function game() {
    cardEl.textContent = "Card: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sumOfCards
    if (sumOfCards <= 20) {
        message = "Do you want to add a new card?"
    }
    else if (sumOfCards === 21) {
        message = "You've got Blackjack!"
        blackjack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("New Card")

    let newCard = getRandomCard()
    sumOfCards += newCard
    cards.push(newCard)
    console.log(cards)
    game()

}