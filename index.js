var Letter = require("./letter.js");
var Word = require("./word.js");
var inquirer = require("inquirer");
var playWordArr = ["blue", "red", "black", "purple", "maroon"];

inquirer
    .prompt([
        {
            name: "username",
            type: "input",
            message:  "What is your name?"
        },
        {
            name: "intro",
            type: "confirm",
            message: "Would you like to play a game of hangman?",
        },
    ])
    .then(function(inqResp) {
        if (inqResp.intro){
            console.log ("Welcome to the game, " + inqResp.username + " !");
            startGame();
            gamePlay();

        }else{
            console.log("Fine. See ya never, " + inqResp.username + " :/");
            return;
        }
    });

function startGame (){
    console.log("");
    console.log("Here's your First Word!")
    console.log("");
}
var userInput;
function gamePlay (){
    var gameWord = new Word (playWordArr[Math.floor(Math.random() * playWordArr.length)]);
    var guesses = 8;
    console.log(gameWord);
    console.log(gameWord.charString());
    inquirer
    .prompt([
        {
            name: "guess",
            type: "input",
            message: "Guess a letter",

        },

    ])
    .then(function(letRes){
        var userInput = letRes.guess;
        console.log(userInput);

    })

}
