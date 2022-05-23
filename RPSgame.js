


function computerPlay() {
// https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D
    var myArray = [
        "Rock",
        "Paper",
        "Scissors"
      ];
      
      var ComputerChoice = myArray[Math.floor(Math.random()*myArray.length)];
      console.log(ComputerChoice);
}

computerPlay();