function Letter (char){
    this.char = char;
    this.guess = false;
    this.reveal = function (){
        if (this.guess === false){
            return "_";
        }else{
            return this.char;
        };
    };
    this.check = function (userInput){
        if(this.userInput === char){
            this.guess = true;
        };       
    };
};

module.exports = Letter;