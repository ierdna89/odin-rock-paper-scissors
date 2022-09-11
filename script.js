let playerScore = 0;
let computerScore = 0;
let playerCongratsMessage = "Congratulations! You won!";
let computerCongratsMessage = "Bad, bad, bad. You didn't win.";
// let playerSelection; // = prompt("Please type one variant (rock, paper or scissors).").toLowerCase();
// let computerSelection;

// declaring a function that plays a round and determines the winner
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return tie;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return playerWinsRound;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return playerWinsRound;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerWinsRound;
    }
    else {
        return computerWinsRound;
    }
}

// declaring a function that randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let resultInt;
    let resultStr;

    resultInt = Math.floor(Math.random() * 3);

    if (resultInt == 0) {
        return resultStr = "rock";
    }
    else if (resultInt == 1) {
        return resultStr = "paper";
    }
    else if (resultInt == 2) {
        return resultStr = "scissors";
    }
}

const buttonRock = document.querySelector("#btn-Rock");
const buttonPaper = document.querySelector("#btn-Paper");
const buttonScissors = document.querySelector("#btn-Scissors");

buttonRock.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
    scoreMessage.textContent = playRound(playerSelection, computerSelection);
    keepingScore();
    hidingScoreText();
    winnerDeclaration.textContent = declaringWinner();
    playerScoreUi.textContent = `Player score: ${playerScore}`;
    computerScoreUi.textContent = `PC score: ${computerScore}`;
    playerSelectionUi.textContent = `Player chose: ${playerSelection}`;
    computerSelectionUi.textContent = `PC chose: ${computerSelection}`;
});


buttonPaper.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
    scoreMessage.textContent = playRound(playerSelection, computerSelection);
    keepingScore();
    hidingScoreText();
    winnerDeclaration.textContent = declaringWinner();
    playerScoreUi.textContent = `Player score: ${playerScore}`;
    computerScoreUi.textContent = `PC score: ${computerScore}`;
    playerSelectionUi.textContent = `Player chose: ${playerSelection}`;
    computerSelectionUi.textContent = `PC chose: ${computerSelection}`;
});


buttonScissors.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
    scoreMessage.textContent = playRound(playerSelection, computerSelection);
    keepingScore();
    hidingScoreText();
    winnerDeclaration.textContent = declaringWinner();
    playerScoreUi.textContent = `Player score: ${playerScore}`;
    computerScoreUi.textContent = `PCscore: ${computerScore}`;
    playerSelectionUi.textContent = `Player chose: ${playerSelection}`;
    computerSelectionUi.textContent = `PC chose: ${computerSelection}`;
});


let tie = "Its a tie.";
let playerWinsRound = "Player wins round!";
let computerWinsRound = "Computer wins round!";

const playerScoreUi = document.getElementById("playerScore");
const computerScoreUi = document.getElementById("computerScore");
const scoreMessage = document.getElementById("score-message");
const playerSelectionUi = document.getElementById("playerSelection");
const computerSelectionUi = document.getElementById("computerSelection");
const winnerDeclaration = document.getElementById("winner-message");

// keeping the score of the played rounds
function keepingScore() {
    if (playRound(playerSelection, computerSelection) == playerWinsRound) {
        playerScore++;
    }
    else if (playRound(playerSelection, computerSelection) == computerWinsRound) {
        computerScore++;
    }
    else {
        playerScore;
        computerScore;
    }
}

function declaringWinner() {
    if (playerScore === 5) {
        return playerCongratsMessage;
    }
    else if (computerScore === 5) {
        return computerCongratsMessage;
    }
}

function hidingScoreText() {
    if (playerScore >= 5 || computerScore >= 5) {
        document.getElementById("score-message").hidden = true;
        buttonReset.hidden = false;
        disableButtons();
    }
}

const buttonReset = document.getElementById("playAgainBtn");
buttonReset.hidden = true;

buttonReset.addEventListener('click', () => {
    window.location.href = window.location.href;
});



function disableButtons() {
    const buttons = document.querySelectorAll('.btn-square');

    for (const button of buttons) {
        // Set the disabled attribute
        button.setAttribute('disabled', '');
    }
}