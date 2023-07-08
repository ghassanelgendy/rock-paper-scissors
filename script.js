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
// the main round game-play
function roundPlay(playerSelection, computerSelection) {
	if (typeof playerSelection != "string") {
		console.log("Please enter a valid choice!");
	} else {
		if (computerSelection === playerSelection) {
			console.log("It's a TIE");
		} else if (
			(computerSelection === "rock" && playerSelection === "paper") ||
			(computerSelection === "paper" && playerSelection === "scissor") ||
			(computerSelection === "scissor" && playerSelection === "rock")
		) {
			console.log("You WIN");
		} else {
			console.log("Your LOSE");
		}
	}
}
function currentMove(playerSelection, computerSelection) {
	console.log(
		`You played ${playerSelection} the computer played ${computerSelection} `
	);
}

const rounds = prompt("How many rounds do you want to play?");

for (let i = 0; i < rounds; i++) {
	let playerSelection = prompt("Enter your choice!").toLowerCase();
	let computerSelection = getComputerChoice();
	roundPlay(playerSelection, computerSelection);
	currentMove(playerSelection, computerSelection);
}
