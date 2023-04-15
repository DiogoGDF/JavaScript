let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let count = 0;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomNumber(){
    return Math.floor(Math.random() * (11 - 2 + 1)) + 2;
}

function startGame(){ 
    cardsEl.textContent = "Cards: " + cards[count++] + " " + cards[count++];
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    let card = getRandomNumber();
    cards.push(card);
    sum += card;
    renderGame();
    cardsEl.textContent += " " + cards[count++];
}