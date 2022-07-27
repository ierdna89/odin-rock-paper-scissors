let playerScore = 0;
let computerScore = 0;
let playerCongratsMessage = "Congratulations! You won!";
let computerCongratsMessage = "Bad, bad, bad. You didn't win.";
let tieCongratsMessage = "Ughh... Nobody wins!";

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please type one variant (rock, paper or scissors).").toLowerCase();
        const computerSelection = getComputerChoice();
        let tie = "*Its a tie.";
        let playerWinsRound = "*You win!";
        let computerWinsRound = "*You lose!";

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

        console.log(`Player choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);

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

        console.log(playRound(playerSelection, computerSelection));

        // keeping the score of the played rounds
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

        // showing on the console the current score of the player
        console.log(`Your score is ${playerScore}`);

        // showing on the console the current score of the computer
        console.log(`Computer's score is ${computerScore}`);
        console.log("--------------");
    }

    // showing on the console the winner of the game
    if (playerScore > computerScore) {
        return (
            console.log("************"),
            console.log(playerCongratsMessage),
            console.log(`Your final score is ${playerScore}`),
            console.log(`Computer's final score is ${computerScore}`),
            console.log("************")
        );
    }
    else if (playerScore < computerScore) {
        return (
            console.log("************"),
            console.log(computerCongratsMessage),
            console.log(`Your final score is ${playerScore}`),
            console.log(`Computer's final score is ${computerScore}`),
            console.log("************")
        );
    }
    else {
        return (
            console.log("************"),
            console.log(tieCongratsMessage),
            console.log(`Your final score is ${playerScore}`),
            console.log(`Computer's final score is ${computerScore}`),
            console.log("************")
        );
    }
}

game();