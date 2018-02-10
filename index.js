var Letter = require("./letter.js");
var Word = require("./word.js");
var inquirer = require("inquirer");

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

        };
    });

function startGame (){
    console.log("");
    console.log("Here's your First Word!")
    console.log("");
}