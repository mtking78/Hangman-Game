// ***** VARIABLES ***** //
// -------------------------------------------------------------------------------------------------------

var wins = 0;
var losses = 0;
var guessesRemaining = 6;
var words = ["armenia", "belarus", "chad", "denmark", "eritrea"];
var wordSplit = "";
var currentWord = "";
var answerArray = [];
var userGuessesArray = [];
var hasQuit = false;


// ***** FUNCTIONS ***** //
// -------------------------------------------------------------------------------------------------------
function gameStart() {
    answerArray = [];
    // Randomly select a word from the "words" array
    currentWord = words[Math.floor(Math.random() * words.length)];
    //console.log(currentWord);
        // Fill the game screen with blanks that match the length of the word
        for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
        };
        //console.log(answerArray);

        // Populates blanks in the "Current Word" span
        document.getElementById("currentWord").innerHTML = answerArray.join(" ");
}


document.onkeyup = function() {

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        document.getElementById("lettersGuessed").innerHTML = userGuessesArray;

        var userGuess = event.key;
                    if (guessesRemaining > 0) {
                        document.getElementById("pressAnyKey").innerHTML = "Good luck!";
                    };

        if (hasQuit === false) {
            function begin() {
                var showThisMessage = "";
                // Restrict guesses to letters
                if (userGuess !="a" && userGuess !="b" && userGuess !="c" && userGuess !="d" && userGuess !="e" && userGuess !="f" && userGuess !="g" && userGuess !="h" && userGuess !="i" && userGuess !="j" && userGuess !="k" && userGuess !="l" && userGuess !="m" && userGuess !="n" && userGuess !="o" && userGuess !="p" && userGuess !="q" && userGuess !="r" && userGuess !="s" && userGuess !="t" && userGuess !="u" && userGuess !="v" && userGuess !="w" && userGuess !="x" && userGuess !="y" && userGuess !="z") {
                    showThisMessage = "Letters only!";
                } else {
                    // Checks if user guess exists in word
                    var i = 0;
                    for (var i = 0; i < currentWord.length; i++) {
                        if (currentWord[i] === userGuess) {
                            answerArray[i] = userGuess;
                            showThisMessage = userGuess + " is in the word!";
                        };
                    };

                    // User guess is pushed into userGuesses array and only if it doesn't already exist in the same array
                    for (i = 0; i < userGuess.length; i++) {
                        if (guessesRemaining < 6 && userGuess !== userGuessesArray[i] && userGuessesArray.indexOf(userGuess) === -1) {
                                userGuessesArray.push(userGuess);
                        };
                    };

                    // Update the answerArray for remaining blanks
                    var remainingLetters = answerArray.length;
                    for (i = 0; i < answerArray.length; i++) {
                        if (answerArray[i] !== '_') {
                            remainingLetters -= 1;
                        };
                    };

                    // If remainingLetters = 0, the word has been solved
                    // Reset guessesRemaining, guessArray, add a win
                    if (remainingLetters == 0) {
                        showThisMessage = "You solved: " + currentWord + "!";
                        wins++
                        document.getElementById("wins").innerHTML = wins;
                        gameStart();
                        userGuessesArray = [];
                        guessesRemaining = 0;
                    };

                    // If showThisMessage = "", it means the guess was wrong
                    if (showThisMessage === "") {
                        showThisMessage = "There is no " + userGuess;
                        guessesRemaining++;
                    }

                    // Update the answerArray
                    document.getElementById("currentWord").innerHTML = answerArray.join(" ");

                    // if guessesRemaining is <= 10, there are guesses left to make
                    if (guessesRemaining <= 6) {
                        document.getElementById("guessesRemaining").innerHTML = (6 - guessesRemaining);
                    };
                    // if guessesRemaining is 10, no more guesses
                    if (guessesRemaining >= 6) {
                        document.getElementById("guessesRemaining").innerHTML = (6 - guessesRemaining);
                        document.getElementById("losses").innerHTML = losses;
                        losses++;
                        showThisMessage = "Game Over!  Press the Start-Over button for a new game.";
                    };
                };
                document.getElementById("message").innerHTML = showThisMessage;
            };
        };

        // Call the gameStart function
        begin();
        document.getElementById("lettersGuessed").innerHTML = userGuessesArray.join(" ");
};

// Create a refresh function for the Start-Over button
function refresh () {
    hasQuit = false;
    gameStart();
    guessesRemaining = 0;
    wins = 0;
    losses = 0;
    userGuessesArray = [];
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("stat").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("lettersGuessed").innerHTML = userGuessesArray;
    document.getElementById("word").innerHTML = "";
};

function quit () {
    hasQuit = true;
    document.getElementById("word").innerHTML = "The word was " + currentWord + ". Click the Start-Over button to try again.";
    for (var j = 0; j < currentWord.length; j++) {
        answerArray[j] = currentWord[j];
    };
    document.getElementById("currentWord").innerHTML = answerArray.join(" ");
};

// ***** MAIN PROCESS ***** //
// -------------------------------------------------------------------------------------------------------
