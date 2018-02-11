function Letter (char){
    this.char = char;
    this.shows = false;
    this.reveal = function (){
        if (this.char === userInput){
            console.log(this.char);
            return this.char;
        }else{
            console.log("_");
            return "_";
        };
    };
    this.check = function (userInput){
        if(this.char === userInput){
            this.shows = true;
            console.log(this.guess);
            return;
        };       
    };
};
// var a = new Letter ("a");
// var userInput = "b";

// a.reveal();
// a.check();