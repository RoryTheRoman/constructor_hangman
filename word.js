var Letter = require("./letter.js");

function Word (){
    var playWords = new Letter ([
        "whatthefuck", 
        "holyshit", 
        "whatamievendoing",
    ]);
    this.toString = function(){
        var newPlayWord = this.PlayWords;
        reveal();
        return;
    }
    this.userGuess = function(userGuess){
        check();
        return;
    }
        
    }
    
    module.exports = Word;
   
