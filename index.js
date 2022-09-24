const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Description of the project?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please add installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please add usage information",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please add contribution information",
  },
  {
    type: "input",
    name: "test",
    message: "Please add testing instructions",
  },
  {
    type: "list",
    name: "license",
    message: "please choose a license",
    choices: ["MIT", "No license"],
    filter(val) {
      return val.toUpperCase();
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your Readme is done, you may now view it");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
