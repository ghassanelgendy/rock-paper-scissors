// function to generate number from 0 -> 3
function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
	// assign every number to a choice "rock, paper, or scissors"
	switch (randomNumber) {
		case 0: {
			return "rock";
			break;
		}
		case 1: {
			return "paper";
			break;
		}
		case 2: {
			return "scissor";
		}
	}
}

const buttons = Array.from(document.querySelectorAll(".card"));

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		roundPlay(button.id, getComputerChoice());
	});
});

// the main round game-play
let roundNumber = 0;
function roundPlay(playerSelection, computerSelection) {
	if (computerSelection === playerSelection) {
		console.log("It's a tie");
		roundNumber++;
	} else if (
		(computerSelection === "rock" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "scissor") ||
		(computerSelection === "scissor" && playerSelection === "rock")
	) {
		roundNumber++;

		console.log("You won");
	} else {
		console.log("You lost");
		roundNumber++;
	}
	if (roundNumber === 5) {
		console.log("Game Over!");
	}
	function currentMove(playerSelection, computerSelection) {
		console.log(
			`You played ${playerSelection} the computer played ${computerSelection} `
		);
	}
}
