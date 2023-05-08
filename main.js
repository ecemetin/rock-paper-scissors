console.log("hi");
const getUserChoice = (input) => {
  const userInput = input.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("input error, try another word");
  }
};
/*
const getUserChoice = () => {
  // If you run this code in the browser, use prompt
  let userInput = prompt("Please enter your choise");
// You don't need reassignment, .toLowerCase() should modify your string
  userInput.toLowerCase();
  if(userInput==="rock"||userInput==="paper"||userInput==="scissors"){
    return userInput;
  } else {
    console.log("input error, try another word");
  }
};
 */
//console.log(getUserChoice("rock"));
const getComputerChoice = () => {
  num = Math.floor(Math.random() * 20);
  if (num < 0.8) {
    return "rock";
  } else if (num >= 0.8 && num < 1.3) {
    return "paper";
  } else {
    return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    return "game is tie!";
  }
  if (userChoice == "rock") {
    if (computerChoice == "paper") {
      return "computer wins";
    } else {
      return "user wins";
    }
    if (userChoice == "paper") {
      if (computerChoice == "scissors") {
        return "computer wins";
      } else {
        return "user wins";
      }
    }
    if (userChoice == "scissors") {
      if (computerChoice == "paper") {
        return "user wins";
      } else {
        return "computer wins";
      }
    }
  }
};
/*const playGame = (userChoice)=>{
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
 }
playGame();
*/
const playGame = (userChoice) => {
  userChoice = getUserChoice("paper");
  computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
