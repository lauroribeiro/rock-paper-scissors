const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll(".controls");
const scoreboardText = document.querySelector("#score-text");
const resultText = document.querySelector(".output");

const roundCount = 5;
let playerScore = 0;
let computerScore = 0;

let playerSelection = "";

buttons.forEach( button => button.addEventListener("click", getUserInput));

function checkWin(){
    if(playerScore === 5 || computerScore === 5){
        if(playerScore === 5){
            resultText.textContent = "You WIN!";
        }else{
            resultText.textContent = "You LOSE!";
        }    
        playerScore = 0;
        computerScore = 0;
        // updateScoreboard();
    }
}

function randomNumber(){
    let number = Math.random() * 3;
    return Math.ceil(number);
}
function computerPlay() {
    let option = Math.ceil(Math.random() * 3);
    switch(option){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getUserInput(e){
    playerSelection = e.target.id;
    console.log(e)
    let result = playRound(playerSelection, computerPlay());
    updateScoreboard(result);
    checkWin();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        resultText.textContent = "You Lose! Paper beats Rock.";
        return "You Lose! Paper beats Rock.";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        resultText.textContent = "You Lose! Rock beats Scissors.";
        return "You Win! Rock beats Scissors.";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        resultText.textContent = "You Lose! Scissors beats Paper.";
        return "You Lose! Scissors beats Paper.";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        resultText.textContent = "You Win! Paper beats Rock.";
        return "You Win! Paper beats Rock.";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        resultText.textContent = "You Lose! Rock beats Scissors.";
        return "You Lose! Rock beats Scissors.";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        resultText.textContent = "You Win! Scissors beats Paper.";
        return "You Win! Scissors beats Paper.";
    }else{
        resultText.textContent = "Tie!";
        return "It is a tie!";
    }
}

function updateScoreboard(result = "Tie"){
    if(result.search("Win") == -1 && result.search("tie") == -1){
        console.log("Computer wins!")
        computerScore += 1;
    }else if (result.search("Lose") == -1 && result.search("tie") == -1){
        console.log("Player wins!")
        playerScore += 1;
    }else{
        console.log("Tie!");
    }
    scoreboardText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}