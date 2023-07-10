// computer's choice
const computerIcon = document.querySelector(".card-computer");

// player's choice
const buttons = Array.from(document.querySelectorAll(".card"));

// function to generate number from 0 -> 3
function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
	// assign every number to a choice "rock, paper, or scissors"
	switch (randomNumber) {
		case 0: {
			computerIcon.innerHTML = `<i class="fa-solid fa-hand-back-fist fa-beat"></i>`;
			return "rock";
			break;
		}
		case 1: {
			computerIcon.innerHTML = `<i class="fa-solid fa-hand fa-beat"></i>`;
			return "paper";
			break;
		}
		case 2: {
			computerIcon.innerHTML = `<i class="fa-solid fa-hand-scissors fa-beat"></i>`;
			return "scissors";
			break;
		}
	}
}
// initializing scores
let playerScore = 0;
let computerScore = 0;
// player's score element
function updateScore() {
	document.querySelector(".player").innerHTML = playerScore;
	document.querySelector(".computer").innerHTML = computerScore;
}
// loops through the buttons and adds an event listener to each one
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		roundPlay(button.id, getComputerChoice(), button);
	});
});

// remove transition function
function removeTransition(e) {
	if (e.propertyName === "transform") {
		this.classList.remove("playing");
	}
}

// loops through the buttons and remove transition
buttons.forEach((button) => {
	button.addEventListener("transitionend", removeTransition);
});
// current move element
const currentMove = document.querySelector(".move");
// current move function
function showMove(playerSelection, computerSelection, winner) {
	currentMove.innerHTML = `You chose ${playerSelection} , computer chose ${computerSelection} <br><span class="highlights"> ${winner} won!</span>`;
}
// initialize the round winner
let winner = "you";
//bgmuic

let bgmusic = document.querySelector("#bgmusic");
bgmusic.volume = 0.11;
bgmusic.play();

// the main round game-play function

function roundPlay(playerSelection, computerSelection, button) {
	// add transition class to the button
	button.classList.add("playing");
	if (computerSelection === playerSelection) {
		currentMove.innerHTML = `You chose ${playerSelection} , computer chose ${computerSelection} <br> <span class="highlights-tie">IT'S A TIE!</span>`;
	} else if (
		(computerSelection === "rock" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "scissors") ||
		(computerSelection === "scissors" && playerSelection === "rock")
	) {
		winner = "You";
		playerScore++;
		updateScore();
		showMove(playerSelection, computerSelection, winner);
	} else {
		winner = "Computer";
		computerScore++;
		updateScore();

		showMove(playerSelection, computerSelection, winner);
	}
	if (playerScore === 10 && winner === "You") {
		alert("Bruh u ok? 10 wins enough..");
	}
	if (playerScore === 20 && winner === "You") {
		alert("Bruh fr u ok?! you look addicted xD");
	}
	if (playerScore === 40 && winner === "You") {
		alert("Fine, fine you win..");
		playerScore = 0;
		computerScore = 0;
		updateScore();
	}
}
