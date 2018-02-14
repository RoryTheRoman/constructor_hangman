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
function gamePlay (){
    var gameWord = playWordArr[Math.floor(Math.random() * playWordArr.length)];
    console.log(gameWord);
}
