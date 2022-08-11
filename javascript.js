/*
Create function getComputerChoice, return random "Kamień", "Papier", "Nożyczki"

Create function playRound - 1 round game; 
 - parameters: playerSelection and computerSelection
 - return: "Przegrałeś! Papier bije Kamień"
 - make function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

Create function game
 - call the playRound inside to play 5 round game that keeps score and reports a winner or loser at the end.
 - use loop to play those 5 rounds
 
 Use prompt() to get input from the user
*/

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3) + 1;
	if (choice === 1) {
		return "kamień";
	} else if (choice === 2) {
		return "papier";
	} else {
		return "nożyce";
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (playerSelection === "kamień" && computerSelection === "nożyce") {
		return "You win! Kamień pokonuje nożyce.";
	} else if (playerSelection === "kamień" && computerSelection === "papier") {
		return "You lose! Papier pokonuje kamień.";
	} else if (playerSelection === "kapier" && computerSelection === "kamień") {
		return "You win! Papier pokonuje kamień.";
	} else if (playerSelection === "kapier" && computerSelection === "nożyce") {
		return "You lose! Nożyce pokonują papier.";
	} else if (playerSelection === "nożyce" && computerSelection === "papier") {
		return "You win! Nożyce pokonują papier.";
	} else if (playerSelection === "nożyce" && computerSelection === "kamień") {
		return "You lose! Kamień pokonuje nożyce.";
	} else if (
		(playerSelection === "nożyce" && computerSelection === "nożyce") ||
		(playerSelection === "kamień" && computerSelection === "kamień") ||
		(playerSelection === "papier" && computerSelection === "papier")
	) {
		return "Remis";
	} else {
		return "Wprowadź: kamień lub papier lub nożyce.";
	}
}

const playerSelection = "kAmień";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
