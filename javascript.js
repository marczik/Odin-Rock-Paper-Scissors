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
		return alert("You win! Kamień pokonuje nożyce.");
	} else if (playerSelection === "kamień" && computerSelection === "papier") {
		return alert("You lose! Papier pokonuje kamień.");
	} else if (playerSelection === "papier" && computerSelection === "kamień") {
		return alert("You win! Papier pokonuje kamień.");
	} else if (playerSelection === "papier" && computerSelection === "nożyce") {
		return alert("You lose! Nożyce pokonują papier.");
	} else if (playerSelection === "nożyce" && computerSelection === "papier") {
		return alert("You win! Nożyce pokonują papier.");
	} else if (playerSelection === "nożyce" && computerSelection === "kamień") {
		return alert("You lose! Kamień pokonuje nożyce.");
	} else if (
		(playerSelection === "nożyce" && computerSelection === "nożyce") ||
		(playerSelection === "kamień" && computerSelection === "kamień") ||
		(playerSelection === "papier" && computerSelection === "papier")
	) {
		return alert("Remis");
	} else {
		return alert("Wprowadź: kamień lub papier lub nożyce.");
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		if ((answer = prompt("Kamień? Papier? Nożyczki?", ""))) {
			let playerSelection = answer;
			let computerSelection = getComputerChoice();
			playRound(playerSelection, computerSelection);
		}
	}
}
