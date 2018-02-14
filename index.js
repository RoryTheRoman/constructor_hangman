var Letter = require("./letter.js");
var Word = require("./word.js");
var inquirer = require("inquirer");
var playWordArr = ["blue", "red", "black", "purple", "maroon"];

inquirer
    .prompt([
        {
            name: "intro",
            type: "confirm",
            message: "Would you like to play a game of hangman?",
        },
        {
            name: "username",
            type: "input",
            message:  "What is your name?"
        },
    ])
    .then(function(inquirerResponse) {
        if (inquirerResponse.intro){
            console.log ("Welcome to the game, " + inquirerResponse.username + " !");
            startGame();
            gamePlay();

        };
    });

function startGame (){
    console.log("");
    console.log("Here's your First Word!")
    console.log("");
}
function gamePlay (){
    var gameWord = new Word (Math.floor(Math.random() * playWordArr.length));
    playWord = gameWord;
    console.log(playWord);
}