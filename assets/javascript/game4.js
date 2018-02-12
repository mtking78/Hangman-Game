// ***** VARIABLES *****

var gameStart = true;
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var words = ["algeria", "botswana", "chad", "djibuti", "eritrea",
            "guinea", "ghana", "egypt", "sudan", "lesotho",
            "ethiopia", "somalia", "mozambique", "morocco", "libya",
            "rwanda", "burundi", "uganda", "angola", "namibia"];
var currentWord = "";
var answerArray = [];
var letters = ["a", "b", "c", "d", "e",
                 "f", "g", "h", "i", "j",
                 "k", "l", "m", "n", "o",
                 "p", "q", "r", "s", "t",
                  "u", "v", "w", "x", "y", "z"];
var userInput = null;
var userGuess = null;
var lettersGuessed = [];
var winningLetters = [];
var remainingLetters = [];
var wordSplit = [];

// ***** FUNCTIONS *****

function gameFucker() {
    // Reset arrays
    answerArray = [];
    lettersGuessed = [];

    // Randomly select a word from the "words" array
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log("currentWord: " + currentWord);
    // Split the currentWord into individual characters
    wordSplit = currentWord.split("");
    console.log("wordSplit: " + wordSplit);

    // Fill the game screen with blanks that match the length of the word
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
        //console.log(answerArray);
        // Populates blanks in the "Current Word" span
        document.getElementById("answerArray").innerHTML = answerArray.join(" ");
    }

    // Reset variables when new word is generated (need to check these variable names)
    remainingLetters = currentWord.length;
    guessesRemaining = 10;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}

// ***** MAIN PROCESS *****

document.onkeyup = function (event) {

    var userGuess = event.key;
    // Change userGuess to lower case
    userGuess = userGuess.toLowerCase();

    // Is the userGuess not a repeat nor invalid key?
    if (lettersGuessed.indexOf(userGuess) == -1 && letters.indexOf(userGuess) !== -1 ) {

        // Store userGuess into lettersGuessed array
        lettersGuessed.push(userGuess);
        //console.log("lettersGuessed: " + lettersGuessed);
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

    } else {
        alert("Invalid keystroke or duplicate letter!");
    }

    // ***Check if userGuess exists in the currentWord***   works!!!
    for (var j = 0; j < currentWord.length; j++) {
        if (currentWord[j] === userGuess) {
            answerArray[j] = userGuess;
            console.log(userGuess + " is in the word!");
        } else {
            guessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        }
    }

    // ***Replace blanks when user guesses correct letters***   works!!!
    var remainingLetters = answerArray.length;
    for (i = 0; i < answerArray.length; i++) {
        if (answerArray[i] !== '_') {
            remainingLetters -= 1;
            document.getElementById("answerArray").innerHTML = answerArray.join(" ");
        }
    }

    // Restart on Win
    if (remainingLetters === 0) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        gameFucker();
    }

    // Restart on Loss
    if (guessesRemaining === 0) {
        losses--;
        document.getElementById("losses").innerHTML = losses;
        gameFucker();
    }
}