

function computerPlay() { //a function to make the computer choose between rock, paper and scissor
    const choice = ["ROCK", "PAPER", "SCISSOR"];
    let num = Math.floor(Math.random()*choice.length);
    return choice[num];
}


function playerPlay() { //a function to get player choice
    let playerPick = prompt("Enter your choice (Rock, Paper, Scissor): ");
    let choice = playerPick.toUpperCase();
    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSOR") { //to check whether it is the correct choice
        return choice;
    } else {
        return "Game Error, Please Enter Correct Choice"
        }
}

let rock = "ROCK"
let paper = "PAPER"
let scissor = "SCISSOR"

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        alert("Draw");
        return "draw";
    } else if (computerSelection === rock && playerSelection === paper) {
        alert("You Win! Paper beats Rock");
        return "win";
    } else if (computerSelection === paper && playerSelection === rock) {
        alert("You Lose! Paper beats Rock");
        return "lose";
    } else if (computerSelection === scissor && playerSelection === rock) {
        alert("You Win! Rock beats Scissor");
        return "win";
    } else if (computerSelection === rock && playerSelection === scissor) {
        alert("You Lose! Rock beats Scissor");
        return "lose";
    } else if (computerSelection === paper && playerSelection === scissor) {
        alert("You Win! Scissor beats Rock");
        return "win";
    } else if (computerSelection === scissor && playerSelection === paper) {
        alert("You Lose! Scissor beats Rock");
        return "lose";
    }
}

function game() {

    for (i = 0; i < 5; i++) {
        compScore = 0
        playerScore = 0

        let computerSelection = computerPlay(); //store computer choice into a variable
        let playerSelection = playerPlay(); //store player choice into a variable

        winner = playRound(computerSelection, playerSelection);

        if (winner === "draw"){
            playerScore += 0;
        } else if (winner === "win") {
            playerScore++;
        } else {
            compScore++;
        }
    }
    if (compScore == playerScore) {
        alert("Draw!")
    } else if (compScore > playerScore) {
        alert("Computer Win!")
    } else {
        alert("You Win!")
    }
}
