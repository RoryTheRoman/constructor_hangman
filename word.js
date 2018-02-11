var Letter = require("./letter.js");

function Word (playWords){
    this.playWords = new Letter ([
        "whatthefuck", 
        "holyshit", 
        "whatamievendoing",
    ]);
    console.log(playWords);    
    this.toString = function(){
        var newPlayWord = this.playWords;
        reveal();
        return;
    }
    this.userGuess = function(userGuess){
        check();
        return;
    }
        
    }

    
    module.exports = Word;
   
