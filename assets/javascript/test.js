let wordSplit = ['s','u','c','c','e','e','d']

function removeDuplicates(arr){
    let winningLetters = []
    for(let i = 0; i < wordSplit.length; i++){
        if(winningLetters.indexOf(wordSplit[i]) == -1){
            winningLetters.push(wordSplit[i])
        }
    }
    return winningLetters
}

winningLetters = (removeDuplicates(wordSplit)); // [ 's', 'u', 'c', 'e', 'd' ]
console.log(winningLetters);

// function checkLetter (letter) {
//     var correctLetter = false;
//     for (var i = 0; i < wordSplit; i++) {

//     if (wordSplit[i] == letter) {
//         correctLetter = true;
//         alert("Correct Letter");
//     }
// }
// }

// document.onkeyup = function(event) {
//     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     checkLetter(letterGuessed);
// }

        // *** TJ's filter ***
        // var winningLetters = answerArray.filter(function(item,pos,self) {
        //     return (self.indexOf(item)===-1)
        //     })
        //     console.log("winningLetters: " + winningLetters);

            // ***Check if userGuess is valid (letters only)***
            if (letters.indexOf(userGuess) >= 0 && userGuess !== letters[i]) {
                lettersGuessed.push(event.key);
                //console.log("lettersGuessed: " + lettersGuessed);
                document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
            }