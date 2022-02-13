let rock = "rock";
let paper = "paper";
let scissor = "scissor";

let compScore = 0; //global variable
let playerScore = 0; //global varibale

let humanScore = document.getElementById("human-score");
let computerScore = document.getElementById("computer-score");

let winnerIs = document.getElementById("isWinner");

let displayWinner = document.getElementById("display-winner");
let btn = document.createElement("button");

let displayOutcome = document.getElementById("the-outcome");

function computerPlay() {
  //a function to make the computer choose between rock, paper and scissor
  const choice = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * choice.length);
  return choice[num];
}

function playRound(computerSelection, playerSelection) {
  //to decide who wins
  if (computerSelection === playerSelection) {
    displayOutcome.innerHTML = "It's a tie!";
    return "draw";
  } else if (computerSelection === rock && playerSelection === paper) {
    displayOutcome.innerHTML = "You win, paper beat rock!";
    return "win";
  } else if (computerSelection === paper && playerSelection === rock) {
    displayOutcome.innerHTML = "You lose, paper beat rock!";
    return "lose";
  } else if (computerSelection === scissor && playerSelection === rock) {
    displayOutcome.innerHTML = "You win, rock beat scissor!";
    return "win";
  } else if (computerSelection === rock && playerSelection === scissor) {
    displayOutcome.innerHTML = "You lose, rock beat scissor!";
    return "lose";
  } else if (computerSelection === paper && playerSelection === scissor) {
    displayOutcome.innerHTML = "You win, scissor beat paper!";
    return "win";
  } else if (computerSelection === scissor && playerSelection === paper) {
    displayOutcome.innerHTML = "You lose, scissor beat paper!";
    return "lose";
  }
}

function reset() {
  //reset the game so it can be played again
  compScore = 0;
  computerScore.innerHTML = compScore.toString();
  playerScore = 0;
  humanScore.innerHTML = playerScore.toString();
  winnerIs.innerHTML = "";
  displayWinner.removeChild(btn);
  displayOutcome.innerHTML = "";
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
  chooseRock.classList.add("clicking");
  setTimeout(function () {
    chooseRock.classList.remove("clicking");
  }, 50);
  playerSelection = rock;
  if (compScore < 5 && playerScore < 5) {
    game();
  }
});

const choosePaper = document.querySelector(".paper");
choosePaper.addEventListener("click", () => {
  choosePaper.classList.add("clicking");
  setTimeout(function () {
    choosePaper.classList.remove("clicking");
  }, 50);
  playerSelection = paper;
  if (compScore < 5 && playerScore < 5) {
    game();
  }
});

const chooseScissor = document.querySelector(".scissor");
chooseScissor.addEventListener("click", () => {
  chooseScissor.classList.add("clicking");
  setTimeout(function () {
    chooseScissor.classList.remove("clicking");
  }, 50);
  playerSelection = scissor;
  if (compScore < 5 && playerScore < 5) {
    game();
  }
});
