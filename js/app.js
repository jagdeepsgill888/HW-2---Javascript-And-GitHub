// global variables for game


var player_lives = 1;
var computer_lives = 1;


var choices = ['👊', '✋', '✌️'];


var computers_choice;
var players_choice;
var message_area = document.getElementById('game_area');
var clearArea = false;


document.getElementById('playGame').addEventListener("click", runGame);


// game logic
function runGame() {
    if (clearArea) {
        message_area.innerHTML = '';
    }

    clearArea = false;

    // initial messaging
    document.body.style.backgroundColor = "lightblue";
    message_area.innerHTML+= "🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️ <br />";
    message_area.innerHTML+= "Computer lives: " + computer_lives + "<br />";
    message_area.innerHTML+= "Player lives: " + player_lives + "<br />";
    message_area.innerHTML+= "Choose your weapon⚔️! <br />";
    message_area.innerHTML+= "🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️ <br />";

    // setting game choices
    var players_choices = document.getElementById('gameOption');
    players_choice = players_choices.options[players_choices.selectedIndex].value;
    computers_choice = choices[Math.floor(Math.random() * choices.length)];


    // displaying choices
    message_area.innerHTML+= "🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️ <br />";
    message_area.innerHTML+= 'Computer chose: ' + computers_choice + ' <br />';
    message_area.innerHTML+= 'Player chose: ' + players_choice + ' <br />';
    message_area.innerHTML+= "🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️ <br />";
    checkChoices();
    }
    // conditionals for actual game logic
      
    function checkChoices() {
    if (players_choice == computers_choice) {
        message_area.innerHTML+= 'Tie! No one wins, play again! <br />';
    } else if (players_choice == '👊') {
        checkComputerWins('✋', 'covers', 'smashes');
    } else if (players_choice == '✋') {
        checkComputerWins('✌️', 'cuts', 'covers');
    } else if (players_choice == '✌️') {
        checkComputerWins('👊', 'smashes', 'cuts');
    } else {
        message_area.innerHTML+= "Well that's not a valid choice. <br />";
        clearArea = true;
    }
    

    // restart game loop
    checkStatus();
    }


// checks whether computer wins against player choice
function checkComputerWins(validateChoice, winMessage, loseMessage) {
    if (computers_choice == validateChoice) {
        message_area.innerHTML += 'You lose! ' + computers_choice + ' ' + winMessage + ' ' + players_choice + '<br />';
        player_lives--;
    } else {
        message_area.innerHTML += 'You win! ' + players_choice + ' ' + loseMessage + ' ' + computers_choice + '<br />';
        computer_lives--;
    }
}

//  check status of game
function checkStatus() {
    if (player_lives ==  0) {
        showWinloseMessage("lost");
        myLosingFunction();
    } else if (computer_lives == 0) {
        showWinloseMessage("won");
        myWinningFunction();
    } else {
        message_area.innerHTML+= "Select another choice! <br />";
        message_area.innerHTML+= "🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️ <br /><br />";
    }
}

// messaging for winning or losing
function showWinloseMessage(status) {
    message_area.innerHTML+= "🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️ <br />";
    message_area.innerHTML+= "Game Over🏁. <br />";
    message_area.innerHTML+= "You " + status + " the challenge! Would you like to play again⚔️? <br />";
    message_area.innerHTML+= "🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️🛡️ <br />";
    playAgain();
    clearArea = true;
}
 
 function myLosingFunction() {
  document.body.style.backgroundColor = "red";
}

function myWinningFunction() {
  document.body.style.backgroundColor = "green";
}

function playAgain() {
document.getElementById("playGame").style.backgroundColor = "yellow";
}

function playButton() {
document.getElementById("playGame").style.backgroundColor = "grey";

}