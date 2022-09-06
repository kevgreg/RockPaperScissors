//Function to return the computers random choice of rock, paper, or scissors
function getComputerChoice() {
    let output;
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        output = "rock"
    }
    else if (rand == 1) {
        output = "paper"
    }
    else {
        output = "scissors"
    }
    return output;
}

//Function to prompt the player for their choice or rock, paper, or scissors
function getPlayerChoice() {
    let input = prompt("Choose rock, paper, or scissors").toLowerCase();
    //console.log(input);
    while (true) {
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
        }
        else {
            input = prompt("Invalid response. Choose rock, paper, or scissors").toLowerCase();
        }
    }
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    //Tie conditions
    if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "scissors")) {
        console.log("Tie" + ". Player:" + playerSelection + ". Computer: " + computerSelection)
    }//Win conditions
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("You win" + ". Player:" + playerSelection + ". Computer: " + computerSelection)
    }
    else{//Lose conditions
        console.log("You lose" + ". Player:" + playerSelection + ". Computer: " + computerSelection)
    }
}

function game() {

}
playRound()
//console.log("You chose " + getPlayerChoice());