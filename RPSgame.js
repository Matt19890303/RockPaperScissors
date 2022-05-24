
const myArray = ["ROCK", "PAPER", "SCISSORS"];
let rounds = 0
let playerScore = 0
let computerScore = 0
let roundWinner = ''

// https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D
function computerPlay() {
  return myArray[Math.floor(Math.random()*myArray.length)];
  }

function playRound(playerSelection, computerSelection) {
  playerSelection=playerSelection.toUpperCase();
  computerSelection=computerSelection.toUpperCase();
  if (playerSelection === computerSelection) {
    return roundWinner = 'tie'
  } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++
    return roundWinner = "Player wins the point"
  } else if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    computerScore++
    return roundWinner = "Computer wins the point"
  }
}
 
function game() {
  // for (let playerScore = 0; playerScore < 5; playerScore++) { 
  //   if (playerScore < 5) {
  //     return playerScore++
  //   } else if (playerScore == 5) {
  //     return "Player Wins!"
  //   }
  // }
  // for (let computerScore = 0; computerScore < 5; computerScore++) { 
  //   if (computerScore < 5) {
  //     return computerScore++
  //   } else if (computerScore == 5) {
  //     return "Computer Wins!"
  //   }
  // }

}



  
const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log("Player Choice: " + playerSelection);
console.log("Comp Choice: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
// isGameOver();
game();
console.log("Player: " + playerScore);
console.log("Comp: " + computerScore);
