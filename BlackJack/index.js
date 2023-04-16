let cards = [];
let count = 0;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cardBtn = document.getElementById("card-btn");

function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 2;
}

function startGame(){ 
    isAlive = true;
    cards[0] = getRandomNumber();
    cards[1] = getRandomNumber();
    sum = cards[0] + cards[1];
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
        cardBtn.textContent = "Game Ended!";
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomNumber();
        cards.push(card);
        sum += card;
        renderGame();
        cardsEl.textContent += " " + cards[count++];
    } else {
        cardBtn.textContent = "You have to start a new game first!";
    }
}