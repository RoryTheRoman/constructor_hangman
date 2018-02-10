var Letter = require("./letter.js");

function Word (playWords){
    var playWords = new Letter ([
        "whatthefuck", 
        "holyshit", 
        "whatamievendoing",
    ]);
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
   
