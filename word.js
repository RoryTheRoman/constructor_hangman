//require letter.js file
var Letter = require("./letter.js");

//create Word Constructor
function Word (playWord){
    this.playWord = playWord;
    var charArr = [];
    //taking each letter of the playword and creating a new Letter object
    for (var i = 0; i < playWord.length; i++){
        charArr.push(new Letter(playWord[i]));//pushing into array
    }
    //function to take those letters and call the reveal function to show either _ or letter
    this.charString = function (){
        var newChar = "";
        for (var i = 0; i < playWord.length; i ++) {
            newChar = newChar + charArr[i].reveal();
        };
        return newChar;
    };
    //function to check user guess, determine true/false value to tell the reveal function what to return
    this.guess = function(userInput) {
        for (var i = 0; i < charArr.length; i ++) {
            
            // need this to check the user input against the letters of the game Word
            // which have been pushed to the array, then run the check function so that
            // the value has been changed false/true depending on the user input.
  
  
        };
        return;
    };
};
//export
 module.exports = Word;



   
