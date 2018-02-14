var Letter = require("./letter.js");

function Word (playWord){
    this.playWord = playWord;
    this.charArr = [];
    this.charString = function(){
        var newChar;
        for (var i = 0; i < playWord.length; i ++) {
            newChar = newChar + charArr[i].reveal();
        };
        return newChar;
    };
    this.guess = function(charGuess) {
        for (var i = 0; i < playWord.length; i ++) {
            check();
            reveal();
        };
        return;
    };
};

 module.exports = Word;
   
