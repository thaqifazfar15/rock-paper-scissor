function computerPlay() {
  //a function to make the computer choose between rock, paper and scissor
  const choice = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * choice.length);
  return choice[num];
}

let rock = "rock";
let paper = "paper";
let scissor = "scissor";

function playRound(computerSelection, playerSelection) {
  //to decide who wins
  if (computerSelection === playerSelection) {
    return "draw";
  } else if (computerSelection === rock && playerSelection === paper) {
    return "win";
  } else if (computerSelection === paper && playerSelection === rock) {
    return "lose";
  } else if (computerSelection === scissor && playerSelection === rock) {
    return "win";
  } else if (computerSelection === rock && playerSelection === scissor) {
    return "lose";
  } else if (computerSelection === paper && playerSelection === scissor) {
    return "win";
  } else if (computerSelection === scissor && playerSelection === paper) {
    return "lose";
  }
}

let compScore = 0; //global variable
let playerScore = 0; //global varibale

let humanScore = document.getElementById("human-score");
let computerScore = document.getElementById("computer-score");

let winnerIs = document.getElementById("isWinner");

let displayWinner = document.getElementById("display-winner");
let btn = document.createElement("button");

function reset() {
  //reset the game so it can be played again
  compScore = 0;
  computerScore.innerHTML = compScore.toString();
  playerScore = 0;
  humanScore.innerHTML = playerScore.toString();
  winnerIs.innerHTML = "";
  displayWinner.removeChild(btn);
}

function alertWinner(compScore, playerScore) {
  if ((compScore === playerScore) === 5) {
    winnerIs.innerHTML = "It's a Draw!";
    createRetryBtn();
  } else if (compScore === 5) {
    winnerIs.innerHTML = "You Lose!";
    createRetryBtn();
  } else if (playerScore === 5) {
    winnerIs.innerHTML = "You Win!";
    createRetryBtn();
  }
}
function createRetryBtn() {
  //for player to retry again
  btn.classList.add("retry-again");
  btn.innerHTML = "Play again?";
  btn.addEventListener("click", function () {
    reset();
  });
  displayWinner.appendChild(btn);
}

function game() {
  //play game

  let computerSelection = computerPlay(); //store computer choice into a variable
  let winner = playRound(computerSelection, playerSelection);

  document.getElementById("computer-choice").innerHTML = computerSelection; //display computer choice

  if (winner === "draw") {
  } else if (winner === "lose") {
    compScore++;
    computerScore.innerHTML = compScore.toString(); //update score
    if (compScore === 5 || playerScore === 5) {
      alertWinner(compScore, playerScore);
    }
  } else if (winner === "win") {
    playerScore++;
    humanScore.innerHTML = playerScore.toString(); //update score
    if (compScore === 5 || playerScore === 5) {
      alertWinner(compScore, playerScore);
    }
  }
}

const chooseRock = document.querySelector(".rock");
chooseRock.addEventListener("click", () => {
  playerSelection = rock;
  if (compScore < 5 && playerScore < 5) {
    game();
  }
});

const choosePaper = document.querySelector(".paper");
choosePaper.addEventListener("click", () => {
  playerSelection = paper;
  if (compScore < 5 && playerScore < 5) {
    game();
  }
});

const chooseScissor = document.querySelector(".scissor");
chooseScissor.addEventListener("click", () => {
  playerSelection = scissor;
  if (compScore < 5 && playerScore < 5) {
    game();
  }
});
