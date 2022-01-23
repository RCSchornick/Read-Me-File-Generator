// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

const questions = [
    {
        type:"input", 
        name:"title",
        message:"What is the title of your project?",
    }, 
    {
        type:"input", 
        name:"description",
        message:"What is the description of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github link?",
    },
    {
        type:"list", 
        name:"license",
        message:"What is your project license?",
        choices: ["ISC", "MIT", "Mozilla", "N/A"]
    },
    {
        type:"input",
        name:"features",
        message:"Are there any special features the user needs to know about?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        fs.writeFileSync("README.md", generateMarkdown(data), (err)=>{if (err) throw err})
    }) 


}

// Function call to initialize app
init();
