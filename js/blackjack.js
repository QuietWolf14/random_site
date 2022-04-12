let card = 0
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById("cards-el")


function startGame() {
    sum = 0
    isAlive = true
    
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "Sum: " + sum

    outcome()
    
}

function newCard() {
    if (isAlive) {
        card =  Math.floor(Math.random() * 12) + 2
        sum += card
        
        cardsEl.textContent += " " + card
        sumEl.textContent = "Sum: " + sum

        outcome()
    }
}

function outcome() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
        isAlive = false
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}