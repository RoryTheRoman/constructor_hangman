function Letter (userInput){
    this.char = "a";
    this.guess = false;
    this.reveal = function (){
        if (this.char === userInput){
            console.log(this.char);
        }else{
            console.log("_");
        };
    };
    this.check = function (){
        if(this.char === userInput){
            this.guess = true;
            console.log(this.guess);
            return;
        };       
    };
};
var test = new Letter ("t");
test.reveal();
test.check();
this.guess = true;
module.exports = Letter;