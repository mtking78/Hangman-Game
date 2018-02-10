 // ***** VARIABLES ***** //
 // -------------------------------------------------------------------------------------------------------

var gameStart = true;
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var words = ["armenia", "belarus", "chad", "denmark", "eritrea"];
var currentWord = "";
var answerArray = [];
var letters = ["a", "b", "c", "d", "e",
                 "f", "g", "h", "i", "j",
                 "k", "l", "m", "n", "o",
                 "p", "q", "r", "s", "t",
                  "u", "v", "w", "x", "y", "z"];
var userGuess = null;
var lettersGuessed = [];
var winningLetters = [];
var wordSplit = [];


 // ***** FUNCTIONS ***** //
 // -------------------------------------------------------------------------------------------------------

document.onclick = function(event) {
    // ***This runs the game until the condition (gameStart=false) at the end of the code block is reached***
    if (gameStart == true) {
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;


        // ***Randomly select a word from the "words" array***  works!!!
        currentWord = words[Math.floor(Math.random() * words.length)];
        console.log("currentWord: " + currentWord);
        // ***Split the currentWord into individual characters***   works!!!
        wordSplit = currentWord.split("");
        console.log("wordSplit: " + wordSplit);

        // ***Fill the game screen with blanks that match the length of the word*** works!!!
        for (var i = 0; i < currentWord.length; i++) {
            answerArray[i] = "_";
            //console.log(answerArray);
            // Populates blanks in the "Current Word" span
            document.getElementById("answerArray").innerHTML = answerArray.join(" ");
        }

        // ***Make an array of one-time-use letters contained in the current word***
//!!!   // !!!testing!!!
        //let wordSplit = currentWord.split("");

        // function removeDuplicates(wordSplit) {
        //     //let winningLetters = []
        //     for(let i = 0; i < wordSplit.length; i++) {
        //         if(winningLetters.indexOf(wordSplit[i]) == -1) {
        //             winningLetters.push(wordSplit[i])
        //         }
        //     }
        //     return winningLetters;
        //     winningLetters = (removeDuplicates(wordSplit));
        //     console.log(winningLetters);
        // }

        // ***Populates letters guessed in the "Letters Guessed" span***    works!!!
        document.onkeyup = function (event) {
            //console.log("event.key: " + event.key);
            userGuess = event.key;
            console.log("userGuess is : " + userGuess);
            lettersGuessed.push(event.key);
            //console.log("lettersGuessed: " + lettersGuessed);
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

            // ***Check if userGuess exists in the currentWord***   works!!!
            for (var j = 0; j < currentWord.length; j++) {
                if (currentWord[j] === userGuess) {
                    answerArray[j] = userGuess;
                    console.log(userGuess + " is in the word!");
                };
            };

            // ***Replace blanks when user guesses correct letters***   works!!!
            var remainingLetters = answerArray.length;
            for (i = 0; i < answerArray.length; i++) {
                if (answerArray[i] !== '_') {
                    remainingLetters -= 1;
                    document.getElementById("answerArray").innerHTML = answerArray.join(" ");
                };
            };

        // This prevents key strokes from resetting the current word to solve.  Without this, the user cannot type keys to guess letters.
        gameStart = false;
        }
    }
}
// function lettersGuessed () {
//     var lettersGuessed = document.getElementById("lettersGuessed").value;
//     if (lettersGuessed.length > 0) {
//         for (var i = 0; i < currentWord.length; i++) {
//             if (currentWord[i] === lettersGuessed) {
//                 answerArray[i] = lettersGuessed;
//             }
//         }
//     }
//     guessesRemaining--;
//     document.getElementById("guessesRemaining").innerHTML = "No of clicks: " + count;
//     document.getElementById("currentWord").innerHTML = answerArray.join(" ");
// }

 // ***** MAIN PROCESS ***** //
 // -------------------------------------------------------------------------------------------------------
