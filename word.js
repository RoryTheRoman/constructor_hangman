var Letter = require("./letter.js");

function Word (playWord){
    this.playWord = playWord;
    this.charArr = [];
    this.charString = function(playWord){
        for (var i = 0; i < this.playWord.length; i ++) {
            var newChar = new Letter (this.playWord[i]);
            this.charArr.push(newChar.toString());           
        }
    }
};

Word.prototype.toString = function (){
    var stringy = this.playWord[i] + ",";
}  

var test = new Word ("DisWorking");
console.log(test.playWord);
console.log("---------");

console.log(test.charArr);




    // this.userGuess = function(userGuess){
    //     check();
    //     return;
    // }
        

    
    module.exports = Word;
   
