// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Provide installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide usage information for your project.",
        name: "usage"
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credits"
    },
    {
        type: "input",
        message: "Provide contribution guidelines for your project.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Provide test instructions for your project.",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        name: "license",
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data), (err) => {
      err ? console.error(err) : console.log("README.md has been created.")
    })
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then(writeToFile);
  }

// Function call to initialize app
init();
