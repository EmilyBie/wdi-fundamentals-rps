////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (!move) {
    	move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (!move) {
    	move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove == 'rock') {
    	switch (computerMove) {
    		case 'rock': 
    			winner = 'tie';
    			break;
    		case 'paper':
    			winner = 'computer';
    			break;
    		case 'scissors':
    			winner = 'player';
                break;
    		default:
    			console.log("computer did not make the right move.")
    	}

    } else if (playerMove == 'paper') {
    	switch (computerMove) {
    		case 'rock': 
    			winner = 'player';
    			break;
    		case 'paper':
    			winner = 'tie';
    			break;
    		case 'scissors':
    			winner = 'computer';
                break;
    		default:
    			console.log("computer did not make the right move.")
    	}

    } else if (playerMove == 'scissors') {
    	switch (computerMove) {
    		case 'rock': 
    			winner = 'computer';
    			break;
    		case 'paper':
    			winner = 'player';
    			break;
    		case 'scissors':
    			winner = 'tie';
                break;
    		default:
    			console.log("computer did not make the right move.")
    	}

    } else {
    	console.log("Player did not give the right move.");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var playerMove;
    var computerMove;
    var winner;
    while(playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove('rock');
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        if(winner == 'player') {
            playerWins ++;
        } else if(winner == 'computer') {
            computerWins ++;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

