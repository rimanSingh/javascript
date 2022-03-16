let player = {
    name : "ABC",
    chips : 150
}
let cards = []
let sumOfCards = 0
let blackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-pl")
//let sumEl= document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

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
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()

    cards = [firstcard, secondcard]
    sumOfCards = firstcard + secondcard
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
        blackJack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive ===true && blackJack===false) {
        let newCard = getRandomCard()
        sumOfCards += newCard
        cards.push(newCard)
        console.log(cards)
        game()
    }
}