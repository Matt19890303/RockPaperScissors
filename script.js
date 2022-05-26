
// https://www.youtube.com/watch?v=jaVNP3nIAv0&t=566s

let userScore = 0;
let computerScore = 0;
const myArray = ["ROCK", "PAPER", "SCISSORS"];
// let rounds = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result1_div = document.querySelector(".result1");
const result2_div = document.querySelector(".result2");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


// function scoreCount() {
//   if (userScore < 5) {
//     userScore_span.innerHTML=userScore;
//   }
// }


// https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D
// to randomise the array created above
function computerChoice() {
  return myArray[Math.floor(Math.random()*myArray.length)];
  }

// Updates the score on the screen
function win() {
  userScore++;
  userScore_span.innerHTML=userScore;
}

// Updates the score on the screen
function lose() {
  computerScore++;
  computerScore_span.innerHTML=computerScore;
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// Create a function for each section
function game(userChoice) {
  const compChoice = computerChoice();
  console.log("User: " + userChoice);
  console.log("Comp: " + compChoice);
  switch (userChoice + compChoice) {
    case "PAPERROCK":
    case "ROCKSCISSORS":
    case "SCISSORSPAPER":
      win();
      result1_div.innerHTML=userChoice + " beats " + compChoice;
      result2_div.innerHTML="User wins!";
      break;
    case "ROCKPAPER":
    case "SCISSORSROCK":
    case "PAPERSCISSORS":
      lose();
      result1_div.innerHTML=compChoice + " beats " + userChoice;
      result2_div.innerHTML="Computer wins!";
      break;
    case "ROCKROCK":
    case "SCISSORSSCISSORS":
    case "PAPERPAPER":
      result1_div.innerHTML="You both picked " + userChoice;
      result2_div.innerHTML="Its a draw!";
      break;
  }
}


// when clicked call the function within the varable created above based on the id in the html
function main() {
  rock_div.addEventListener("click", function() {
    game("ROCK");
  })

  paper_div.addEventListener("click", function() {
    game("PAPER");
  })

  scissors_div.addEventListener("click", function() {
    game("SCISSORS");
  })
}

main();














// ##################################################################################
// ##################################################################################


// let roundWinner = '';

// https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D
// function computerPlay() {
//   return myArray[Math.floor(Math.random()*myArray.length)];
//   }

// function playRound(playerSelection, computerSelection) {
//   playerSelection=playerSelection.toUpperCase();
//   computerSelection=computerSelection.toUpperCase();
//   if (playerSelection === computerSelection) {
//     return roundWinner = 'tie'
//   } else if (
//     (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
//     (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
//     (playerSelection === 'PAPER' && computerSelection === 'ROCK')
//   ) {
//     playerScore++
//     return roundWinner = "Player wins the point"
//   } else if (
//     (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
//     (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
//     (computerSelection === 'PAPER' && playerSelection === 'ROCK')
//   ) {
//     computerScore++
//     return roundWinner = "Computer wins the point"
//   }
// }
 
// function game() {
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

  // }

  
// const playerSelection = "Rock";
// const computerSelection = computerPlay();
// console.log("Player Choice: " + playerSelection);
// console.log("Comp Choice: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));
// game();
// console.log("Player: " + playerScore);
// console.log("Comp: " + computerScore);



