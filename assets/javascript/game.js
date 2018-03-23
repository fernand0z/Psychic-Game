
//Create array of alaphabetic characters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;

var losses = 0;

var guessBalance = 9;

var userGuesses = [""];

var gameLetter = letters[Math.floor(Math.random() * letters.length)];

console.log("Wins " + wins + "\n" + "Losses " + losses + "\n" + "Guess Balance " + guessBalance + "\n" + "User Guesses " + userGuesses);


//Working JS, remove after debugging!
//Tally wins and update page
//userWins = document.getElementById("wins-counter");
//Tally losses and update page
//userLosses = document.getElementById("losses-counter");
//Tally guesses left and update page
//remainingGuesses = document.getElementById("guesses-left");
//Store user guesses in array and update page
//guessedLetters = document.getElementById("user-guesses");
//userWins = wins;
//userLosses = losses;
//remainingGuesses = guessBalance;

//Call fucntion by onkeyup
document.onkeyup = function(event) {
    //Store the user guess in var playerGuess
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //If statement to check if player's guess exists in the letters array and that the letter hasnt be used previously within the single game
    if (userGuesses.indexOf(playerGuess) < 0 && letters.indexOf(playerGuess) >= 0); {
        userGuesses[userGuesses.length] = playerGuess;
        guessBalance--;
        console.log(userGuesses + playerGuess);
    }

    if (gameLetter == playerGuess) {
        wins++;
        guessBalance = 9;
        userGuesses = [];
        gameLetter = letters[Math.floor(Math.random() * letters.length)];

    }

    if (guessBalance == 0) {
        losses++;
        guessBalance = 9;
        userGuesses = [];
        gameLetter = letters[Math.floor(Math.random() * letters.length)];

    }
       
    var winsHTML = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Remaining: " + guessBalance + "</p>" + "<p>Letters Guessed: " + userGuesses + "</p>";
     
    document.querySelector("#wins-counter").innerHTML = winsHTML;
    
    
    //Working javascript below - remove after debugging!
    //HTML variable to update the DOM
     //var lossesHTML = "Losses: " + losses + "<br>";
    //var balanceHTML = "Guesses Remaining: " + parseInt(guessBalance) + "<br>";
    //var guessesHTML = "Letters Guessed: " + userGuesses;

    
    //document.querySelector("#losses-counter").innerHTML = lossesHTML;
    //document.querySelector("guesses-left").innerHTML = balanceHTML;
    //document.querySelector("user-guesses").innerHTML = guessHTML;
    
}
