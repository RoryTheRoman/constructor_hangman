function Letter (char){
    this.char = char;//THIS WILL BE THE LETTERS OF THE WORD.
    this.shows = false;//THIS WILL BE VALUE BASED ON WHETHER OR NOT IT HAS ALREADY BEEN GUESSED.

    //this is the function that will show either a _ or a letter for the gameword.
    this.reveal = function (){
        if (this.shows === false){
            return "_ ";
        }else{
            return this.char;
        };
    };
    //this is the function that will check if a guess matches a letter in the word, and return it's value.    
    this.check = function (userInput){
        if(this.char === userInput){
            this.shows = true;
            return true;
        }else{
            this.shows === false;
            return false;
        };     
    };
};


module.exports = Letter;