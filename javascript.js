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
	if ((choice === 1)) {
		return "Kamień";
	} else if ((choice === 2)) {
		return "Papier";
	} else {
		return "Nożyce";
	}
}
