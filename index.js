let sum = 0;
let cards = [];

let player = {
	name: '',
	chips: 100,
};

let hasBlackJack = false;
let isAlive = true;
let hasGameStarted = false;

let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let playerEl = document.getElementById('player-el');

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;

	if (randomNumber === 1) {
		return 11;
	} else if (randomNumber > 10) {
		return 10;
	} else {
		return randomNumber;
	}
}

function renderGame() {
	cardsEl.textContent = 'Cards: ';

	for (let i = 0; i < cards.length; i += 1) {
		cardsEl.textContent += cards[i] + ' ';
	}

	sumEl.textContent = 'Sum: ' + sum;

	if (sum < 21) {
		message = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		message = "Wohoo! You've got BlackJack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}

	messageEl.textContent = message;
}

function startGame() {
	if (player.chips >= 20 && player.name !== '') {
		let firstCard = getRandomCard();
		let secondCard = getRandomCard();
		sum = firstCard + secondCard;
		cards = [firstCard, secondCard];
		player.chips -= 20;
		playerEl.textContent = player.name + ': $' + player.chips;

		isAlive = true;
		renderGame();
		hasGameStarted = true;
	} else if (player.chips < 20) {
		alert('Add More Chips!');
	} else {
		alert('Please Enter Your Name To Start The Game');
	}
}

function newCard() {
	if (isAlive === true && hasBlackJack === false && hasGameStarted) {
		let card = getRandomCard();
		cards.push(card);
		sum += card;
		renderGame();
	} else {
        alert("Click On Start Game Button")
    }
}

function moreChips() {
	if (player.chips <= 20) {
		player.chips += 50;
		playerEl.textContent = player.name + ': $' + player.chips;
	} else {
        alert(`You Have ${player.chips} chips left!`)
    }
}

function addName() {
	const name = document.getElementById('playername-el').value;
	if (player.chips >= 100 && name.trim() !== '') {
		player.name = name;
		playerEl.textContent = player.name + ': $' + player.chips;
	} else {
		alert('Please Enter Your Name To Start The Game!');
	}
}
