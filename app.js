let rulesButton = document.querySelector(".rules");
let rulesList = document.querySelector(".rules-list");
let cut = document.querySelector("#cut");

rulesButton.addEventListener("click", () => {
  rulesList.style.display = "block";
});

cut.addEventListener("click", () => {
  rulesList.style.display = "none";
});
// all the variables of game
let userScore = 0;
let computerScore = 0;
let displayScore = document.querySelectorAll(".right > h1");
console.log(displayScore);
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let signSelection = document.querySelector(".sign_selection");
let afterSelection = document.querySelector(".after_selection");
let playAgain = document.querySelector(".game_result > button");
let result = document.querySelector(".game_result > h1");
let user = document.querySelector(".user div");
let computer = document.querySelector(".computer div");

// start the game;

rock.addEventListener("click", () => {
  console.log("rock");
  executeGame("rock");
});

paper.addEventListener("click", () => {
  console.log("paper");
  executeGame("paper");
});

scissors.addEventListener("click", () => {
  console.log("scissors");
  executeGame("scissors");
});

playAgain.addEventListener("click", () => {
  signSelection.style.display = "block";
  afterSelection.style.display = "none";
  user.className = "handsign";
  computer.className = "handsign";
});

const executeGame = async (userSign) => {
  signSelection.style.display = "none";
  afterSelection.style.display = "flex";
  let signs = ["rock", "paper", "scissors"];
  let computerSign = "rock";
  let index = Math.floor(Math.random() * 3);
  computerSign = signs[index];
  console.log(computerSign);
  user.innerHTML = `<i class="fa-solid fa-hand-${userSign}"></i>`;
  user.classList.add(`${userSign}-color`);
  computer.innerHTML = `<i class="fa-solid fa-hand-${computerSign}"></i>`;
  computer.classList.add(`${computerSign}-color`);
  if (
    (userSign == "rock" && computerSign == "paper") ||
    (userSign == "paper" && computerSign == "scissors") ||
    (userSign == "scissors" && computerSign == "rock")
  ) {
    //losing conditions
    console.log("you loose");
    result.innerHTML = "YOU LOOSE";
    document.querySelector(".game_result > p").style.display = "block";
    computerScore += 1;
    displayScore[1].innerHTML = computerScore;
  } else if (
    (userSign == "rock" && computerSign == "scissors") ||
    (userSign == "paper" && computerSign == "rock") ||
    (userSign == "scissors" && computerSign == "paper")
  ) {
    //winning conditions
    console.log("you won");
    result.innerHTML = "YOU WON";
    document.querySelector(".game_result > p").style.display = "block";
    userScore += 1;
    displayScore[0].innerHTML = userScore;
  } else {
    //its a draw
    result.innerHTML = "IT'S A TIE";
    document.querySelector(".game_result > p").style.display = "none";
  }
};
