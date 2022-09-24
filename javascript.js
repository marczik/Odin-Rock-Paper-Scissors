let computerScore = 0;
let playerScore = 0;
const returnMainBtn = document.querySelector("#retry-btn");
const body = document.querySelector("body");
const title = document.querySelector(".title");

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
	const title = document.querySelector(".title");

	if (playerSelection === "kamień" && computerSelection === "nożyce") {
		title.textContent = "You win! Kamień pokonuje nożyce.";
		playerScore = ++playerScore;
		keepScore();
	} else if (playerSelection === "kamień" && computerSelection === "papier") {
		title.textContent = "You lose! Papier pokonuje kamień.";
		computerScore = ++computerScore;
		keepScore();
	} else if (playerSelection === "papier" && computerSelection === "kamień") {
		title.textContent = "You win! Papier pokonuje kamień.";
		playerScore = ++playerScore;
		keepScore();
	} else if (playerSelection === "papier" && computerSelection === "nożyce") {
		title.textContent = "You lose! Nożyce pokonują papier.";
		computerScore = ++computerScore;
		keepScore();
	} else if (playerSelection === "nożyce" && computerSelection === "papier") {
		title.textContent = "You win! Nożyce pokonują papier.";
		playerScore = ++playerScore;
		keepScore();
	} else if (playerSelection === "nożyce" && computerSelection === "kamień") {
		title.textContent = "You lose! Kamień pokonuje nożyce.";
		computerScore = ++computerScore;
		keepScore();
	} else if (
		(playerSelection === "nożyce" && computerSelection === "nożyce") ||
		(playerSelection === "kamień" && computerSelection === "kamień") ||
		(playerSelection === "papier" && computerSelection === "papier")
	) {
		title.textContent = "Remis";
	}
}

function keepScore() {
	let playerScoreBox = document.querySelector("#player-score");
	let computerScoreBox = document.querySelector("#computer-score");
	if (playerScore === 5 && computerScore < 5) {
		const title = document.querySelector(".title");
		title.textContent = "WYGRAŁEŚ!!!!!";
		computerScore = 0;
		playerScore = 0;
	} else if (computerScore === 5 && playerScore < 5) {
		const title = document.querySelector(".title");
		title.textContent = "PRZEGRAŁEŚ :(";
		computerScore = 0;
		playerScore = 0;
	}

	playerScoreBox.textContent = playerScore;
	computerScoreBox.textContent = computerScore;
}
