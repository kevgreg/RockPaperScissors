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
    //Validates user input and prompts again if not rock, paper, or scissors
    while (true) {
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
        }
        else {
            input = prompt("Invalid response. Choose rock, paper, or scissors").toLowerCase();
        }
    }
}

//Function to play one round and declare win, lose, or tie
function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    //Tie conditions
    if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "scissors")) {
        console.log("Tie" + ". Player:" + playerSelection + ". Computer: " + computerSelection);

        //returns
        return 1;
    }//Win conditions
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("You win" + ". Player:" + playerSelection + ". Computer: " + computerSelection);

        return 2;
    }
    else {//Lose conditions
        console.log("You lose" + ". Player:" + playerSelection + ". Computer: " + computerSelection);

        return 3;
    }
}

//function to play 5 rounds and keep score
function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5;) {

        let result = playRound();

        if (result == 2) {
            playerScore += 1;
            i += 1;
        }
        else if (result == 3) {
            computerScore += 1;
            i += 1;
        }
        else { }
    }

    console.log("Player score: " + playerScore)
    console.log("Computer score: " + computerScore)

    if (playerScore > computerScore) {
        console.log("You win!")
    }
    else (
        console.log("You lose.")
    )

}

game();
