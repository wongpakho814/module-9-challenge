// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's title?",
    "Description of the project (e.g. What was your motivation? What problem does it solve?): ",
    "What are the steps required to install your project?",
    "The instructions and examples for use: ",
    "Please list the collaborators here: ",
    "Please provide examples on how to run the tests, if any: ",
    "Please choose the license used in this project, if any: "
];

// TODO: Create a function to write README file
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: questions[0],
        },
        {
            type: "input",
            name: "description",
            message: questions[0],
        },
    ])

function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
