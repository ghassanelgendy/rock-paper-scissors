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

//loops through the buttons and adds an event listener to each one
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		roundPlay(button.id, getComputerChoice(), button);
	});
});

//remove transition function
function removeTransition(e) {
	if (e.propertyName === "transform") {
		this.classList.remove("playing");
	}
}

//loops through the buttons and remove transition
buttons.forEach((button) => {
	button.addEventListener("transitionend", removeTransition);
});
// current move
const currentMove = document.querySelector(".move");
let winner = "you";
// the main round game-play function
function roundPlay(playerSelection, computerSelection, button) {
	// add transition class to the button
	button.classList.add("playing");
	if (computerSelection === playerSelection) {
		currentMove.innerHTML = `You chose ${playerSelection} , computer chose ${computerSelection} <br> IT'S A TIE!`;
	} else if (
		(computerSelection === "rock" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "scissors") ||
		(computerSelection === "scissors" && playerSelection === "rock")
	) {
		winner = "You";
		showMove(playerSelection, computerSelection, winner);
	} else {
		winner = "Computer";
		showMove(playerSelection, computerSelection, winner);
	}
}

function showMove(playerSelection, computerSelection, winner) {
	currentMove.innerHTML = `You chose ${playerSelection} , computer chose ${computerSelection} <br> ${winner} won!`;
}
