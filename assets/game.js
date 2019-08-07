var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0
var losses = 0
var guessesLeft = 12;
var guessedLetters = [];
var letterToGuess;


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);

document.onkeypress = function(event) {
    var userChoice = event.key;
    guessedLetters.push(userChoice);

    if (userChoice === computerChoice) {
        wins++;
        guessesLeft = 12;
        guessedLetters = [];
    }
    else {
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft= 12
        guessedLetters = [];
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guesses-so-far").innerHTML = guessedLetters.join(', ');

}