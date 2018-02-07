// ***** VARIABLES ***** //
// -------------------------------------------------------------------------------------------------------

var gameStart = true;
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var words = ["armenia", "belarus", "chad", "denmark", "eritrea"];
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
// delete letters left[], use indexof to check lettersGuessed with -1
var wordSplit = "";
var currentWord = "";
var answerArray = [];
var userGuesses = [];


// ***** FUNCTIONS ***** //
// -------------------------------------------------------------------------------------------------------

document.onclick = function(event) {
// This runs the game until the condition (gameStart=false) at the end of the code block is reached.
    if (gameStart == true) {
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        document.getElementById("lettersGuessed").innerHTML = userGuesses;


// Randomly select a word from the "words" array
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);


// Fill the game screen with blanks that match the length of the word
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }
    console.log(answerArray);

// Populates blanks in the "Current Word" span
    document.getElementById("currentWord").innerHTML = answerArray.join(" ");

// Splits the current word into individual letters
    wordSplit = currentWord.split("");
    lettersLeft = wordSplit.length;
    console.log(wordSplit);

// Populates letters guessed in the "Letters Guessed" span
    document.onkeyup = function (event) {
        console.log(event.key);
        userGuesses.push(event.key);
        document.getElementById("lettersGuessed").innerHTML = userGuesses;
    }

// This prevents key strokes from resetting the current word to solve.  Without this, the user cannot type keys to guess letters.
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
//document.addEventListener('keyup', function(letterChecker) {

    //    for (var j = 0; j <currentWord.length; int++) {
//     console.log(currentWord[j].indexOf('a') >= 0);
//    }
//})

//function lettersGuessed () {
//    var lettersGuessed = document.getElementById("lettersGuessed").value;
//    if (lettersGuessed.length > 0) {
//        for (var i = 0; i < currentWord.length; i++) {
//            if (currentWord[i] === lettersGuessed) {
//                answerArray[i] = lettersGuessed;
//            }
//        }
//    }
//    guessesRemaining--;
//    document.getElementById("guessesRemaining").innerHTML = "No of clicks: " + count;
//    document.getElementById("currentWord").innerHTML = answerArray.join(" ");
//}

// ***** MAIN PROCESS ***** //
// -------------------------------------------------------------------------------------------------------

