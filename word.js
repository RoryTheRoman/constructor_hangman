var Letter = require("./letter.js");

function Word (playWord){
    this.playWord = playWord;
    this.charArr = [];
    this.charString = function(){
        var newChar = "";
        for (var i = 0; i < this.playWord.length; i ++) {
            this.charArr.push(newChar.toString());           
        }
    }
};




        

    
    module.exports = Word;
   
