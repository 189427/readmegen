const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Project name?",
  },
  {
    type: "input",
    name: "Description",
    message: "Description of the project?",
  },
  {
    type: "input",
    name: "Installation Instructions",
    message: "Please add installation instructions",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please add usage information",
  },
  {
    type: "input",
    name: "Contribution",
    message: "Please add contribution information",
  },
  {
    type: "input",
    name: "Testing",
    message: "Please add testing instructions",
  },
  {
    type: "list",
    name: "License",
    message: "please choose a license",
    choices: ["GNU", "MIT", "Unilicense", "No license"],
    filter(val) {
      return val.toUpperCase();
    },
  },
  {
    type: "input",
    name: "github username",
    message: "Please enter your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },
];

//run question function
async function runQ() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      return answers;
    })
    .catch((error) => {
      console.log(error);
    });
}

runQ();

/* // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); */
