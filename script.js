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


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
// rock.style.color = "blue";
// rock.addEventListener("onclick", getUserInput);
function getUserInput(e){
    const playerSelection = e.target.id;
    playRound(playerSelection, computerPlay());
}

const buttons = document.querySelectorAll(".controls");
buttons.forEach( button => button.addEventListener("click", getUserInput));


function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock.");
        return "You Lose! Paper beats Rock.";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Lose! Rock beats Scissors.");
        return "You Win! Rock beats Scissors.";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Scissors beats Paper.");
        return "You Lose! Scissors beats Paper.";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock.");
        return "You Win! Paper beats Rock.";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors.");
        return "You Lose! Rock beats Scissors.";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beats Paper.");
        return "You Win! Scissors beats Paper.";
    }else{
        console.log("Tie!");
        return "It is a tie!";
    }
}

function game(){
    const roundCount = 5;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < roundCount; i++){
        let playerSelection = prompt("Rock, paper or scissors?");
        let result = playRound(playerSelection, computerPlay());
        if(result.search("Win") == -1 && result.search("tie") == -1){
            console.log("Computer wins!")
            computerScore += 1;
        }else if (result.search("Lose") == -1 && result.search("tie") == -1){
            console.log("Player wins!")
            playerScore += 1;
        }else{
            console.log("Tie!");
        }
    }
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
}