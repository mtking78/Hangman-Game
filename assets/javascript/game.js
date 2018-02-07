// ***** VARIABLES ***** //
// -------------------------------------------------------------------------------------------------------

var gameStart = true;
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var words = ["a", "bb", "ccc", "dddd", "eeeee"];
var letters = ["a", "b", "c", "d", "e",
                "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t",
                 "u", "v", "w", "x", "y", "z"];
var lettersLeft = ["a", "b", "c", "d", "e",
                "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z"];
var wordSplit = "";
var currentWord = "";
var answerArray = [];
var lettersGuessed = [];


// ***** FUNCTIONS ***** //
// -------------------------------------------------------------------------------------------------------

document.onclick = function(event) {
// This runs the game until the condition (gameStart=false) at the end of the code block is reached.
    if (gameStart == true) {
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;


// Randomly select a word from the "words" array
    var currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);

// Fill the game screen with blanks that match the length of the word
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }
    console.log(event.key);
    console.log(answerArray);

// Splits the current word into individual letters
    wordSplit = currentWord.split("");
    lettersLeft = wordSplit.length;
    console.log(wordSplit);

// Populates blanks in the "Current Word" span
// Must be a space in-between quotes else one whole line
    document.getElementById("currentWord").innerHTML = answerArray.join(" ");

// Populates letters guessed in the "Letters Guessed" span

// This prevents key strokes from resetting the current word to solve.
// Without this, the user cannot type keys to guess letters.
    gameStart = false;
    }
}

// Checks if user guess exists in the word or not
//function letterChecker(x) {
//    if (words.indexOf(x) !== -1) {
//        console.log("yes");
//    } else {
//        console.log("no");
//    }
//}
//function letterChecker(x) {
//        var letter = x.charAt();
//        if (letter === "") {
//            console.log("yes");
//        } else {
//            console.log("no");
//        }
//}

function lettersGuessed () {
    var lettersGuessed = document.getElementById("lettersGuessed").value;
    if (lettersGuessed.length > 0) {
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === lettersGuessed) {
                answerArray[i] = lettersGuessed;
            }
        }
    }
    guessesRemaining--;
    document.getElementById("guessesRemaining").innerHTML = "No of clicks: " + count;
    document.getElementById("currentWord").innerHTML = answerArray.join(" ");
}

// ***** MAIN PROCESS ***** //
// -------------------------------------------------------------------------------------------------------

document.onkeyup = function (event) {
}